import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/integrations/supabase/client'

export async function GET() {
  try {
    // Test the Supabase connection by querying the newsletter_subscriptions table
    // First, let's try to get any existing records to see the actual column structure
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .limit(1)

    if (error) {
      console.error('Supabase connection error:', error)
      return NextResponse.json(
        { 
          status: 'error',
          message: 'Failed to connect to Supabase',
          error: error.message,
          details: error
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        status: 'success',
        message: 'Supabase connection successful',
        timestamp: new Date().toISOString(),
        sampleData: data,
        dataLength: data?.length || 0,
        note: 'Check the sampleData to see actual column names'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Connection test error:', error)
    return NextResponse.json(
      { 
        status: 'error',
        message: 'Internal server error',
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
