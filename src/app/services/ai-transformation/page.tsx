'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Users, Target, Zap, Shield, Globe } from 'lucide-react'

export default function AITransformationPage() {
  const transformationAreas = [
    {
      icon: TrendingUp,
      title: "Digital Strategy",
      description: "Develop comprehensive AI strategies aligned with your business objectives and market position.",
      benefits: ["Competitive Advantage", "Market Positioning", "ROI Optimization"]
    },
    {
      icon: Users,
      title: "Workforce Development", 
      description: "Train your team to work alongside AI systems and leverage new capabilities effectively.",
      benefits: ["Skill Enhancement", "Change Management", "Productivity Boost"]
    },
    {
      icon: Target,
      title: "Process Optimization",
      description: "Identify and transform key business processes with intelligent automation solutions.",
      benefits: ["Efficiency Gains", "Cost Reduction", "Quality Improvement"]
    },
    {
      icon: Zap,
      title: "Technology Integration",
      description: "Seamlessly integrate AI capabilities into your existing technology infrastructure.",
      benefits: ["System Integration", "Data Flow", "Scalability"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Implement AI governance frameworks to ensure ethical and compliant AI deployment.",
      benefits: ["Compliance", "Ethics", "Security"]
    },
    {
      icon: Globe,
      title: "Cultural Change",
      description: "Foster an AI-ready culture that embraces innovation and continuous learning.",
      benefits: ["Innovation Mindset", "Collaboration", "Future-Ready"]
    }
  ]

  const phases = [
    {
      phase: "Assessment",
      duration: "2-4 weeks",
      title: "Current State Analysis",
      description: "Comprehensive evaluation of your existing processes, technology, and readiness for AI transformation.",
      deliverables: ["AI Readiness Assessment", "Gap Analysis", "Opportunity Identification", "Risk Assessment"]
    },
    {
      phase: "Strategy",
      duration: "3-6 weeks", 
      title: "AI Transformation Roadmap",
      description: "Develop a strategic roadmap for AI implementation aligned with your business goals and priorities.",
      deliverables: ["AI Strategy Document", "Implementation Roadmap", "Success Metrics", "Investment Plan"]
    },
    {
      phase: "Pilot",
      duration: "8-12 weeks",
      title: "Proof of Concept",
      description: "Execute pilot projects to validate AI solutions and demonstrate value before full-scale deployment.",
      deliverables: ["Pilot Implementation", "Performance Metrics", "Lessons Learned", "Scaling Plan"]
    },
    {
      phase: "Scale",
      duration: "6-18 months",
      title: "Enterprise Deployment", 
      description: "Roll out AI solutions across the organization with proper change management and support.",
      deliverables: ["Full Deployment", "Training Programs", "Support Systems", "Continuous Improvement"]
    }
  ]

  const successStories = [
    {
      industry: "Healthcare Network",
      challenge: "Manual patient data processing and appointment scheduling inefficiencies",
      solution: "AI-powered patient management system with intelligent scheduling and data processing",
      results: ["40% reduction in administrative time", "25% improvement in patient satisfaction", "60% faster data processing"]
    },
    {
      industry: "Manufacturing Company", 
      challenge: "Unpredictable equipment failures causing production downtime",
      solution: "Predictive maintenance system using IoT sensors and machine learning",
      results: ["35% reduction in downtime", "50% lower maintenance costs", "20% increase in productivity"]
    },
    {
      industry: "Financial Services",
      challenge: "Manual fraud detection and risk assessment processes",
      solution: "AI-driven fraud detection and automated risk scoring system",
      results: ["90% improvement in fraud detection", "70% faster risk assessment", "30% reduction in false positives"]
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background-light via-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              AI{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Transformation
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Transform your entire organization with strategic AI implementation. 
              From strategy to execution, we guide you through every step of your AI journey.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Success Stories
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Transformation Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive AI Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We transform every aspect of your organization to fully leverage the power of artificial intelligence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformationAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <area.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
                <ul className="space-y-2">
                  {area.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Phases */}
      <section className="py-20 bg-gradient-to-br from-background-light to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Transformation Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach that ensures successful AI transformation with measurable results.
            </p>
          </motion.div>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full font-semibold">
                          Phase {index + 1}: {phase.phase}
                        </div>
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {phase.duration}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                    </div>
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Deliverables:</h4>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-gray-700">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformation Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real organizations achieving remarkable results through our AI transformation services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.industry}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-4">{story.industry}</h3>
                    <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Results:</h4>
                    <ul className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Organization?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how we can help you leverage AI to drive innovation, 
              efficiency, and competitive advantage in your industry.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Begin Your Transformation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
