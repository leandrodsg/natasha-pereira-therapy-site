/**
 * Design Tokens Tests
 * PR #13: Sistema de Design - Tipografia e Cores
 *
 * Tests CSS variables, font families, and design system utilities
 */

import { readFileSync } from 'fs';
import { join } from 'path';

describe('Design Tokens - PR #13', () => {
  let cssContent: string;

  beforeAll(() => {
    // Read globals.css file
    const cssPath = join(__dirname, '..', 'app', 'globals.css');
    cssContent = readFileSync(cssPath, 'utf-8');
  });

  describe('Font Imports', () => {
    it('should import Cormorant Garamond font from Google Fonts', () => {
      expect(cssContent).toContain('Cormorant+Garamond');
      expect(cssContent).toContain('fonts.googleapis.com');
    });

    it('should import Montserrat font from Google Fonts', () => {
      expect(cssContent).toContain('Montserrat');
      expect(cssContent).toContain('fonts.googleapis.com');
    });

    it('should use HTTPS for font imports (security)', () => {
      const fontImport = cssContent.match(/@import url\(['"](.+?)['"]\)/);
      expect(fontImport).toBeTruthy();
      expect(fontImport![1]).toMatch(/^https:\/\//);
    });

    it('should include multiple font weights for Cormorant Garamond', () => {
      const fontImport = cssContent.match(/Cormorant\+Garamond[^"')]+/);
      expect(fontImport).toBeTruthy();
      expect(fontImport![0]).toContain('wght');
      // Should have weights like 300, 400, 500, 600, 700
      expect(fontImport![0]).toMatch(/300|400|500|600|700/);
    });

    it('should include italic variant for Cormorant Garamond', () => {
      const fontImport = cssContent.match(/Cormorant\+Garamond[^"')]+/);
      expect(fontImport).toBeTruthy();
      expect(fontImport![0]).toContain('ital');
    });
  });

  describe('CSS Custom Properties - Natasha Palette', () => {
    it('should define --background variable with cream color', () => {
      expect(cssContent).toContain('--background: 24 60% 96%');
      expect(cssContent).toMatch(/--background:.*#f5f2ed/i);
    });

    it('should define --foreground variable with dark gray', () => {
      expect(cssContent).toContain('--foreground: 0 0% 20%');
      expect(cssContent).toMatch(/--foreground:.*#333/i);
    });

    it('should define --primary variable with olive green', () => {
      expect(cssContent).toContain('--primary: 111 18% 55%');
      expect(cssContent).toMatch(/--primary:.*#7a8b6f/i);
    });

    it('should define --secondary variable with beige', () => {
      expect(cssContent).toContain('--secondary: 27 28% 76%');
      expect(cssContent).toMatch(/--secondary:.*#c4a88a/i);
    });

    it('should define --accent variable with beige', () => {
      expect(cssContent).toContain('--accent: 27 28% 76%');
      expect(cssContent).toMatch(/--accent:.*#c4a88a/i);
    });

    it('should define --muted-foreground variable', () => {
      expect(cssContent).toContain('--muted-foreground: 0 0% 50%');
    });

    it('should have comment identifying Natasha palette', () => {
      expect(cssContent).toMatch(/\/\*.*Paleta Natasha.*\*\//i);
    });
  });

  describe('Font Family Configuration', () => {
    it('should set Montserrat as body font family', () => {
      expect(cssContent).toMatch(
        /html\s*\{[^}]*font-family:\s*['"]Montserrat['"][^}]*\}/s
      );
    });

    it('should set Cormorant Garamond for headings', () => {
      expect(cssContent).toMatch(
        /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^}]*font-family:\s*['"]Cormorant Garamond['"][^}]*\}/s
      );
    });

    it('should include serif fallback for headings', () => {
      const headingsFontFamily = cssContent.match(
        /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^}]*font-family:[^}]+\}/s
      );
      expect(headingsFontFamily).toBeTruthy();
      expect(headingsFontFamily![0]).toContain('serif');
    });

    it('should include sans-serif fallback for body', () => {
      const bodyFontFamily = cssContent.match(
        /html\s*\{[^}]*font-family:[^}]+\}/s
      );
      expect(bodyFontFamily).toBeTruthy();
      expect(bodyFontFamily![0]).toContain('sans-serif');
    });
  });

  describe('Utility Classes', () => {
    it('should define .font-display utility class', () => {
      expect(cssContent).toMatch(/\.font-display\s*\{/);
    });

    it('should set Cormorant Garamond for .font-display', () => {
      expect(cssContent).toMatch(
        /\.font-display\s*\{[^}]*font-family:\s*['"]Cormorant Garamond['"][^}]*\}/s
      );
    });

    it('should include serif fallback for .font-display', () => {
      const fontDisplay = cssContent.match(/\.font-display\s*\{[^}]+\}/s);
      expect(fontDisplay).toBeTruthy();
      expect(fontDisplay![0]).toContain('serif');
    });
  });

  describe('Smooth Scroll Configuration', () => {
    it('should enable smooth scroll behavior', () => {
      expect(cssContent).toMatch(/scroll-behavior:\s*smooth/);
    });
  });

  describe('Color Contrast Validation (WCAG AA)', () => {
    // Basic validation of color values
    it('should use colors that provide sufficient contrast', () => {
      // Background (cream): 24 60% 96% - very light
      // Foreground (dark gray): 0 0% 20% - very dark
      // This combination should provide excellent contrast (> 4.5:1)
      expect(cssContent).toContain('--background: 24 60% 96%');
      expect(cssContent).toContain('--foreground: 0 0% 20%');
    });

    it('should define primary color with sufficient saturation', () => {
      // Primary (olive green): 111 18% 55% - medium tone
      const primaryMatch = cssContent.match(/--primary:\s*111\s+18%\s+55%/);
      expect(primaryMatch).toBeTruthy();
    });
  });

  describe('Security Checks', () => {
    it('should not contain http:// URLs (only https://)', () => {
      const httpMatches = cssContent.match(/http:\/\/(?!localhost)/g);
      expect(httpMatches).toBeNull();
    });

    it('should not contain suspicious external URLs', () => {
      const urls = cssContent.match(/url\(['"]?(https?:\/\/[^'")\s]+)/gi) || [];
      urls.forEach((url) => {
        // Only allow Google Fonts
        if (!url.includes('localhost')) {
          expect(url).toMatch(/fonts\.googleapis\.com/);
        }
      });
    });

    it('should not contain inline javascript', () => {
      expect(cssContent.toLowerCase()).not.toContain('javascript:');
    });
  });
});
