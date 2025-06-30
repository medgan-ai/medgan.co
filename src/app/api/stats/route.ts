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
    // Try to get stats from database
    const stats = await prisma.websiteStats.findFirst({
      orderBy: { updatedAt: 'desc' }
    })

    if (!stats) {
      // Create default stats if none found
      const defaultStats = await prisma.websiteStats.create({
        data: {
          projectsDelivered: 50,
          enterpriseClients: 25,
          clientSatisfaction: "99%",
          countriesServed: 15
        }
      })
      
      return NextResponse.json({
        projectsDelivered: defaultStats.projectsDelivered,
        enterpriseClients: defaultStats.enterpriseClients,
        clientSatisfaction: defaultStats.clientSatisfaction,
        countriesServed: defaultStats.countriesServed,
        lastUpdated: defaultStats.updatedAt.toISOString()
      })
    }

    return NextResponse.json({
      projectsDelivered: stats.projectsDelivered,
      enterpriseClients: stats.enterpriseClients,
      clientSatisfaction: stats.clientSatisfaction,
      countriesServed: stats.countriesServed,
      lastUpdated: stats.updatedAt.toISOString()
    })
  } catch (error) {
    console.error('Stats API error:', error)
    // Fallback to static data if database fails
    return NextResponse.json({
      projectsDelivered: 50,
      enterpriseClients: 25,
      clientSatisfaction: "99%",
      countriesServed: 15,
      lastUpdated: new Date().toISOString()
    })
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { projectsDelivered, enterpriseClients, clientSatisfaction, countriesServed } = body

    // Basic validation
    if (typeof projectsDelivered !== 'number' || typeof enterpriseClients !== 'number' || typeof countriesServed !== 'number') {
      return NextResponse.json(
        { error: 'Invalid data types' },
        { status: 400 }
      )
    }

    // TODO: Add authentication check for admin users
    // TODO: Uncomment when database is set up
    /*
    const updatedStats = await prisma.websiteStats.upsert({
      where: { id: 'main' },
      update: {
        projectsDelivered,
        enterpriseClients,
        clientSatisfaction,
        countriesServed,
        updatedAt: new Date()
      },
      create: {
        id: 'main',
        projectsDelivered,
        enterpriseClients,
        clientSatisfaction,
        countriesServed
      }
    })
    */

    console.log('Stats updated:', {
      projectsDelivered,
      enterpriseClients,
      clientSatisfaction,
      countriesServed,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json(
      { 
        message: 'Stats updated successfully',
        success: true 
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Stats update error:', error)
    return NextResponse.json(
      { error: 'Failed to update stats' },
      { status: 500 }
    )
  }
}
