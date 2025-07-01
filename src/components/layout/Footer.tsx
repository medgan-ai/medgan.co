'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [emailInput, setEmailInput] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput.trim()) return

    setNewsletterStatus('loading')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email: emailInput.trim(),
          source: 'footer'
        }),
      })

      if (response.ok) {
        setNewsletterStatus('success')
        setEmailInput('')
      } else {
        setNewsletterStatus('error')
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setNewsletterStatus('error')
    }

    // Reset status after 3 seconds
    setTimeout(() => setNewsletterStatus('idle'), 3000)
  }

  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Agentic AI Systems', href: '/services/agentic-ai' },
        { name: 'Custom AI Solutions', href: '/services/custom-ai' },
        { name: 'AI Transformation', href: '/services/ai-transformation' },
        { name: 'AI Strategy Consulting', href: '/services/ai-strategy' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'AI Blog', href: '/blog' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Documentation', href: '/docs' },
        { name: 'Support', href: '/support' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Use', href: '/terms' },
        { name: 'Cookie Policy', href: '/cookies' },
        { name: 'Sitemap', href: '/sitemap.xml' },
      ]
    }
  ]

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/medgan', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/medgan_ai', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/medgan', icon: Github },
    { name: 'Facebook', href: 'https://www.facebook.com/company.medganai', icon: Facebook },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              
              <span className="text-xl font-bold">MedGAN</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading AI & Agentic AI solutions provider in the MENA region. 
              We transform businesses through intelligent automation and custom AI development.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Amman, Jordan</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact@medgan.co</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+962 79 1034 222</span>
              </div>
            </div>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest insights on AI technology and industry trends.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
                disabled={newsletterStatus === 'loading'}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#1230AE] text-sm disabled:opacity-50"
                required
              />
              <button 
                type="submit"
                disabled={newsletterStatus === 'loading' || !emailInput.trim()}
                className="bg-gradient-to-r from-[#1230AE] to-[#6C48C5] px-6 py-2 rounded-r-lg hover:shadow-lg transition-all duration-300 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {newsletterStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {newsletterStatus === 'success' && (
              <p className="text-green-400 text-sm mt-2">✓ Successfully subscribed!</p>
            )}
            {newsletterStatus === 'error' && (
              <p className="text-red-400 text-sm mt-2">Error subscribing. Please try again.</p>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} MedGAN. All rights reserved.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4 md:mt-0">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
