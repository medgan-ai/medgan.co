'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Brain, Zap, Shield, Bot, Network, Cpu } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/utils'

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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-center justify-between gap-12"
          >
            {/* Text Content - Left Side */}
            <motion.div 
              variants={fadeInUp}
              className="lg:w-1/2 space-y-8 text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              >
                Transform Your Business with{' '}
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Agentic AI
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed"
              >
                Leading AI & Agentic AI solutions provider in the MENA region. 
                We create intelligent autonomous agents that revolutionize how businesses operate, 
                think, and grow in the digital age.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 pt-8"
              >
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Start Your AI Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link 
                  href="/case-studies"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
                >
                  View Case Studies
                </Link>
              </motion.div>
            </motion.div>

            {/* Simplified AI Network Visualization - Right Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className="relative w-96 h-96 md:w-[500px] md:h-[500px]"
            >
              {/* Central AI Hub */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-2xl z-10"
              >
                <Brain className="w-12 h-12 text-white" />
              </motion.div>

              {/* AI Agents positioned around the hub */}
              {[
                { Icon: Bot, position: 'top-8 left-1/2 transform -translate-x-1/2', delay: 0 },
                { Icon: Cpu, position: 'top-20 right-8', delay: 0.5 },
                { Icon: Network, position: 'bottom-20 right-8', delay: 1 },
                { Icon: Zap, position: 'bottom-8 left-1/2 transform -translate-x-1/2', delay: 1.5 },
                { Icon: Shield, position: 'top-20 left-8', delay: 2 },
                { Icon: Bot, position: 'bottom-20 left-8', delay: 2.5 }
              ].map((agent, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 1, 1, 1],
                    scale: [0, 1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    delay: agent.delay,
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                  className={`absolute ${agent.position} w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <agent.Icon className="w-8 h-8 text-white" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <motion.div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  {/* Lines connecting center to agents */}
                  {[
                    "M200,200 L200,50",  // top
                    "M200,200 L320,100", // top-right
                    "M200,200 L320,300", // bottom-right
                    "M200,200 L200,350", // bottom
                    "M200,200 L80,300",  // bottom-left
                    "M200,200 L80,100"   // top-left
                  ].map((path, index) => (
                    <motion.path
                      key={index}
                      d={path}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ 
                        pathLength: 1, 
                        opacity: [0, 0.8, 0.8, 0],
                        strokeDashoffset: [0, -8]
                      }}
                      transition={{
                        pathLength: { duration: 1, delay: index * 0.3 },
                        opacity: { duration: 2, delay: index * 0.3, repeat: Infinity, repeatDelay: 2 },
                        strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }
                      }}
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>

              {/* Data Flow Particles */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={`flow-${index}`}
                  animate={{
                    x: [200, [200, 80, 200, 320, 200, 200][index]],
                    y: [200, [50, 100, 350, 300, 100, 200][index]],
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute w-3 h-3 bg-accent rounded-full"
                  style={{
                    left: -6,
                    top: -6
                  }}
                />
              ))}

              {/* Subtle Glow Effect */}
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
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

      {/* Speed & Results Section */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="text-center mb-20"
    >
      <motion.div 
        variants={fadeInUp}
        className="inline-flex items-center bg-amber-50 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
      >
        <Zap className="w-4 h-4 mr-2" />
        Fast-track your AI transformation
      </motion.div>
      <motion.h2 
        variants={fadeInUp}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
      >
        AI Solutions at <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Warp Speed</span>
      </motion.h2>
      <motion.p 
        variants={fadeInUp}
        className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
      >
        We deliver enterprise-grade AI solutions in weeks, not months - with measurable results from day one.
      </motion.p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Lightning Deployment",
          stat: "2-4 Weeks",
          description: "Our modular AI frameworks get you operational faster than traditional development cycles.",
          icon: <LightningBolt className="w-8 h-8 text-white" />,
          color: "from-purple-600 to-indigo-600"
        },
        {
          title: "Proven ROI",
          stat: "3-5x Faster",
          description: "Clients see measurable ROI within 30 days of implementation on average.",
          icon: <TrendingUp className="w-8 h-8 text-white" />,
          color: "from-green-600 to-teal-600"
        },
        {
          title: "Elite Team",
          stat: "10+ Years XP",
          description: "Battle-tested AI architects who've built solutions for Fortune 500 companies.",
          icon: <ShieldCheck className="w-8 h-8 text-white" />,
          color: "from-blue-600 to-cyan-600"
        }
      ].map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          className="group relative overflow-hidden bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className={`absolute -right-10 -top-10 w-36 h-36 bg-gradient-to-br ${benefit.color} rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
          <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6 relative z-10`}>
            {benefit.icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 relative z-10">{benefit.title}</h3>
          <p className="text-4xl font-extrabold bg-gradient-to-r bg-clip-text text-transparent mb-4 ${benefit.color} relative z-10">
            {benefit.stat}
          </p>
          <p className="text-gray-600 leading-relaxed relative z-10">{benefit.description}</p>
          <div className="mt-6 relative z-10">
            <span className="inline-block w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
          </div>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-20 bg-gradient-to-r from-primary to-secondary rounded-2xl p-0.5"
    >
      <div className="bg-white rounded-xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0 md:mr-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Ready to supercharge your business?</h3>
          <p className="text-gray-600">Get your custom AI solution deployed in record time.</p>
        </div>
        <div className="flex-shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            Start in 48 Hours
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>
    </motion.div>
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