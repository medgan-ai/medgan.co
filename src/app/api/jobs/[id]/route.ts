import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
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
