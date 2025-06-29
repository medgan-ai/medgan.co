'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Heart, Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/utils'

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
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
      ]
    },
    {
      id: 2,
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
      ]
    },
    {
      id: 3,
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
      ]
    },
    {
      id: 4,
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
      ]
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs for you and your family."
    },
    {
      icon: Users,
      title: "Learning & Growth",
      description: "Continuous learning opportunities, conference attendance, and mentorship programs to advance your career."
    },
    {
      icon: Star,
      title: "Innovation Culture",
      description: "Work on cutting-edge AI projects that make a real impact. Freedom to experiment and innovate."
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous vacation time to maintain balance."
    }
  ]

  const values = [
    {
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and encourage creative problem-solving."
    },
    {
      title: "Collaboration",
      description: "We believe diverse teams create better solutions. Every voice matters in our decision-making."
    },
    {
      title: "Continuous Learning",
      description: "The AI field evolves rapidly. We invest in our team's growth and encourage lifelong learning."
    },
    {
      title: "Impact Driven",
      description: "We're passionate about creating AI solutions that genuinely improve businesses and society."
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background-light via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Shape the Future of 
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Join our team of AI pioneers and help build the next generation of intelligent autonomous systems. 
              Be part of a company that's transforming businesses across the MENA region.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="#positions"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <Link 
                href="#culture"
                className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                Learn About Our Culture
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section id="culture" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Our Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide our work and shape our culture
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Why Work With Us
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We invest in our people and provide an environment where you can thrive
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Open Positions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Find your next opportunity to make an impact in the AI industry
            </motion.p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1 mb-6 lg:mb-0">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{position.title}</h3>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{position.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Requirements:</h4>
                      <ul className="text-gray-600 space-y-1">
                        {position.requirements.slice(0, 2).map((req, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    <Link 
                      href={`/careers/${position.id}`}
                      className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              Don't See a Perfect Fit?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 leading-relaxed"
            >
              We're always looking for talented individuals to join our team. 
              Send us your resume and let's explore how you can contribute to the future of AI.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
