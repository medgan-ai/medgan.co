import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/integrations/supabase/client'

// Simple CUID-like ID generator that matches the format in your database
function generateCuid(): string {
  const timestamp = Date.now().toString(36);
  const randomPart1 = Math.random().toString(36).substring(2, 8);
  const randomPart2 = Math.random().toString(36).substring(2, 8);
  const randomPart3 = Math.random().toString(36).substring(2, 8);
  return `cmc${timestamp}${randomPart1}${randomPart2}${randomPart3}`;
}

export async function GET() {
  try {
    // Test basic connection by selecting a few records
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .select('*')
      .limit(5)

    if (error) {
      console.error('Connection test error:', error)
      return NextResponse.json({
        status: 'error',
        message: 'Failed to connect to database',
        error: error.message,
        details: error
      }, { status: 500 })
    }

    return NextResponse.json({
      status: 'success',
      message: 'Database connection successful',
      recordCount: data?.length || 0,
      sampleData: data,
      note: 'Check sampleData to see actual column names in your database'
    }, { status: 200 })

  } catch (error) {
    console.error('Connection test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Connection failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

export async function POST() {
  try {
    // Test inserting a simple record to see what columns exist
    const testEmail = `test-${Date.now()}@example.com`;
    
    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert({
        id: generateCuid(),
        email: testEmail,
        source: 'test',
        isActive: true,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      })
      .select()

    if (error) {
      console.error('Insert test error:', error)
      return NextResponse.json({
        status: 'error',
        message: 'Failed to insert test record',
        error: error.message,
        details: error
      }, { status: 500 })
    }

    // Clean up the test record
    await supabase
      .from('newsletter_subscriptions')
      .delete()
      .eq('email', testEmail)

    return NextResponse.json({
      status: 'success',
      message: 'Insert test successful',
      insertedData: data
    }, { status: 200 })

  } catch (error) {
    console.error('Insert test error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Insert test failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
