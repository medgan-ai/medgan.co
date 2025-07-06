import { NextRequest, NextResponse } from 'next/server'

async function getPrisma() {
  const { prisma } = await import('@/lib/prisma')
  return prisma
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
    }

    // Check if database URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    // Lazy load Prisma to avoid initialization issues
    const prisma = await getPrisma()

    // Store in database using Prisma
    const submission = await prisma.contactSubmission.create({
      data: {
        name,
        email,
        company,
        phone,
        message,
        service,
        budget,
        timeline,
        status: 'NEW'
      }
    })

    console.log('✅ Contact submission saved to database:', submission.id)

    // TODO: Send notification email to admin
    // TODO: Send confirmation email to user
    // TODO: Integrate with CRM system

    return NextResponse.json(
      { 
        message: 'Thank you for your message! We will get back to you within 24 hours.',
        success: true,
        submissionId: submission.id
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
