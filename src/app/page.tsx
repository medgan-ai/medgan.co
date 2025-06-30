'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, Shield } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function HomePage() {
  const features = [
    {
      icon: Brain,
      title: "Agentic AI Systems",
      description: "Autonomous AI agents that think, learn, and act independently to solve complex business challenges.",
      href: "/services/agentic-ai"
    },
    {
      icon: Zap,
      title: "Custom AI Solutions",
      description: "Tailored AI development that integrates seamlessly with your existing workflows and systems.",
      href: "/services/custom-ai"
    },
    {
      icon: Shield,
      title: "AI Transformation",
      description: "End-to-end digital transformation powered by cutting-edge artificial intelligence technologies.",
      href: "/services/ai-transformation"
    }
  ]

  const stats = [
    { number: "50+", label: "AI Projects Delivered" },
    { number: "25+", label: "Enterprise Clients" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "15+", label: "Countries Served" }
  ]

  const testimonials = [
    {
      quote: "MedGAN transformed our healthcare operations with their agentic AI system. We've seen 40% improvement in patient care efficiency.",
      author: "Dr. Sarah Al-Mansouri",
      position: "Chief Medical Officer",
      company: "Jordan Medical Center"
    },
    {
      quote: "Their custom AI solution revolutionized our supply chain. We reduced costs by 30% and improved delivery times significantly.",
      author: "Ahmed Hassan",
      position: "Operations Director",
      company: "MENA Logistics Corp"
    },
    {
      quote: "The AI transformation strategy MedGAN provided helped us become the leading fintech in the region.",
      author: "Layla Khoury",
      position: "CEO",
      company: "Digital Finance Solutions"
    }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background-light via-white to-blue-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight"
            >
              Transform Your Business with{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Agentic AI
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Leading AI & Agentic AI solutions provider in the MENA region. 
              We create intelligent autonomous agents that revolutionize how businesses operate, 
              think, and grow in the digital age.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link 
                href="/case-studies"
                className="border-2 border-primary text-primary px-10 py-5 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Case Studies
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              Our AI Solutions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Cutting-edge artificial intelligence technologies designed to automate, 
              optimize, and transform your business operations.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="group bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-accent/30 hover:-translate-y-2"
                >
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">{feature.title}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{feature.description}</p>
                  <Link 
                    href={feature.href}
                    className="text-primary font-semibold hover:text-secondary transition-colors flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-white"
              >
                <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                <div className="text-xl opacity-90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Trusted by leading organizations across the MENA region for AI transformation.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
              >
                <p className="text-gray-700 mb-8 italic leading-relaxed text-lg">"{testimonial.quote}"</p>
                <div className="border-t pt-6">
                  <div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
                  <div className="text-gray-600 mb-2">{testimonial.position}</div>
                  <div className="text-primary font-medium">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl md:text-6xl font-bold text-white mb-8"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Join the AI revolution and unlock your organization's full potential with our 
              cutting-edge agentic AI solutions.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
            >
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-primary to-secondary text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Schedule a Consultation
              </Link>
              <Link 
                href="/services"
                className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
