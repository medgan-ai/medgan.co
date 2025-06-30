// Live Site API Testing Script
// Run this with: node test-live-apis.js

const BASE_URL = 'https://medgan-website-omega.vercel.app'

async function testAPI(endpoint, method = 'GET', data = null) {
  try {
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    }
    
    if (data) {
      options.body = JSON.stringify(data)
    }
    
    console.log(`\n🧪 Testing ${method} ${endpoint}`)
    const response = await fetch(`${BASE_URL}${endpoint}`, options)
    
    console.log(`📊 Response Status: ${response.status}`)
    
    try {
      const result = await response.json()
      if (response.ok) {
        console.log(`✅ SUCCESS:`, result)
        return result
      } else {
        console.log(`❌ ERROR:`, result)
        return null
      }
    } catch (parseError) {
      console.log(`💥 JSON PARSE ERROR:`, parseError.message)
      const text = await response.text()
      console.log(`📄 Raw response:`, text.substring(0, 200) + '...')
      return null
    }
  } catch (error) {
    console.log(`💥 FETCH ERROR:`, error.message)
    return null
  }
}

async function runLiveTests() {
  console.log('🚀 Testing Live MedGAN Website APIs\n')
  console.log(`🌐 Base URL: ${BASE_URL}\n`)
  
  // Test 1: Contact API
  console.log('=== CONTACT API ===')
  await testAPI('/api/contact', 'POST', {
    name: 'Test User',
    email: `test-live-${Date.now()}@example.com`,
    company: 'Test Company',
    phone: '+1234567890',
    message: 'Test message from live site test',
    service: 'AI Development',
    budget: '$10,000-$50,000',
    timeline: '3-6 months'
  })
  
  // Test 2: Jobs API
  console.log('\n=== JOBS API ===')
  const jobs = await testAPI('/api/jobs')
  
  if (jobs && jobs.length > 0) {
    console.log(`💼 Found ${jobs.length} job postings`)
    
    // Test individual job
    console.log('\n=== INDIVIDUAL JOB API ===')
    await testAPI(`/api/jobs/${jobs[0].id}`)
  } else {
    console.log('❌ No jobs found or API failed')
  }
  
  // Test 3: Job Application API
  console.log('\n=== JOB APPLICATION API ===')
  const jobId = jobs && jobs.length > 0 ? jobs[0].id : 'test-job'
  await testAPI('/api/applications', 'POST', {
    jobId: jobId,
    jobTitle: 'Test Job Application',
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe-live-${Date.now()}@example.com`,
    phone: '+1234567890',
    resumeUrl: null,
    coverLetter: 'Test cover letter from live site',
    linkedin: 'https://linkedin.com/in/johndoe',
    portfolio: 'https://johndoe.com',
    experience: '5+ years in software development',
    education: 'Computer Science Degree',
    skills: ['JavaScript', 'React', 'Node.js'],
    salary: '$80,000',
    availability: 'Immediately'
  })
  
  // Test 4: Newsletter API
  console.log('\n=== NEWSLETTER API ===')
  await testAPI('/api/newsletter', 'POST', {
    email: `newsletter-live-${Date.now()}@example.com`,
    source: 'Live API Test'
  })
  
  console.log('\n🎉 Live API Testing Complete!')
}

runLiveTests().catch(console.error)
