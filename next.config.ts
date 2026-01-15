import type { NextConfig } from 'next';
import { getSecurityHeaders, getCSPHeader } from './lib/security';

const nextConfig: NextConfig = {
  images: {
    remotePatterns:
      process.env.NODE_ENV === 'development'
        ? [
            {
              protocol: 'https',
              hostname: 'via.placeholder.com',
            },
          ]
        : [],
  },
  // Security headers - only applied in production builds
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [...getSecurityHeaders(), getCSPHeader()],
      },
    ];
  },
};

export default nextConfig;

// Jest configuration
export const jest = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
