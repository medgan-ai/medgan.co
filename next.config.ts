import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'bcryptjs']
  },
  // Disable static optimization for API routes during build
  trailingSlash: false,
  // Skip building API routes during static generation
  staticPageGenerationTimeout: 1000,
};

export default nextConfig;
