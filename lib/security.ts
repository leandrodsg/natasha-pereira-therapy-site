/**
 * Security headers configuration for Next.js
 * These headers are applied to all routes in production builds
 */

export interface SecurityHeader {
  key: string;
  value: string;
}

export const securityHeaders: SecurityHeader[] = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  // CSP will be added separately as it may need tuning
];

/**
 * Get all security headers for Next.js configuration
 */
export function getSecurityHeaders(): SecurityHeader[] {
  return securityHeaders;
}

/**
 * Content Security Policy header
 * This may need to be tuned based on the application's needs
 */
export const cspHeader: SecurityHeader = {
  key: 'Content-Security-Policy',
  value: [
    "default-src 'self'",
    "script-src 'self' 'unsafe-inline' 'unsafe-eval'", // Next.js needs these for hydration
    "style-src 'self' 'unsafe-inline'", // Tailwind and styled components
    "img-src 'self' data: https:", // Allow images from HTTPS and data URIs
    "font-src 'self' data:", // Allow fonts
    "connect-src 'self'", // Allow connections to self
    "frame-ancestors 'none'", // Prevent embedding
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; '),
};

/**
 * Get CSP header
 */
export function getCSPHeader(): SecurityHeader {
  return cspHeader;
}
