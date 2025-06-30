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
    const { name, email, company, phone, message, service, budget, timeline } = body

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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
    }    // Store in database using Supabase
    const submissionId = generateCuid();
    const { error: insertError } = await supabase
      .from('contact_submissions')
      .insert({
        id: submissionId,
        name,
        email,
        company,
        phone,
        message,
        service,
        budget,
        timeline,
        status: 'NEW',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })

    if (insertError) {
      console.error('Contact form error:', insertError)
      return NextResponse.json(
        { error: 'Failed to submit contact form' },
        { status: 500 }
      )
    }

    console.log('✅ Contact submission saved to database:', submissionId)

    // TODO: Send notification email to admin
    // TODO: Send confirmation email to user
    // TODO: Integrate with CRM system

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        success: true,
        submissionId: submissionId
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
