import { NextResponse } from 'next/server'
import { supabase } from '@/integrations/supabase/client'

export async function GET() {
  try {
    const { data: caseStudies, error } = await supabase
      .from('case_studies')
      .select('*')
      .eq('is_published', true)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Case Studies API error:', error)
      // Return empty array instead of failing
      return NextResponse.json([])
    }

    return NextResponse.json(caseStudies || [])
  } catch (error) {
    console.error('Case Studies API error:', error)
    return NextResponse.json([])
  }
}

export async function POST() {
  // Disabled for Netlify deployment
  return NextResponse.json({ error: 'API disabled for deployment' }, { status: 503 })
}
