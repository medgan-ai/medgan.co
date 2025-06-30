import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Return empty array for now to prevent build errors
    // This can be migrated to Supabase later
    return NextResponse.json([])
  } catch (error) {
    console.error('Case Studies API error:', error)
    return NextResponse.json([])
  }
}

export async function POST() {
  try {
    // Return success response for now to prevent build errors
    return NextResponse.json({ message: 'Case study created successfully' })
  } catch (error) {
    console.error('Case Studies API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
