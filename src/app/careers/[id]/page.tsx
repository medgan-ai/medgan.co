'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Clock, Users, Upload, Send } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Job data - in a real app this would come from a database
const jobData = {
  1: {
    title: "Senior AI Engineer",
    department: "Engineering",
    location: "Amman, Jordan",
    type: "Full-time",
    experience: "5+ years",
    description: "Lead the development of cutting-edge AI solutions and autonomous agents. Work with our team to build scalable AI systems that transform businesses.",
    requirements: [
      "5+ years experience in AI/ML development",
      "Strong Python, TensorFlow/PyTorch skills",
      "Experience with cloud platforms (AWS, Azure, GCP)",
      "Knowledge of agentic AI systems preferred"
    ],
    responsibilities: [
      "Design and implement advanced AI algorithms and models",
      "Lead a team of AI engineers and researchers",
      "Collaborate with product teams to define AI requirements",
      "Optimize AI models for production deployment",
      "Mentor junior team members and promote best practices"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health insurance",
      "Professional development budget",
      "Flexible working arrangements",
      "Cutting-edge technology stack"
    ]
  },
  2: {
    title: "Agentic AI Researcher",
    department: "Research & Development",
    location: "Amman, Jordan / Remote",
    type: "Full-time",
    experience: "3+ years",
    description: "Research and develop next-generation autonomous AI agents. Contribute to cutting-edge research in agentic AI and multi-agent systems.",
    requirements: [
      "PhD/Masters in AI, ML, or related field",
      "Published research in AI/ML conferences",
      "Experience with reinforcement learning",
      "Strong mathematical and analytical skills"
    ],
    responsibilities: [
      "Conduct research in autonomous AI agents",
      "Develop novel algorithms for multi-agent systems",
      "Publish research findings in top-tier conferences",
      "Collaborate with engineering teams on implementation",
      "Stay current with latest AI research trends"
    ],
    benefits: [
      "Research-focused environment",
      "Conference attendance and publication support",
      "Access to high-performance computing resources",
      "Collaboration with leading AI researchers",
      "Patent and IP recognition program"
    ]
  },
  3: {
    title: "AI Solutions Architect",
    department: "Solutions",
    location: "Dubai, UAE",
    type: "Full-time",
    experience: "4+ years",
    description: "Design and architect AI solutions for enterprise clients across the MENA region. Lead technical discussions with clients and ensure successful AI implementations.",
    requirements: [
      "4+ years in solution architecture",
      "Experience with enterprise AI implementations",
      "Strong communication and presentation skills",
      "Arabic and English fluency required"
    ],
    responsibilities: [
      "Design AI solutions for enterprise clients",
      "Lead technical pre-sales activities",
      "Develop solution architectures and technical proposals",
      "Collaborate with sales and delivery teams",
      "Ensure successful project implementations"
    ],
    benefits: [
      "Travel opportunities across MENA region",
      "Client-facing role with high visibility",
      "Solution design autonomy",
      "Cross-cultural work environment",
      "Performance-based bonuses"
    ]
  },
  4: {
    title: "Data Scientist",
    department: "Data & Analytics",
    location: "Amman, Jordan",
    type: "Full-time",
    experience: "2+ years",
    description: "Analyze complex datasets to extract insights that drive AI model development. Work closely with engineering teams to implement data-driven solutions.",
    requirements: [
      "2+ years in data science/analytics",
      "Proficiency in Python, R, SQL",
      "Experience with big data technologies",
      "Strong statistical analysis skills"
    ],
    responsibilities: [
      "Analyze large datasets to extract actionable insights",
      "Build predictive models and statistical analyses",
      "Collaborate with AI engineers on data preprocessing",
      "Create data visualizations and reports",
      "Ensure data quality and governance standards"
    ],
    benefits: [
      "Access to diverse datasets",
      "Latest data science tools and platforms",
      "Mentorship from senior data scientists",
      "Continuous learning opportunities",
      "Impact on AI product development"
    ]
  }
}

interface JobApplicationPageProps {
  params: Promise<{
    id: string
  }>
}

export default function JobApplicationPage({ params }: JobApplicationPageProps) {
  const resolvedParams = use(params)
  const jobId = parseInt(resolvedParams.id)
  const job = jobData[jobId as keyof typeof jobData]
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
    experience: '',
    education: '',
    portfolio: '',
    coverLetter: '',
    resumeFile: null as File | null
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!job) {
    notFound()
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        resumeFile: e.target.files[0]
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitted(true)
    } catch (error) {
      console.error('Application submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-16">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light via-white to-gray-50">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Application Submitted Successfully!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Thank you for your interest in the {job.title} position. 
                We'll review your application and get back to you within 1-2 weeks.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What's Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold">1</div>
                    <span className="text-gray-700">We review your application and resume</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full text-white text-xs flex items-center justify-center font-bold">2</div>
                    <span className="text-gray-700">Initial screening call if you're a good fit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full text-white text-xs flex items-center justify-center font-bold">3</div>
                    <span className="text-gray-700">Technical interview and team meeting</span>
                  </div>
                </div>
              </div>
              
              <Link
                href="/careers"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                View More Opportunities
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-background-light via-white to-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/careers"
            className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Careers
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {job.department}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap gap-4 text-gray-600">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {job.type}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {job.experience}
                    </div>
                  </div>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {job.description}
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Apply</h3>
                <p className="text-gray-600 mb-6">
                  Ready to join our team? Fill out the application form below.
                </p>
                <a
                  href="#application-form"
                  className="block w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300"
                >
                  Apply Now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                      <span className="text-gray-700">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="application-form" className="py-16 bg-gradient-to-br from-background-light to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Apply for {job.title}
              </h2>
              <p className="text-lg text-gray-600">
                Join our team and help shape the future of AI in the MENA region.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                    placeholder="+962 XX XXX XXXX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="location" className="block text-sm font-semibold text-gray-900 mb-2">
                    Current Location *
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                    placeholder="City, Country"
                  />
                </div>
                
                <div>
                  <label htmlFor="experience" className="block text-sm font-semibold text-gray-900 mb-2">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                  >
                    <option value="">Select experience level</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5-10">5-10 years</option>
                    <option value="10+">10+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="education" className="block text-sm font-semibold text-gray-900 mb-2">
                  Education Background *
                </label>
                <input
                  type="text"
                  id="education"
                  name="education"
                  value={formData.education}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                  placeholder="e.g., BS Computer Science, University Name"
                />
              </div>

              <div>
                <label htmlFor="portfolio" className="block text-sm font-semibold text-gray-900 mb-2">
                  Portfolio/LinkedIn URL
                </label>
                <input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                  placeholder="https://your-portfolio.com or LinkedIn profile"
                />
              </div>

              <div>
                <label htmlFor="resumeFile" className="block text-sm font-semibold text-gray-900 mb-2">
                  Resume/CV *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    type="file"
                    id="resumeFile"
                    name="resumeFile"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="hidden"
                  />
                  <label htmlFor="resumeFile" className="cursor-pointer">
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">
                      {formData.resumeFile ? formData.resumeFile.name : 'Click to upload your resume (PDF, DOC, DOCX)'}
                    </p>
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="coverLetter" className="block text-sm font-semibold text-gray-900 mb-2">
                  Cover Letter *
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-white text-gray-900"
                  placeholder="Tell us why you're interested in this position and how your experience aligns with our requirements..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Submitting Application...</span>
                  </div>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </motion.button>

              <p className="text-sm text-gray-500 text-center">
                By submitting this application, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
