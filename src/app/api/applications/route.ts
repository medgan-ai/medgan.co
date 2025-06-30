import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Check if database URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    // Lazy load Prisma to avoid initialization issues
    const { prisma } = await import('@/lib/prisma')
    const body = await request.json()
    const { 
      jobId,
      jobTitle,
      firstName,
      lastName,
      email,
      phone,
      resumeUrl,
      coverLetter,
      linkedin,
      portfolio,
      experience,
      education,
      skills,
      salary,
      availability
    } = body

    // Basic validation
    if (!jobId || !jobTitle || !firstName || !lastName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
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

    // Store in database
    const application = await prisma.jobApplication.create({
      data: {
        jobId,
        jobTitle,
        firstName,
        lastName,
        email,
        phone,
        resumeUrl,
        coverLetter,
        linkedin,
        portfolio,
        experience,
        education,
        skills: skills || [],
        salary,
        availability,
        status: 'SUBMITTED'
      }
    })

    console.log('✅ Job application saved to database:', application.id)

    // Update application count for the job posting if it exists
    try {
      await prisma.jobPosting.update({
        where: { id: jobId },
        data: {
          applicationCount: {
            increment: 1
          }
        }
      })
    } catch {
      // Job posting might not exist, that's okay
      console.log('Note: Could not update job posting count (job posting may not exist)')
    }

    // TODO: Send notification email to HR
    // TODO: Send confirmation email to applicant
    // TODO: Integrate with ATS (Applicant Tracking System)

    return NextResponse.json(
      { 
        message: 'Thank you for your application! We will review your submission and get back to you soon.',
        success: true,
        applicationId: application.id
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Job application error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
