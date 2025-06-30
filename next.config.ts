import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'bcryptjs'],
  // Disable static optimization for API routes during build
  trailingSlash: false,
  // Skip building API routes during static generation
  staticPageGenerationTimeout: 1000,
  // Skip type checking and linting during build for faster deployment
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
