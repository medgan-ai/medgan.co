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
    const caseStudies = await prisma.caseStudy.findMany({
      where: { isPublished: true },
      orderBy: { order: 'asc' }
    })

    // If no case studies in database, seed with default ones
    if (caseStudies.length === 0) {
      const defaultCaseStudies = [
        {
          title: "Healthcare AI Transformation",
          subtitle: "Revolutionizing Patient Care with Agentic AI",
          client: "Jordan Medical Center",
          industry: "Healthcare",
          challenge: "Manual patient data processing causing 40% efficiency loss and delayed diagnoses",
          solution: "Implemented agentic AI system for automated patient data analysis, diagnosis assistance, and workflow optimization",
          results: [
            "40% improvement in patient care efficiency",
            "60% reduction in diagnostic errors", 
            "90% automation of routine tasks",
            "$2.3M annual cost savings"
          ],
          imageUrl: "/case-studies/healthcare-ai.jpg",
          isPublished: true,
          order: 1
        },
        {
          title: "Supply Chain Intelligence Revolution",
          subtitle: "Autonomous AI Agents for Logistics Optimization",
          client: "MENA Logistics Corporation",
          industry: "Logistics",
          challenge: "Inefficient route planning and inventory management leading to 30% cost overruns",
          solution: "Deployed autonomous AI agents for route optimization, demand forecasting, and real-time supply chain management",
          results: [
            "30% reduction in operational costs",
            "25% faster delivery times",
            "99.5% inventory accuracy",
            "Real-time supply chain visibility"
          ],
          imageUrl: "/case-studies/logistics-ai.jpg",
          isPublished: true,
          order: 2
        },
        {
          title: "Fintech AI Strategy Implementation",
          subtitle: "Digital Banking Transformation",
          client: "Digital Finance Solutions",
          industry: "Financial Services",
          challenge: "Legacy systems limiting growth and customer experience in competitive fintech market",
          solution: "Comprehensive AI transformation strategy with intelligent automation, fraud detection, and personalized banking services",
          results: [
            "300% increase in customer acquisition",
            "50% reduction in fraud incidents",
            "80% faster loan processing",
            "Market leadership in MENA region"
          ],
          imageUrl: "/case-studies/fintech-ai.jpg",
          isPublished: true,
          order: 3
        }
      ]

      // Seed the database
      for (const caseStudy of defaultCaseStudies) {
        await prisma.caseStudy.create({ data: caseStudy })
      }

      // Fetch the seeded case studies
      const seededCaseStudies = await prisma.caseStudy.findMany({
        where: { isPublished: true },
        orderBy: { order: 'asc' }
      })

      return NextResponse.json(seededCaseStudies)
    }

    return NextResponse.json(caseStudies)
  } catch (error) {
    console.error('Case Studies API error:', error)
    // Fallback to static data if database fails
    return NextResponse.json([
      {
        id: "1",
        title: "Healthcare AI Transformation",
        client: "Jordan Medical Center",
        industry: "Healthcare",
        challenge: "Manual patient data processing causing 40% efficiency loss and delayed diagnoses",
        solution: "Implemented agentic AI system for automated patient data analysis, diagnosis assistance, and workflow optimization",
        results: [
          "40% improvement in patient care efficiency",
          "60% reduction in diagnostic errors"
        ]
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
      subtitle,
      client,
      industry,
      challenge,
      solution,
      results,
      imageUrl,
      isPublished = false,
      order = 0
    } = body

    // Basic validation
    if (!title || !client || !industry || !challenge || !solution || !results) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users
    
    const caseStudy = await prisma.caseStudy.create({
      data: {
        title,
        subtitle,
        client,
        industry,
        challenge,
        solution,
        results,
        imageUrl,
        isPublished,
        order
      }
    })

    console.log('New case study created:', {
      id: caseStudy.id,
      title: caseStudy.title,
      client: caseStudy.client,
      industry: caseStudy.industry,
      isPublished: caseStudy.isPublished,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(caseStudy, { status: 201 })
  } catch (error) {
    console.error('Case study creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create case study' },
      { status: 500 }
    )
  }
}
