// Test database connection directly
async function testDatabaseConnection() {
  console.log('🔍 Testing Database Connection...\n');
  
  try {
    const response = await fetch('https://medgan-website-omega.vercel.app/api/stats');
    console.log(`📊 Stats API Status: ${response.status}`);
    
    if (response.ok) {
      const data = await response.json();
      console.log('✅ Database connection working!');
      console.log('Data:', data);
    } else {
      const error = await response.json();
      console.log('❌ Database connection failed:');
      console.log('Error:', error);
    }
    
  } catch (error) {
    console.log('💥 Network Error:', error.message);
  }
}

testDatabaseConnection();
