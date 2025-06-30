import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// SEO Keywords for MedGAN
export const SEO_KEYWORDS = [
  'Agentic AI solutions',
  'AI transformation MENA',
  'Autonomous AI agents',
  'AI for enterprise Jordan',
  'Custom AI development',
  'Intelligent automation services',
  'Digital transformation AI',
  'AI strategy consulting',
  'Healthcare AI MENA',
  'AI implementation services',
  'Machine learning Jordan',
  'AI consulting MENA',
  'Business automation AI',
  'Enterprise AI solutions'
]

// Company Information
export const COMPANY_INFO = {
  name: 'MedGAN',
  description: 'Leading AI & Agentic AI solutions provider in the MENA region',
  location: 'Amman, Jordan',
  email: 'hello@medgan.io',
  phone: '+962 (0) 123 456 789',
  website: 'https://medgan.io',
  founded: '2024',
  employees: '10-50',
  socialMedia: {
    linkedin: 'https://linkedin.com/company/medgan',
    twitter: 'https://twitter.com/medgan_ai',
    github: 'https://github.com/medgan',
    facebook: 'https://facebook.com/medgan'
  }
}

// Animation variants for Framer Motion
export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Scroll to top utility
export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// Format date utility
export const formatDate = (date: string | Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Truncate text utility
export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}
