# Vercel Deployment Configuration
# Keep this file for future Vercel deployments

## Environment Variables for Vercel:
DATABASE_URL="postgresql://postgres:MohammedHamzaMahmoud@db.mbmbauqjdgbisaxkfpbp.supabase.co:5432/postgres"
NEXTAUTH_URL="https://your-vercel-domain.vercel.app"
NEXTAUTH_SECRET="your-production-secret-key"

## Vercel Build Settings:
- Build Command: npm run build
- Output Directory: .next
- Install Command: npm install
- Node.js Version: 18.x

## Notes:
- For serverless deployment, may need connection pooling URL (port 6543)
- Next.js 15 works better without vercel.json file
- Use Vercel dashboard to set environment variables
