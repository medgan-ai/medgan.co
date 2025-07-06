import { NextRequest, NextResponse } from 'next/server'

async function getPrisma() {
  const { prisma } = await import('@/lib/prisma')
  return prisma
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

    // Check if database URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    // Lazy load Prisma to avoid initialization issues
    const prisma = await getPrisma()

    // Check if email already exists
    const existingSubscription = await prisma.newsletterSubscription.findUnique({
      where: { email }
    })

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return NextResponse.json(
          { error: 'Email is already subscribed' },
          { status: 400 }
        )
      } else {
        // Reactivate subscription
        await prisma.newsletterSubscription.update({
          where: { email },
          data: { isActive: true }
        })

        console.log('✅ Newsletter subscription reactivated:', email)
        return NextResponse.json(
          { 
            message: 'Welcome back! Your subscription has been reactivated.',
            success: true 
          },
          { status: 200 }
        )
      }
    }

    // Create new subscription
    const subscription = await prisma.newsletterSubscription.create({
      data: {
        email,
        source: source || 'website',
        isActive: true
      }
    })

    console.log('✅ Newsletter subscription saved to database:', subscription.id)

    return NextResponse.json(
      { 
        message: 'Thank you for subscribing! You will receive our latest AI insights.',
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