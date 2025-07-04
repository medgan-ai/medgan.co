'use client'

import { motion } from 'framer-motion'
import { Users, Target, Lightbulb, Globe } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '@/lib/utils'

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI, constantly exploring cutting-edge technologies and methodologies."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Every solution is tailored to our clients' unique challenges, ensuring maximum impact and seamless integration."
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "We measure success by the tangible improvements we deliver to our clients' operations and bottom line."
    },
    {
      icon: Globe,
      title: "MENA Expertise",
      description: "Deep understanding of the regional market, culture, and business environment across the MENA region."
    }
  ]
  const team = [
    {
      name: "Eng. Mohammed Zaloom",
      position: "Founder & CEO",
      bio: "Recent AI and Robotics graduate passionate about applying emerging technologies to solve real-world problems through innovative, data-driven solutions..",
      image: "/images/ZALOOM.JPG",
      linkedin: "https://www.linkedin.com/in/mozaloom/",
      expertise: ["AI Implementation", "Digital Transformation", "Enterprise Solutions"]
    },
    {
      name: "Eng. Hamza Nasser",
      position: "Founder & CTO",
      bio: "AI & Robotics graduate from Al-Balqa' Applied University with hands-on experience in machine learning, computer vision, and embedded systems, passionate about building real-world AI solutions that create meaningful impact.",
      image: "/images/HAMZA.JPG",
      linkedin: "https://www.linkedin.com/in/hamza-waseem-nasser/",
      expertise: ["LLMs", "Multi-Agent Systems", "Cloud Architecture"]
    },
    {
      name: "Eng. Mahmoud AbuAwd",
      position: "Founder & Head of AI Solutions",
      bio: "Mahmoud AbuAwd, AWS Certified AI Practitioner & ML Engineer with 2+ years of experience in deep learning, generative AI, and embedded systems, specializing in end-to-end AI solutions for computer vision, NLP, and medical imaging.",
      image: "/images/mahmoud.JPG",
      linkedin: "https://www.linkedin.com/in/mahmoud-abuawd-247290225/",
      expertise: ["Agentic AI", "Machine Learning", "Business Strategy"]
    }
  ]

  const milestones = [
    {
      id: 1,
      year: "2024",
      month: "Q1",
      title: "MedGAN Founded",
      description: "Established in Amman with a vision to democratize AI technology across the MENA region."
    },
    {
      id: 2,
      year: "2024",
      month: "Q2",
      title: "First Enterprise Client",
      description: "Successfully deployed agentic AI system for major healthcare provider, improving efficiency by 40%."
    },
    {
      id: 3,
      year: "2024",
      month: "Q3",
      title: "Series A Funding",
      description: "Secured $2M in funding to expand our AI research and development capabilities."
    },
    {
      id: 4,
      year: "2025",
      month: "Q1",
      title: "Regional Expansion",
      description: "Opened offices in Dubai and Cairo, serving clients across 15+ MENA countries."
    },
    {
      id: 5,
      year: "2025",
      month: "Q2",
      title: "AI Research Lab",
      description: "Launched dedicated research facility focusing on autonomous AI agents and Arabic language processing."
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#FFF7F7] via-white to-[#f8fafc]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#C68FE6]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#1230AE]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="text-center space-y-8"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Pioneering the Future of{' '}
              <span className="text-gradient bg-gradient-to-r from-[#1230AE] to-[#6C48C5] bg-clip-text text-transparent">
                Agentic AI
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              We&apos;re a team of world-class AI researchers, engineers, and strategists 
              transforming how businesses operate through autonomous intelligence in the MENA region.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInLeft}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                To democratize artificial intelligence by making advanced AI solutions 
                accessible to businesses of all sizes across the MENA region. We believe 
                every organization deserves the competitive advantage that comes with 
                intelligent automation and autonomous AI agents.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#1230AE] rounded-full"></div>
                  <span className="text-gray-700">Empower businesses with cutting-edge AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#6C48C5] rounded-full"></div>
                  <span className="text-gray-700">Bridge the AI gap in the MENA region</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#C68FE6] rounded-full"></div>
                  <span className="text-gray-700">Create sustainable competitive advantages</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInRight}
              className="bg-gradient-to-br from-[#1230AE] to-[#6C48C5] rounded-2xl p-8 text-white"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
              <p className="text-xl leading-relaxed mb-8">
                To be the leading AI innovation hub in the MENA region, where autonomous 
                intelligence transforms industries and creates unprecedented opportunities 
                for economic growth and technological advancement.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold mb-2">2030</div>
                  <div className="text-sm opacity-90">AI Leadership Goal</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">1000+</div>
                  <div className="text-sm opacity-90">Businesses Transformed</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Our Core Values
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The principles that guide everything we do and every solution we create.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1230AE] to-[#6C48C5] rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Meet Our Team
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              World-class AI experts, researchers, and strategists united by a passion 
              for transformative technology.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="h-64 relative bg-gradient-to-br from-[#1230AE]/10 to-[#6C48C5]/10 flex items-center justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-[#1230AE] font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.expertise.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-[#FFF7F7] text-[#6C48C5] text-xs font-medium rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1230AE] hover:text-[#6C48C5] transition-colors text-sm font-semibold"
                  >
                    Connect on LinkedIn →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-20 bg-gray-900">
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
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Our Journey
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Key milestones in our mission to transform the MENA region through AI innovation.
            </motion.p>
          </motion.div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`max-w-md ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} text-${index % 2 === 0 ? 'right' : 'left'}`}>
                    <div className="text-2xl font-bold text-[#C68FE6] mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
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
              Ready to Join Our AI Revolution?
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 max-w-3xl mx-auto"
            >
              Whether you&apos;re looking to transform your business or join our team, 
              we&apos;d love to hear from you.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link 
                href="/contact"
                className="bg-white text-[#1230AE] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Start Your AI Journey
              </Link>
              <Link 
                href="/careers"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#1230AE] transition-all duration-300"
              >
                Join Our Team
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}