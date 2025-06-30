'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, Shield, CheckCircle, Star } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that think, learn, and act independently to solve complex business challenges.",
      features: [
        "Autonomous decision-making",
        "Multi-agent coordination",
        "Real-time learning and adaptation",
        "Complex workflow automation"
      ],
      href: "/services/agentic-ai",
      gradient: "from-[#1230AE] to-[#6C48C5]"
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored AI development that integrates seamlessly with your existing workflows and systems.",
      features: [
        "Custom model development",
        "API and system integration",
        "Scalable cloud deployment",
        "Ongoing optimization"
      ],
      href: "/services/custom-ai",
      gradient: "from-[#6C48C5] to-[#C68FE6]"
    },
    {
      icon: Shield,
      title: "AI Transformation Services",
      description: "End-to-end digital transformation powered by cutting-edge artificial intelligence technologies.",
      features: [
        "AI strategy consulting",
        "Process automation",
        "Team training and adoption",
        "Performance monitoring"
      ],
      href: "/services/ai-transformation",
      gradient: "from-[#C68FE6] to-[#1230AE]"
    }
  ]

  const industries = [
    {
      name: "Healthcare",
      description: "AI-powered patient care, diagnosis assistance, and operational optimization",
      icon: "🏥",
      benefits: ["40% efficiency improvement", "Reduced diagnostic errors", "Better patient outcomes"]
    },
    {
      name: "Finance",
      description: "Intelligent fraud detection, risk assessment, and automated trading systems",
      icon: "🏦",
      benefits: ["95% fraud detection accuracy", "Real-time risk monitoring", "Automated compliance"]
    },
    {
      name: "Manufacturing",
      description: "Predictive maintenance, quality control, and supply chain optimization",
      icon: "🏭",
      benefits: ["30% cost reduction", "Zero unplanned downtime", "Quality improvements"]
    },
    {
      name: "Retail",
      description: "Personalized recommendations, inventory management, and customer insights",
      icon: "🛍️",
      benefits: ["25% sales increase", "Optimized inventory", "Enhanced customer experience"]
    },
    {
      name: "Logistics",
      description: "Route optimization, demand forecasting, and automated warehouse operations",
      icon: "🚚",
      benefits: ["35% delivery optimization", "Reduced operational costs", "Real-time tracking"]
    },
    {
      name: "Energy",
      description: "Smart grid management, renewable energy optimization, and predictive analytics",
      icon: "⚡",
      benefits: ["20% energy savings", "Grid stability", "Predictive maintenance"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current processes, identify AI opportunities, and define success metrics."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom AI strategy aligned with your business goals and technical infrastructure."
    },
    {
      step: "03",
      title: "Solution Design",
      description: "Detailed architecture and implementation plan for your AI solution."
    },
    {
      step: "04",
      title: "Development & Testing",
      description: "Agile development with continuous testing and refinement of AI models."
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "Seamless integration with existing systems and comprehensive staff training."
    },
    {
      step: "06",
      title: "Optimization & Support",
      description: "Ongoing monitoring, optimization, and support to ensure peak performance."
    }
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
              AI Solutions That{' '}
              <span className="text-gradient bg-gradient-to-r from-[#1230AE] to-[#6C48C5] bg-clip-text text-transparent">
                Transform Business
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              From autonomous AI agents to complete digital transformation, 
              we deliver cutting-edge solutions that drive real business results.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-[#1230AE] to-[#6C48C5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-[#1230AE] text-[#1230AE] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#1230AE] hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
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
              Our Core Services
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Comprehensive AI solutions designed to address every aspect of your digital transformation journey.
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-xl text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link 
                      href={service.href}
                      className={`inline-flex items-center space-x-2 bg-gradient-to-r ${service.gradient} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="flex-1">
                    <div className={`bg-gradient-to-br ${service.gradient} rounded-2xl p-8 text-white`}>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-xl font-bold mb-2">Key Benefits</h4>
                          <ul className="space-y-2 text-white/90">
                            <li>• Reduced operational costs by 30-50%</li>
                            <li>• Improved efficiency and accuracy</li>
                            <li>• 24/7 automated operations</li>
                            <li>• Scalable and future-ready solutions</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold mb-2">Implementation Time</h4>
                          <p className="text-white/90">4-12 weeks depending on complexity</p>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold mb-2">ROI Timeline</h4>
                          <p className="text-white/90">3-6 months for full return on investment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries */}
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
              Industries We Serve
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Specialized AI solutions tailored to the unique challenges and opportunities of your industry.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{industry.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{industry.description}</p>
                
                <div className="space-y-2">
                  {industry.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-[#1230AE]" />
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              Our Process
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              A proven methodology that ensures successful AI implementation and measurable business results.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="text-[#C68FE6] text-lg font-bold mb-2">{step.step}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                
                <div className="mx-8">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#1230AE] to-[#6C48C5] rounded-full"></div>
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1230AE] to-[#6C48C5]">
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
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Let's discuss how our AI solutions can drive growth, efficiency, and innovation in your organization.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-white text-[#1230AE] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#1230AE] transition-all duration-300"
              >
                View Success Stories
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
