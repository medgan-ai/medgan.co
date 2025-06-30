'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Bot, Brain, Zap, Shield, Users, Target } from 'lucide-react'

export default function AgenticAIPage() {
  const features = [
    {
      icon: Bot,
      title: "Autonomous Agents",
      description: "Self-governing AI agents that can make decisions and take actions without constant human supervision."
    },
    {
      icon: Brain,
      title: "Advanced Learning",
      description: "Continuously learning systems that adapt and improve their performance over time."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant analysis and response capabilities for time-critical business operations."
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with robust failsafe mechanisms and compliance standards."
    },
    {
      icon: Users,
      title: "Human-AI Collaboration",
      description: "Seamless integration with human workflows to enhance productivity and decision-making."
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "AI agents designed to achieve specific business objectives with measurable outcomes."
    }
  ]

  const useCases = [
    {
      title: "Customer Service Automation",
      description: "AI agents that handle complex customer inquiries, escalate when needed, and continuously improve responses.",
      benefits: ["24/7 availability", "Consistent service quality", "Reduced response times"]
    },
    {
      title: "Supply Chain Optimization",
      description: "Autonomous systems that monitor, predict, and optimize supply chain operations in real-time.",
      benefits: ["Reduced costs", "Improved efficiency", "Risk mitigation"]
    },
    {
      title: "Financial Trading Agents",
      description: "AI-powered trading systems that analyze markets and execute trades based on predefined strategies.",
      benefits: ["Faster execution", "Emotion-free decisions", "Risk management"]
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Agentic AI{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Systems
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Deploy autonomous AI agents that think, learn, and act independently to drive your business forward. 
                Our agentic AI systems combine advanced reasoning with goal-oriented behavior.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Bot className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-gray-900">Autonomous</h3>
                    <p className="text-sm text-gray-600">Self-operating AI agents</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Brain className="w-8 h-8 text-secondary mb-4" />
                    <h3 className="font-semibold text-gray-900">Intelligent</h3>
                    <p className="text-sm text-gray-600">Advanced reasoning capabilities</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Zap className="w-8 h-8 text-accent mb-4" />
                    <h3 className="font-semibold text-gray-900">Fast</h3>
                    <p className="text-sm text-gray-600">Real-time processing</p>
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <Shield className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-semibold text-gray-900">Secure</h3>
                    <p className="text-sm text-gray-600">Enterprise-grade safety</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              Powerful Agentic AI Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our agentic AI systems are designed to operate autonomously while maintaining 
              full transparency and control for your organization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
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
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our agentic AI systems are transforming businesses across industries.
            </p>
          </motion.div>

          <div className="space-y-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{useCase.description}</p>
                      <div className="space-y-2">
                        {useCase.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6">
                      <div className="aspect-video bg-white rounded-lg shadow-inner flex items-center justify-center">
                        <Bot className="w-16 h-16 text-primary" />
                      </div>
                    </div>
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
              Ready to Deploy Agentic AI?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss how our autonomous AI agents can transform your business operations 
              and drive unprecedented growth.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Start Your AI Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
