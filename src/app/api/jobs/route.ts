import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if database URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    // Lazy load Prisma to avoid initialization issues
    const { prisma } = await import('@/lib/prisma')
    const jobPostings = await prisma.jobPosting.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' }
    })

    // If no job postings in database, seed with default ones
    if (jobPostings.length === 0) {
      const defaultJobs = [
        {
          title: "Senior AI Engineer",
          department: "Engineering",
          location: "Dubai, UAE",
          type: "Full-time",
          salary: "AED 25,000 - 35,000",
          description: "Join our team to build cutting-edge agentic AI systems that transform businesses across the MENA region.",
          requirements: [
            "5+ years experience in AI/ML development",
            "Strong background in Python, TensorFlow/PyTorch",
            "Experience with autonomous systems and agent frameworks",
            "Master's degree in Computer Science or related field"
          ],
          responsibilities: [
            "Design and implement agentic AI solutions",
            "Lead AI research and development initiatives",
            "Collaborate with cross-functional teams",
            "Mentor junior engineers"
          ],
          benefits: [
            "Competitive salary and equity",
            "Health and dental insurance",
            "Professional development budget",
            "Flexible working arrangements"
          ],
          isActive: true,
          applicationCount: 0
        },
        {
          title: "AI Solutions Architect",
          department: "Engineering",
          location: "Riyadh, Saudi Arabia", 
          type: "Full-time",
          salary: "SAR 20,000 - 30,000",
          description: "Lead the design and architecture of enterprise AI solutions for our major clients in the region.",
          requirements: [
            "7+ years experience in solution architecture",
            "Deep understanding of AI/ML systems",
            "Experience with cloud platforms (AWS, Azure, GCP)",
            "Strong communication and client-facing skills"
          ],
          responsibilities: [
            "Design scalable AI architectures",
            "Work directly with enterprise clients",
            "Provide technical leadership",
            "Define technical standards and best practices"
          ],
          benefits: [
            "Competitive salary package",
            "Annual performance bonus",
            "Health insurance for family",
            "Relocation assistance"
          ],
          isActive: true,
          applicationCount: 0
        },
        {
          title: "Product Manager - AI Products",
          department: "Product",
          location: "Amman, Jordan",
          type: "Full-time", 
          salary: "JOD 3,000 - 4,500",
          description: "Drive product strategy and roadmap for our AI product portfolio across healthcare, logistics, and fintech.",
          requirements: [
            "5+ years product management experience",
            "Background in AI/tech products",
            "Strong analytical and strategic thinking",
            "Experience in MENA markets preferred"
          ],
          responsibilities: [
            "Define product vision and strategy",
            "Manage product roadmap and prioritization",
            "Work with engineering and design teams",
            "Conduct market research and competitor analysis"
          ],
          benefits: [
            "Competitive salary",
            "Stock options",
            "Professional development opportunities",
            "Flexible work environment"
          ],
          isActive: true,
          applicationCount: 0
        }
      ]

      // Seed the database
      for (const job of defaultJobs) {
        await prisma.jobPosting.create({ data: job })
      }

      // Fetch the seeded job postings
      const seededJobs = await prisma.jobPosting.findMany({
        where: { isActive: true },
        orderBy: { createdAt: 'desc' }
      })

      return NextResponse.json(seededJobs)
    }

    return NextResponse.json(jobPostings)
  } catch (error) {
    console.error('Jobs API error:', error)
    // Fallback to static data if database fails
    return NextResponse.json([
      {
        id: "1",
        title: "Senior AI Engineer",
        department: "Engineering",
        location: "Dubai, UAE",
        type: "Full-time",
        description: "Join our team to build cutting-edge agentic AI systems.",
        isActive: true
      }
    ])
  }
}

export async function POST(request: Request) {
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
      title,
      department,
      location,
      type,
      salary,
      description,
      requirements,
      responsibilities,
      benefits,
      isActive = true
    } = body

    // Basic validation
    if (!title || !department || !location || !type || !description) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users
    
    const jobPosting = await prisma.jobPosting.create({
      data: {
        title,
        department,
        location,
        type,
        salary,
        description,
        requirements: requirements || [],
        responsibilities: responsibilities || [],
        benefits: benefits || [],
        isActive,
        applicationCount: 0
      }
    })

    console.log('New job posting created:', {
      id: jobPosting.id,
      title: jobPosting.title,
      department: jobPosting.department,
      location: jobPosting.location,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(jobPosting, { status: 201 })
  } catch (error) {
    console.error('Job posting creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create job posting' },
      { status: 500 }
    )
  }
}
