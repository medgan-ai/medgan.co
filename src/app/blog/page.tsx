'use client'

import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Agentic AI: Autonomous Systems That Think and Act",
      excerpt: "Explore how agentic AI is revolutionizing business operations by creating autonomous systems that can think, learn, and make decisions independently.",
      author: "Dr. Ahmed Al-Rashid",
      date: "2024-06-15",
      readTime: "8 min read",
      category: "AI Technology",
      image: "/api/placeholder/600/400",
      slug: "future-of-agentic-ai"
    },
    {
      id: 2,
      title: "Implementing AI Transformation in MENA: A Strategic Guide",
      excerpt: "A comprehensive guide to successfully implementing AI transformation initiatives in Middle Eastern and North African markets.",
      author: "Sarah Al-Mansouri",
      date: "2024-06-10",
      readTime: "12 min read",
      category: "Strategy",
      image: "/api/placeholder/600/400",
      slug: "ai-transformation-mena-guide"
    },
    {
      id: 3,
      title: "Custom AI Development: Building Solutions That Scale",
      excerpt: "Learn the best practices for developing custom AI solutions that can grow with your business and adapt to changing requirements.",
      author: "Mohammad Hassan",
      date: "2024-06-05",
      readTime: "10 min read",
      category: "Development",
      image: "/api/placeholder/600/400",
      slug: "custom-ai-development-guide"
    },
    {
      id: 4,
      title: "Healthcare AI: Transforming Patient Care in the Digital Age",
      excerpt: "Discover how AI is revolutionizing healthcare delivery, from diagnostic assistance to personalized treatment plans.",
      author: "Dr. Layla Khoury",
      date: "2024-05-28",
      readTime: "15 min read",
      category: "Healthcare",
      image: "/api/placeholder/600/400",
      slug: "healthcare-ai-transformation"
    },
    {
      id: 5,
      title: "The ROI of AI: Measuring Success in Digital Transformation",
      excerpt: "Understanding how to measure and maximize the return on investment when implementing AI solutions in your organization.",
      author: "Omar Al-Zahra",
      date: "2024-05-20",
      readTime: "7 min read",
      category: "Business",
      image: "/api/placeholder/600/400",
      slug: "roi-of-ai-digital-transformation"
    },
    {
      id: 6,
      title: "AI Ethics and Governance: Building Responsible AI Systems",
      excerpt: "Essential guidelines for developing and deploying AI systems that are ethical, transparent, and aligned with regulatory requirements.",
      author: "Dr. Fatima Al-Rashid",
      date: "2024-05-15",
      readTime: "11 min read",
      category: "Ethics",
      image: "/api/placeholder/600/400",
      slug: "ai-ethics-and-governance"
    }
  ]

  const categories = ["All", "AI Technology", "Strategy", "Development", "Healthcare", "Business", "Ethics"]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#FFF7F7] via-white to-blue-50">
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
              AI Insights & 
              <span className="text-gradient bg-gradient-to-r from-[#1230AE] to-[#6C48C5] bg-clip-text text-transparent"> Resources</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Stay updated with the latest trends, insights, and best practices in AI and digital transformation. 
              Our expert team shares knowledge to help you navigate the AI revolution.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-200 text-gray-700 hover:bg-[#1230AE] hover:text-white hover:border-[#1230AE] transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
              >
                {/* Post Image */}
                <div className="h-48 bg-gradient-to-br from-[#1230AE]/10 to-[#6C48C5]/10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#1230AE] to-[#6C48C5] rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AI</span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Category */}
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-[#1230AE]/10 text-[#1230AE] rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Link */}
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-[#1230AE] font-semibold hover:text-[#6C48C5] transition-colors flex items-center space-x-2"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-[#1230AE] to-[#6C48C5]">
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
              Stay Updated with AI Insights
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-white/90 leading-relaxed"
            >
              Get the latest AI trends, case studies, and expert insights delivered to your inbox.
            </motion.p>
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-[#1230AE] px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
