// API Testing Script for MedGAN Website
// Run this with: node test-apis.js

const BASE_URL = 'http://localhost:3000'

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
    const result = await response.json()
    
    if (response.ok) {
      console.log(`✅ SUCCESS (${response.status}):`, result)
      return result
    } else {
      console.log(`❌ ERROR (${response.status}):`, result)
      return null
    }
  } catch (error) {
    console.log(`💥 FETCH ERROR:`, error.message)
    return null
  }
}

async function runTests() {
  console.log('🚀 Starting API Tests for MedGAN Website\n')
  
  // Test 1: Contact API
  console.log('=== CONTACT API ===')
  await testAPI('/api/contact', 'POST', {
    name: 'Test User',
    email: `test-${Date.now()}@example.com`, // Use unique email
    company: 'Test Company',
    phone: '+1234567890',
    message: 'Test message from API test',
    service: 'AI Development',
    budget: '$10,000-$50,000',
    timeline: '3-6 months'
  })
  
  // Test 2: Newsletter API - Test both success and duplicate scenarios
  console.log('\n=== NEWSLETTER API ===')
  
  // Test 2a: New subscription (should succeed)
  console.log('🧪 Testing POST /api/newsletter (new email)')
  const newEmailResult = await testAPI('/api/newsletter', 'POST', {
    email: `newsletter-${Date.now()}@example.com`,
    source: 'API Test - New Email'
  })
  
  // Test 2b: Duplicate subscription (should return 400 - this is good!)
  console.log('🧪 Testing POST /api/newsletter (duplicate email)')
  const duplicateResult = await testAPI('/api/newsletter', 'POST', {
    email: 'newsletter-duplicate-test@example.com',
    source: 'API Test - Duplicate Email'
  })
  
  // Try the same email again to test duplicate prevention
  console.log('🧪 Testing POST /api/newsletter (same email again - should show duplicate prevention)')
  const duplicateResult2 = await testAPI('/api/newsletter', 'POST', {
    email: 'newsletter-duplicate-test@example.com',
    source: 'API Test - Duplicate Email 2'
  })
  
  // Test 3: Stats API
  console.log('\n=== STATS API ===')
  await testAPI('/api/stats')
  
  // Test 4: Testimonials API
  console.log('\n=== TESTIMONIALS API ===')
  const testimonials = await testAPI('/api/testimonials')
  
  if (testimonials && testimonials.length > 0) {
    console.log(`📊 Found ${testimonials.length} testimonials`)
  }
  
  // Test 5: Blog API
  console.log('\n=== BLOG API ===')
  const blogPosts = await testAPI('/api/blog')
  
  if (blogPosts && blogPosts.length > 0) {
    console.log(`📝 Found ${blogPosts.length} blog posts`)
  }
  
  // Test 6: Case Studies API
  console.log('\n=== CASE STUDIES API ===')
  const caseStudies = await testAPI('/api/case-studies')
  
  if (caseStudies && caseStudies.length > 0) {
    console.log(`📋 Found ${caseStudies.length} case studies`)
  }
  
  // Test 7: Jobs API
  console.log('\n=== JOBS API ===')
  const jobs = await testAPI('/api/jobs')
  
  if (jobs && jobs.length > 0) {
    console.log(`💼 Found ${jobs.length} job postings`)
    
    // Test individual job details
    console.log('\n=== INDIVIDUAL JOB API ===')
    await testAPI(`/api/jobs/${jobs[0].id}`)
  }
  
  // Test 8: Job Application API
  console.log('\n=== JOB APPLICATION API ===')
  const jobId = jobs && jobs.length > 0 ? jobs[0].id : 'test-job'
  await testAPI('/api/applications', 'POST', {
    jobId: jobId,
    jobTitle: 'Test Job Application',
    firstName: 'John',
    lastName: 'Doe',
    email: `john.doe-${Date.now()}@example.com`, // Use unique email
    phone: '+1234567890',
    resumeUrl: null,
    coverLetter: 'Test cover letter from API test',
    linkedin: 'https://linkedin.com/in/johndoe',
    portfolio: 'https://johndoe.com',
    experience: '5+ years in software development',
    education: 'Computer Science Degree',
    skills: ['JavaScript', 'React', 'Node.js'],
    salary: '$80,000',
    availability: 'Immediately'
  })
  
  // Test 9: Admin Dashboard API
  console.log('\n=== ADMIN DASHBOARD API ===')
  await testAPI('/api/admin/dashboard')
  
  console.log('\n🎉 API Testing Complete!')
  console.log('\n📋 Summary:')
  console.log('- Contact form submissions should be saved to Supabase')
  console.log('- Newsletter subscriptions should be saved to Supabase')
  console.log('- Job applications should be saved to Supabase')
  console.log('- All dynamic content should be fetched from Supabase')
  console.log('- Admin dashboard should show real data from Supabase')
}

runTests().catch(console.error)
