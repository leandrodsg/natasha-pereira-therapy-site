import {
  getSecurityHeaders,
  getCSPHeader,
  securityHeaders,
  cspHeader,
} from './security';

describe('Security Headers', () => {
  describe('getSecurityHeaders', () => {
    it('should return all security headers', () => {
      const headers = getSecurityHeaders();

      expect(headers).toEqual(securityHeaders);
      expect(headers).toHaveLength(7); // Update this count as headers are added
    });

    it('should include X-Frame-Options: DENY', () => {
      const headers = getSecurityHeaders();
      const frameOptions = headers.find((h) => h.key === 'X-Frame-Options');

      expect(frameOptions).toBeDefined();
      expect(frameOptions?.value).toBe('DENY');
    });

    it('should include X-Content-Type-Options: nosniff', () => {
      const headers = getSecurityHeaders();
      const contentTypeOptions = headers.find(
        (h) => h.key === 'X-Content-Type-Options'
      );

      expect(contentTypeOptions).toBeDefined();
      expect(contentTypeOptions?.value).toBe('nosniff');
    });

    it('should include X-XSS-Protection: 1; mode=block', () => {
      const headers = getSecurityHeaders();
      const xssProtection = headers.find((h) => h.key === 'X-XSS-Protection');

      expect(xssProtection).toBeDefined();
      expect(xssProtection?.value).toBe('1; mode=block');
    });

    it('should include Referrer-Policy: strict-origin-when-cross-origin', () => {
      const headers = getSecurityHeaders();
      const referrerPolicy = headers.find((h) => h.key === 'Referrer-Policy');

      expect(referrerPolicy).toBeDefined();
      expect(referrerPolicy?.value).toBe('strict-origin-when-cross-origin');
    });

    it('should include Permissions-Policy disabling unnecessary APIs', () => {
      const headers = getSecurityHeaders();
      const permissionsPolicy = headers.find(
        (h) => h.key === 'Permissions-Policy'
      );

      expect(permissionsPolicy).toBeDefined();
      expect(permissionsPolicy?.value).toBe(
        'camera=(), microphone=(), geolocation=()'
      );
    });

    it('should include Strict-Transport-Security for HTTPS', () => {
      const headers = getSecurityHeaders();
      const hsts = headers.find((h) => h.key === 'Strict-Transport-Security');

      expect(hsts).toBeDefined();
      expect(hsts?.value).toBe('max-age=63072000; includeSubDomains; preload');
    });

    it('should include X-DNS-Prefetch-Control: on', () => {
      const headers = getSecurityHeaders();
      const dnsPrefetch = headers.find(
        (h) => h.key === 'X-DNS-Prefetch-Control'
      );

      expect(dnsPrefetch).toBeDefined();
      expect(dnsPrefetch?.value).toBe('on');
    });
  });

  describe('getCSPHeader', () => {
    it('should return CSP header', () => {
      const header = getCSPHeader();

      expect(header).toEqual(cspHeader);
      expect(header.key).toBe('Content-Security-Policy');
      expect(header.value).toContain("default-src 'self'");
      expect(header.value).toContain("frame-ancestors 'none'");
    });

    it('should have restrictive CSP policy', () => {
      const header = getCSPHeader();

      expect(header.value).toContain("default-src 'self'");
      expect(header.value).toContain("frame-ancestors 'none'");
      expect(header.value).toContain("base-uri 'self'");
      expect(header.value).toContain("form-action 'self'");
    });
  });
});
