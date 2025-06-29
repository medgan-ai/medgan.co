'use client'

import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, CheckCircle, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/utils'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Healthcare AI Transformation",
      client: "Jordan Medical Center",
      industry: "Healthcare",
      challenge: "Manual patient data processing causing 40% efficiency loss and delayed diagnoses",
      solution: "Implemented agentic AI system for automated patient data analysis, diagnosis assistance, and workflow optimization",
      results: [
        "40% improvement in patient care efficiency",
        "60% reduction in diagnostic errors", 
        "90% automation of routine tasks",
        "$2.3M annual cost savings"
      ],
      timeline: "8 weeks",
      technologies: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Workflow Automation"],
      image: "/case-studies/healthcare-ai.jpg",
      testimonial: {
        quote: "MedGAN's AI system transformed our operations completely. We now serve 40% more patients with the same staff while improving care quality.",
        author: "Dr. Sarah Al-Mansouri",
        position: "Chief Medical Officer"
      },
      metrics: {
        efficiency: "+40%",
        costSavings: "$2.3M",
        errorReduction: "60%",
        patientSatisfaction: "95%"
      }
    },
    {
      id: 2,
      title: "Supply Chain Intelligence Revolution",
      client: "MENA Logistics Corporation",
      industry: "Logistics",
      challenge: "Inefficient route planning and inventory management leading to 30% cost overruns",
      solution: "Deployed autonomous AI agents for route optimization, demand forecasting, and real-time supply chain management",
      results: [
        "30% reduction in operational costs",
        "25% faster delivery times",
        "99.5% inventory accuracy",
        "Real-time supply chain visibility"
      ],
      timeline: "6 weeks",
      technologies: ["Multi-Agent Systems", "Route Optimization", "Demand Forecasting", "IoT Integration"],
      image: "/case-studies/logistics-ai.jpg",
      testimonial: {
        quote: "The AI agents work 24/7 to optimize our entire supply chain. We've never been more efficient or profitable.",
        author: "Ahmed Hassan",
        position: "Operations Director"
      },
      metrics: {
        costReduction: "30%",
        deliverySpeed: "+25%",
        accuracy: "99.5%",
        roi: "400%"
      }
    },
    {
      id: 3,
      title: "Fintech AI Innovation Platform",
      client: "Digital Finance Solutions",
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment limiting growth and increasing losses",
      solution: "Built comprehensive AI platform with real-time fraud detection, automated risk assessment, and intelligent customer insights",
      results: [
        "95% fraud detection accuracy",
        "50% faster loan processing",
        "70% reduction in financial losses",
        "Market leadership position achieved"
      ],
      timeline: "12 weeks",
      technologies: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis", "Risk Modeling"],
      image: "/case-studies/fintech-ai.jpg",
      testimonial: {
        quote: "MedGAN's AI platform made us the leading fintech in the region. Our growth has been exponential since implementation.",
        author: "Layla Khoury",
        position: "CEO"
      },
      metrics: {
        fraudAccuracy: "95%",
        processingSpeed: "+50%",
        lossReduction: "70%",
        customerGrowth: "+200%"
      }
    }
  ]

  const industries = [
    { name: "Healthcare", count: 15, icon: "🏥" },
    { name: "Finance", count: 12, icon: "🏦" },
    { name: "Logistics", count: 8, icon: "🚚" },
    { name: "Manufacturing", count: 10, icon: "🏭" },
    { name: "Retail", count: 7, icon: "🛍️" },
    { name: "Energy", count: 5, icon: "⚡" }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FFF7F7] via-white to-[#f8fafc]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#C68FE6]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1230AE]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Real Results from{' '}
              <span className="text-gradient bg-gradient-to-r from-[#1230AE] to-[#6C48C5] bg-clip-text text-transparent">
                AI Innovation
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Discover how leading organizations across the MENA region have transformed 
              their operations and achieved unprecedented growth with our AI solutions.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1230AE] mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#6C48C5] mb-2">$25M+</div>
                <div className="text-gray-600">Cost Savings Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#C68FE6] mb-2">99%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#1230AE] mb-2">6</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 bg-white">
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
              Industries We've Transformed
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              From healthcare to finance, our AI solutions drive success across diverse sectors.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{industry.name}</h3>
                <p className="text-sm text-gray-600">{industry.count} projects</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-[#FFF7F7]">
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
              Featured Success Stories
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Deep dives into transformative AI implementations that delivered exceptional results.
            </motion.p>
          </motion.div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="px-3 py-1 bg-[#1230AE]/10 text-[#1230AE] text-sm font-medium rounded-full">
                            {study.industry}
                          </span>
                          <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{study.timeline}</span>
                          </span>
                        </div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-lg text-[#1230AE] font-semibold">{study.client}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Results</h4>
                        <div className="space-y-2">
                          {study.results.map((result) => (
                            <div key={result} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                              <span className="text-gray-700">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {study.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-[#C68FE6]/10 text-[#6C48C5] text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-[#1230AE] to-[#6C48C5] rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-white text-lg font-bold">
                              {study.testimonial.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="text-gray-700 italic mb-3">"{study.testimonial.quote}"</p>
                            <div>
                              <div className="font-semibold text-gray-900">{study.testimonial.author}</div>
                              <div className="text-sm text-gray-600">{study.testimonial.position}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className={`bg-gradient-to-br from-[#1230AE] to-[#6C48C5] p-8 lg:p-12 text-white ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <h4 className="text-2xl font-bold mb-8">Impact Metrics</h4>
                    
                    <div className="grid grid-cols-2 gap-6">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-3xl font-bold mb-2">{value}</div>
                          <div className="text-sm opacity-90 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-8 border-t border-white/20">
                      <h5 className="font-semibold mb-4">Project Highlights</h5>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4" />
                          <span>Deployed across multiple departments</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>500+ employees trained</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4" />
                          <span>Zero downtime deployment</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <button className="w-full bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
                        <span>View Full Case Study</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Write Your Success Story?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Join the growing list of organizations that have transformed their operations 
              and achieved remarkable results with our AI solutions.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-[#1230AE] to-[#6C48C5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your Transformation
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
