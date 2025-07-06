import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  // Disable static optimization for API routes during build
  trailingSlash: false,
  // Skip building API routes during static generation
  staticPageGenerationTimeout: 1000,
  // Enable type checking for production builds
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
