// Simple test API to check environment variables and database connection
// Test this at: https://your-netlify-url.netlify.app/api/test-connection

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    console.log('=== API Test Debug ===')
    
    // Check environment variables
    const hasDatabase = !!process.env.DATABASE_URL
    const hasNextAuth = !!process.env.NEXTAUTH_URL
    const hasSecret = !!process.env.NEXTAUTH_SECRET
    
    console.log('Environment Variables:', {
      DATABASE_URL: hasDatabase ? 'Present' : 'Missing',
      NEXTAUTH_URL: hasNextAuth ? 'Present' : 'Missing', 
      NEXTAUTH_SECRET: hasSecret ? 'Present' : 'Missing'
    })
    
    if (!hasDatabase) {
      return NextResponse.json({
        success: false,
        error: 'DATABASE_URL environment variable is missing',
        environment: {
          DATABASE_URL: hasDatabase,
          NEXTAUTH_URL: hasNextAuth,
          NEXTAUTH_SECRET: hasSecret
        }
      }, { status: 500 })
    }
    
    // Try to import and connect to Prisma
    console.log('Attempting to load Prisma...')
    const { prisma } = await import('@/lib/prisma')
    
    console.log('Prisma loaded, testing connection...')
    
    // Simple database test
    const result = await prisma.$executeRaw`SELECT 1 as test`
    
    console.log('Database connection successful!')
    
    return NextResponse.json({
      success: true,
      message: 'Database connection working!',
      environment: {
        DATABASE_URL: hasDatabase,
        NEXTAUTH_URL: hasNextAuth,
        NEXTAUTH_SECRET: hasSecret
      },
      connectionTest: result
    })
    
  } catch (error) {
    console.error('Connection test failed:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorType = error instanceof Error ? error.constructor.name : 'UnknownError'
    
    return NextResponse.json({
      success: false,
      error: errorMessage,
      errorType: errorType,
      environment: {
        DATABASE_URL: !!process.env.DATABASE_URL,
        NEXTAUTH_URL: !!process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: !!process.env.NEXTAUTH_SECRET
      }
    }, { status: 500 })
  }
}
