import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { COMPANY_INFO, SEO_KEYWORDS } from '@/lib/utils';
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "MedGAN - AI & Agentic AI Solutions | MENA Region",
    template: "%s | MedGAN"
  },
  description: "Leading AI & Agentic AI solutions provider in the MENA region. We transform businesses through intelligent automation, custom AI development, and enterprise AI strategy consulting.",
  keywords: SEO_KEYWORDS.join(', '),
  authors: [{ name: "MedGAN Team" }],
  creator: "MedGAN",
  publisher: "MedGAN",
  metadataBase: new URL('https://medgan.io'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medgan.io',
    title: 'MedGAN - AI & Agentic AI Solutions | MENA Region',
    description: 'Transform your business with cutting-edge AI solutions. Custom AI development, intelligent automation, and enterprise AI strategy consulting in Jordan and MENA region.',
    siteName: 'MedGAN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MedGAN - AI Solutions Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MedGAN - AI & Agentic AI Solutions',
    description: 'Transform your business with cutting-edge AI solutions in the MENA region.',
    images: ['/og-image.jpg'],
    creator: '@medgan_ai',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": COMPANY_INFO.name,
              "description": COMPANY_INFO.description,
              "url": COMPANY_INFO.website,
              "logo": `${COMPANY_INFO.website}/logo.svg`,
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": COMPANY_INFO.phone,
                "contactType": "customer service",
                "email": COMPANY_INFO.email
              },
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Amman",
                "addressCountry": "Jordan"
              },
              "sameAs": [
                COMPANY_INFO.socialMedia.linkedin,
                COMPANY_INFO.socialMedia.twitter,
                COMPANY_INFO.socialMedia.github
              ]
            })
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
        
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
