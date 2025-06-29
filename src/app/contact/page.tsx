'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, COMPANY_INFO } from '@/lib/utils'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - replace with actual Zapier webhook
    try {
      // TODO: Replace with actual Zapier webhook URL
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: COMPANY_INFO.email,
      description: "Get in touch via email",
      href: `mailto:${COMPANY_INFO.email}`
    },
    {
      icon: Phone,
      title: "Call Us",
      value: COMPANY_INFO.phone,
      description: "Speak with our team",
      href: `tel:${COMPANY_INFO.phone}`
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: COMPANY_INFO.location,
      description: "Our main office",
      href: "https://maps.google.com/?q=Amman,Jordan"
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Sun - Thu: 9AM - 6PM",
      description: "Jordan Standard Time",
      href: null
    }
  ]

  const services = [
    "Agentic AI Systems",
    "Custom AI Solutions", 
    "AI Transformation Services",
    "AI Strategy Consulting",
    "Machine Learning Development",
    "Process Automation",
    "Other"
  ]

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
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Thank You for Reaching Out!
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                We've received your message and will get back to you within 24 hours. 
                Our AI experts are excited to discuss how we can transform your business.
              </p>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full text-white text-xs flex items-center justify-center font-bold">1</div>
                    <span className="text-gray-700">Our team reviews your requirements</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full text-white text-xs flex items-center justify-center font-bold">2</div>
                    <span className="text-gray-700">We schedule a consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-accent rounded-full text-white text-xs flex items-center justify-center font-bold">3</div>
                    <span className="text-gray-700">We present a customized AI solution</span>
                  </div>
                </div>
              </div>
              
              <motion.a
                href="/"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Back to Home
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background-light via-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
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
              Let's Transform Your Business{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Together
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Ready to unlock the power of AI for your organization? 
              Our experts are here to help you every step of the way.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Start Your AI Journey
                </h2>
                <p className="text-lg text-gray-600">
                  Tell us about your project and we'll get back to you within 24 hours 
                  with a customized AI solution proposal.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                      placeholder="Your full name"
                    />
                  </div>
                  
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                      placeholder="+962 XX XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-900 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 bg-white text-gray-900"
                  >
                    <option value="" className="text-gray-500">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service} className="text-gray-900">{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none bg-white text-gray-900"
                    placeholder="Tell us about your project, challenges, and goals. The more details you provide, the better we can help you."
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
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Get in Touch
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Multiple ways to reach our team. We're here to help you succeed with AI.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <div key={info.title} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-primary hover:text-secondary transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 font-medium">{info.value}</span>
                        )}
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* AI Chat Widget Placeholder */}
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-6 text-white">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI Assistant</h3>
                    <p className="text-white/90 mb-4">
                      Need quick answers? Chat with our AI assistant for instant support 
                      and information about our services.
                    </p>
                    <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg transition-colors font-medium">
                      Coming Soon
                    </button>
                  </div>
                </div>
              </div>

              {/* Office Location */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Office</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>MedGAN Headquarters</strong><br />
                    Amman, Jordan<br />
                    MENA Region
                  </p>
                  <p className="text-gray-600 text-sm">
                    We serve clients across the Middle East and North Africa region, 
                    with additional offices in Dubai and Cairo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Frequently Asked Questions
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600"
            >
              Quick answers to common questions about our AI services.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {[
              {
                q: "How long does an AI implementation typically take?",
                a: "Most projects take 4-12 weeks depending on complexity. We provide detailed timelines during our initial consultation."
              },
              {
                q: "What industries do you specialize in?",
                a: "We work across healthcare, finance, manufacturing, retail, logistics, and energy sectors with specialized solutions for each."
              },
              {
                q: "Do you provide ongoing support after implementation?",
                a: "Yes, we offer comprehensive support packages including monitoring, optimization, and updates to ensure peak performance."
              },
              {
                q: "What's the typical ROI timeline for AI projects?",
                a: "Most clients see full return on investment within 3-6 months, with many experiencing benefits immediately after deployment."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
