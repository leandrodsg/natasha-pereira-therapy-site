import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

// Jest configuration
export const jest = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
