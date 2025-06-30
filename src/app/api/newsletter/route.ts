import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/integrations/supabase/client'

// Simple CUID-like ID generator that matches the format in your database
function generateCuid(): string {
  const timestamp = Date.now().toString(36);
  const randomPart1 = Math.random().toString(36).substring(2, 8);
  const randomPart2 = Math.random().toString(36).substring(2, 8);
  const randomPart3 = Math.random().toString(36).substring(2, 8);
  return `cmc${timestamp}${randomPart1}${randomPart2}${randomPart3}`;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, source } = body

    // Basic validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Check if email already exists using Supabase client
    const { data: existingSubscription, error: findError } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .eq('email', email)
      .maybeSingle() // Use maybeSingle instead of single to avoid error when no record found

    if (findError) {
      console.error('Newsletter subscription error:', findError)
      return NextResponse.json(
        { error: 'Database error occurred' },
        { status: 500 }
      )
    }    if (existingSubscription) {
      // Check the isActive field (camelCase as shown in the database)
      if (existingSubscription.isActive) {
        return NextResponse.json(
          { error: 'Email is already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        const { error: updateError } = await supabase
          .from('newsletter_subscriptions')
          .update({ isActive: true })
          .eq('email', email)

        if (updateError) {
          console.error('Newsletter subscription error:', updateError)
          return NextResponse.json(
            { error: 'Failed to reactivate subscription' },
            { status: 500 }
          )
        }

        console.log('✅ Newsletter subscription reactivated:', email)
        return NextResponse.json(
          { 
            message: 'Welcome back! Your subscription has been reactivated.',
            success: true 
          },
          { status: 200 }
        )
      }    } else {      // Create new subscription with proper CUID ID
      const { error: insertError } = await supabase
        .from('newsletter_subscriptions')
        .insert({
          id: generateCuid(),
          email,
          source: source || 'website',
          isActive: true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        })

      if (insertError) {
        console.error('Newsletter subscription error:', insertError)
        return NextResponse.json(
          { error: 'Failed to create subscription' },
          { status: 500 }
        )
      }

      console.log('✅ Newsletter subscription created:', email)
    }

    // TODO: Send welcome email
    // TODO: Integrate with email marketing platform (Mailchimp, ConvertKit, etc.)

    return NextResponse.json(
      { 
        message: 'Thank you for subscribing! You will receive our latest updates.',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
