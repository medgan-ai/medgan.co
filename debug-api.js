// Debug script to see what the live APIs are returning
const BASE_URL = 'https://medgan-website-cgapt08dv-hamzas-projects-badc4cfe.vercel.app'

async function debugAPI() {
  console.log('🔍 Debugging live API response...\n')
  
  try {
    const response = await fetch(`${BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      })
    })
    
    console.log(`Status: ${response.status}`)
    console.log(`Status Text: ${response.statusText}`)
    console.log(`Headers:`, Object.fromEntries(response.headers.entries()))
    
    const text = await response.text()
    console.log(`\nFull Response Body:`)
    console.log(text)
    
  } catch (error) {
    console.log('Error:', error.message)
  }
}

debugAPI()
