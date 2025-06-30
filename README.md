# MedGAN.co - AI & Agentic AI Solutions

🚀 **Professional website for MedGAN - Leading AI solutions provider in the MENA region**

## 🎯 About MedGAN

MedGAN is a cutting-edge AI startup based in Jordan, specializing in Agentic AI systems and custom AI solutions for enterprises across the MENA region. We transform businesses through autonomous intelligent agents and advanced AI implementations.

## 💻 Technology Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: TailwindCSS v4 with custom theme
- **Language**: TypeScript
- **Animations**: Framer Motion
- **3D Graphics**: Three.js + React Three Fiber
- **Icons**: Lucide React
- **Build Tool**: Turbopack

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/medgan.co.git
cd medgan.co

# Install dependencies
npm install

# Copy environment variables
cp env.example .env.local
# Edit .env.local with your actual values

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (pages)/           # Route groups
│   ├── api/               # API routes
│   ├── globals.css        # Global styles & Tailwind
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   └── layout/           # Layout components
└── lib/                  # Utilities and configuration
```

## 🎨 Features

- ✅ **Responsive Design** - Mobile-first approach
- ✅ **SEO Optimized** - Meta tags, structured data
- ✅ **Performance** - Optimized loading and Core Web Vitals
- ✅ **Accessibility** - ARIA labels, keyboard navigation
- ✅ **Modern UI/UX** - Smooth animations, hover effects
- ✅ **Contact Forms** - Working submission handling
- ✅ **Career Portal** - Dynamic job applications
- ✅ **Service Pages** - Comprehensive AI service showcase

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: All green scores
- **Mobile PageSpeed**: Optimized for mobile performance
- **SEO Ready**: Structured data and meta optimization

## 🛠️ Customization

### Brand Colors (TailwindCSS v4)
```css
/* src/app/globals.css */
@theme {
  --color-primary: #1230AE;      /* MedGAN Blue */
  --color-secondary: #6C48C5;    /* Purple */
  --color-accent: #C68FE6;       /* Light Purple */
  --color-background-light: #FFF7F7; /* Soft Background */
}
```

### Adding New Pages
1. Create page in `src/app/your-page/page.tsx`
2. Add navigation link in `src/components/layout/Header.tsx`
3. Update sitemap and meta tags as needed

## 📧 Contact & Support

- **Website**: [medgan.io](https://medgan.io)
- **Email**: hello@medgan.io
- **Location**: Amman, Jordan

## 📄 License

© 2024 MedGAN. All rights reserved.

---

**Built with ❤️ for the future of AI in the MENA region**
