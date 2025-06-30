'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code, Cog, Database, Globe, Lightbulb, Rocket } from 'lucide-react'

export default function CustomAIPage() {
  const solutions = [
    {
      icon: Code,
      title: "Machine Learning Models",
      description: "Custom-built ML models tailored to your specific data and business requirements.",
      features: ["Predictive Analytics", "Classification Systems", "Recommendation Engines"]
    },
    {
      icon: Database,
      title: "AI-Powered Analytics",
      description: "Advanced data processing and insights generation for better decision-making.",
      features: ["Real-time Dashboards", "Automated Reporting", "Pattern Recognition"]
    },
    {
      icon: Globe,
      title: "Natural Language Processing",
      description: "Understand and process human language to extract meaningful insights.",
      features: ["Sentiment Analysis", "Text Classification", "Language Translation"]
    },
    {
      icon: Cog,
      title: "Computer Vision",
      description: "Visual AI solutions for image and video analysis applications.",
      features: ["Object Detection", "Facial Recognition", "Quality Inspection"]
    },
    {
      icon: Lightbulb,
      title: "AI Chatbots & Assistants",
      description: "Intelligent conversational AI for customer service and internal operations.",
      features: ["24/7 Support", "Multi-language", "Context Awareness"]
    },
    {
      icon: Rocket,
      title: "Process Automation",
      description: "Automate complex business processes with intelligent AI workflows.",
      features: ["Document Processing", "Workflow Optimization", "Decision Automation"]
    }
  ]

  const industries = [
    {
      name: "Healthcare",
      description: "AI solutions for medical diagnosis, patient care, and operational efficiency.",
      applications: ["Diagnostic AI", "Patient Monitoring", "Drug Discovery", "Electronic Health Records"]
    },
    {
      name: "Finance",
      description: "Advanced AI for risk assessment, fraud detection, and algorithmic trading.",
      applications: ["Risk Analysis", "Fraud Detection", "Trading Algorithms", "Credit Scoring"]
    },
    {
      name: "Retail & E-commerce",
      description: "Personalized shopping experiences and inventory optimization.",
      applications: ["Recommendation Systems", "Inventory Management", "Price Optimization", "Customer Analytics"]
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing with predictive maintenance and quality control.",
      applications: ["Predictive Maintenance", "Quality Control", "Supply Chain", "Production Optimization"]
    }
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business requirements, data, and existing systems to identify AI opportunities."
    },
    {
      step: "02", 
      title: "Solution Design",
      description: "Our experts design a custom AI solution architecture tailored to your specific needs and goals."
    },
    {
      step: "03",
      title: "Development & Training",
      description: "We build and train your AI models using the latest technologies and best practices."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Rigorous testing ensures your AI solution meets performance and accuracy requirements."
    },
    {
      step: "05",
      title: "Deployment & Integration",
      description: "Seamless deployment and integration with your existing systems and workflows."
    },
    {
      step: "06",
      title: "Monitoring & Support",
      description: "Ongoing monitoring, maintenance, and optimization to ensure continued success."
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-background-light via-white to-gray-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
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
              Custom AI{' '}
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Tailored artificial intelligence solutions designed specifically for your business challenges. 
              From concept to deployment, we build AI that drives real results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
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
              AI Solutions We Build
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From machine learning models to intelligent automation, we create AI solutions 
              that solve real business problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <solution.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
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
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our custom AI solutions are transforming businesses across various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {industry.applications.map((app) => (
                    <div key={app} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-3 text-center">
                      <span className="text-sm font-medium text-gray-700">{app}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation from start to finish.
            </p>
          </motion.div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg">
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-4`}>
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold text-gray-900 mb-4 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {step.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {step.description}
                  </p>
                </div>
                <div className="w-8 flex justify-center">
                  <div className="w-1 h-16 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
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
              Ready to Build Your Custom AI Solution?
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Let's discuss your unique requirements and create an AI solution that drives real business value.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
            >
              Get Your Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
