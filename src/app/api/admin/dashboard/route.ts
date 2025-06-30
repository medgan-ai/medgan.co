import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Check if we're in a build environment without database access
    if (!process.env.DATABASE_URL) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 503 })
    }

    // Lazy load Prisma only when needed (not during build)
    const { prisma } = await import('@/lib/prisma')

    // TODO: Add authentication check
    // const session = await getServerSession(authOptions)
    // if (!session || !session.user.isAdmin) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    // }

    const [
      contactSubmissions,
      jobApplications,
      newsletterSubscriptions,
      stats
    ] = await Promise.all([
      prisma.contactSubmission.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10
      }),
      prisma.jobApplication.findMany({
        orderBy: { createdAt: 'desc' },
        take: 10
      }),
      prisma.newsletterSubscription.count({
        where: { isActive: true }
      }),
      prisma.websiteStats.findFirst({
        orderBy: { updatedAt: 'desc' }
      })
    ])

    return NextResponse.json({
      dashboard: {
        recentContacts: contactSubmissions,
        recentApplications: jobApplications.map((app) => ({
          id: app.id,
          jobTitle: app.jobTitle,
          applicant: `${app.firstName} ${app.lastName}`,
          email: app.email,
          experience: app.experience,
          createdAt: app.createdAt.toISOString(),
          status: app.status
        })),
        subscriberCount: newsletterSubscriptions,
        testimonialCount: 8, // Static for now
        currentStats: stats ? {
          projectsDelivered: stats.projectsDelivered,
          enterpriseClients: stats.enterpriseClients,
          clientSatisfaction: stats.clientSatisfaction,
          countriesServed: stats.countriesServed
        } : {
          projectsDelivered: 50,
          enterpriseClients: 25,
          clientSatisfaction: '99%',
          countriesServed: 15
        }
      }
    })
  } catch (error) {
    console.error('Admin dashboard error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch dashboard data' },
      { status: 500 }
    )
  }
}
