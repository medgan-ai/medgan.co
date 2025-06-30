// Test all available URLs for the deployment
const URLS = [
  'https://medgan-website-72qd9rqgm-hamzas-projects-badc4cfe.vercel.app',
  'https://medgan-website-omega.vercel.app',
  'https://medgan-website-hamzas-projects-badc4cfe.vercel.app'
];

async function testAllUrls() {
  console.log('🔍 Testing all deployment URLs...\n');
  
  for (const url of URLS) {
    console.log(`🌐 Testing: ${url}`);
    
    try {
      // Test simple page access first
      const pageResponse = await fetch(url);
      console.log(`📄 Page Status: ${pageResponse.status}`);
      
      // Test API access
      const apiResponse = await fetch(`${url}/api/jobs`);
      console.log(`🔌 API Status: ${apiResponse.status}`);
      
      if (apiResponse.status === 200) {
        const data = await apiResponse.json();
        console.log(`✅ API Working! Jobs found: ${data.length}`);
      } else {
        const text = await apiResponse.text();
        console.log(`❌ API Error: ${text.substring(0, 100)}...`);
      }
      
    } catch (error) {
      console.log(`💥 Error: ${error.message}`);
    }
    
    console.log('---');
  }
}

testAllUrls();
