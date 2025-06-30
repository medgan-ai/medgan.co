import { NextResponse } from 'next/server'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    // Check if database URL is configured
    if (!process.env.DATABASE_URL) {
      console.error('DATABASE_URL not configured')
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 })
    }

    // Lazy load Prisma to avoid initialization issues
    const { prisma } = await import('@/lib/prisma')
    const { id: jobId } = await params

    const jobPosting = await prisma.jobPosting.findUnique({
      where: { 
        id: jobId,
        isActive: true 
      }
    })

    if (!jobPosting) {
      return NextResponse.json(
        { error: 'Job not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(jobPosting)
  } catch (error) {
    console.error('Job details API error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch job details' },
      { status: 500 }
    )
  }
}
