'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function BlogPage() {
  // const blogPosts = [] // Empty array to show no blogs - unused for now

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

      {/* Categories Filter - Hidden since no blogs exist */}
      <section className="py-12 bg-white border-b hidden">
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

      {/* Empty State Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-8"
          >
            <motion.div 
              variants={fadeInUp}
              className="bg-gray-50 rounded-3xl p-12 max-w-2xl mx-auto"
            >
              <div className="text-5xl mb-6">📭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                No blogs published yet
              </h3>
              <p className="text-gray-600 mb-6">
                We're working on creating valuable content for you. Check back soon!
              </p>
              <Link 
                href="/"
                className="inline-flex items-center justify-center bg-gradient-to-r from-[#1230AE] to-[#6C48C5] text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Return to Home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA - Kept as it's still relevant */}
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