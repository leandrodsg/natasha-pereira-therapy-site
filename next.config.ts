import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
};

export default nextConfig;

// Jest configuration
export const jest = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
