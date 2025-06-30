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
    const testimonials = await prisma.testimonial.findMany({
      where: { isActive: true },
      orderBy: { order: 'asc' }
    })

    // If no testimonials in database, seed with default ones
    if (testimonials.length === 0) {
      const defaultTestimonials = [
        {
          quote: "MedGAN transformed our healthcare operations with their agentic AI system. We've seen 40% improvement in patient care efficiency.",
          authorName: "Dr. Sarah Al-Mansouri",
          authorPosition: "Chief Medical Officer",
          company: "Jordan Medical Center",
          authorImage: "/team/sarah-placeholder.jpg",
          isActive: true,
          order: 1
        },
        {
          quote: "Their custom AI solution revolutionized our supply chain. We reduced costs by 30% and improved delivery times significantly.",
          authorName: "Ahmed Hassan",
          authorPosition: "Operations Director",
          company: "MENA Logistics Corp",
          authorImage: "/team/ahmed-placeholder.jpg",
          isActive: true,
          order: 2
        },
        {
          quote: "The AI transformation strategy MedGAN provided helped us become the leading fintech in the region.",
          authorName: "Layla Khoury",
          authorPosition: "CEO",
          company: "Digital Finance Solutions",
          authorImage: "/team/layla-placeholder.jpg",
          isActive: true,
          order: 3
        }
      ]

      // Seed the database
      for (const testimonial of defaultTestimonials) {
        await prisma.testimonial.create({
          data: testimonial
        })
      }

      // Return the seeded testimonials
      return NextResponse.json(defaultTestimonials.map((t, index) => ({
        id: (index + 1).toString(),
        ...t
      })))
    }

    return NextResponse.json(testimonials)
  } catch (error) {
    console.error('Testimonials API error:', error)
    // Fallback to static data if database fails
    return NextResponse.json([
      {
        id: "1",
        quote: "MedGAN transformed our healthcare operations with their agentic AI system. We've seen 40% improvement in patient care efficiency.",
        authorName: "Dr. Sarah Al-Mansouri",
        authorPosition: "Chief Medical Officer",
        company: "Jordan Medical Center",
        authorImage: "/team/sarah-placeholder.jpg",
        isActive: true,
        order: 1
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
      quote, 
      authorName, 
      authorPosition, 
      company, 
      authorImage, 
      isActive = true, 
      order = 0 
    } = body

    // Basic validation
    if (!quote || !authorName || !authorPosition || !company) {
      return NextResponse.json(
        { error: 'Required fields are missing' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users
    
    const testimonial = await prisma.testimonial.create({
      data: {
        quote,
        authorName,
        authorPosition,
        company,
        authorImage,
        isActive,
        order
      }
    })

    console.log('New testimonial added to database:', {
      id: testimonial.id,
      authorName: testimonial.authorName,
      company: testimonial.company,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(testimonial, { status: 201 })
  } catch (error) {
    console.error('Testimonial creation error:', error)
    return NextResponse.json(
      { error: 'Failed to create testimonial' },
      { status: 500 }
    )
  }
}
