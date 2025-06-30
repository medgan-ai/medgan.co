import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About MedGAN - Leading AI Team in MENA Region',
  description: 'Meet the world-class AI researchers, engineers, and strategists transforming businesses across the MENA region with cutting-edge agentic AI solutions.',
  keywords: 'AI team MENA, AI researchers Jordan, artificial intelligence experts, agentic AI specialists, machine learning team, AI company Jordan, AI engineers MENA',
  openGraph: {
    title: 'About MedGAN - Leading AI Team in MENA Region',
    description: 'World-class AI experts pioneering autonomous intelligence and transformative technology across the MENA region.',
    type: 'website',
    url: 'https://medgan.io/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About MedGAN - Leading AI Team in MENA Region',
    description: 'World-class AI experts pioneering autonomous intelligence and transformative technology across the MENA region.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
