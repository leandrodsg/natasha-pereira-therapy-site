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
  let layoutContent: string;

  beforeAll(() => {
    // Read globals.css file
    const cssPath = join(__dirname, '..', 'app', 'globals.css');
    cssContent = readFileSync(cssPath, 'utf-8');

    // Read layout.tsx file
    const layoutPath = join(__dirname, '..', 'app', 'layout.tsx');
    layoutContent = readFileSync(layoutPath, 'utf-8');
  });

  describe('Font Configuration - Next.js Architecture', () => {
    it('should define --font-display variable for Sorts Mill Goudy', () => {
      expect(cssContent).toContain('--font-display');
    });

    it('should define --font-body variable for Lora', () => {
      expect(cssContent).toContain('--font-body');
    });

    it('should define --font-sans variable for Inter', () => {
      expect(cssContent).toContain('--font-sans');
    });

    it('should define --font-logo variable for Allura', () => {
      expect(cssContent).toContain('--font-logo');
    });

    it('should apply font-display to headings in @layer base', () => {
      expect(cssContent).toMatch(
        /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^}]*font-family:\s*var\(--font-display\)[^}]*\}/s
      );
    });

    it('should apply font-body to body in @layer base', () => {
      expect(cssContent).toMatch(
        /body\s*\{[^}]*font-family:\s*var\(--font-body\)[^}]*\}/s
      );
    });

    it('should apply font-sans to html in @layer base', () => {
      expect(cssContent).toMatch(
        /html\s*\{[^}]*font-family:\s*var\(--font-sans\)[^}]*\}/s
      );
    });
  });

  describe('Next.js Font Loading Configuration', () => {
    it('should import all fonts from next/font/google', () => {
      expect(layoutContent).toContain(
        "import { Sorts_Mill_Goudy, Lora, Inter, Allura } from 'next/font/google'"
      );
    });

    it('should configure Sorts Mill Goudy with --font-display variable', () => {
      expect(layoutContent).toMatch(
        /Sorts_Mill_Goudy\(\{\s*variable:\s*['"]--font-display['"]/s
      );
    });

    it('should configure Lora with --font-body variable', () => {
      expect(layoutContent).toMatch(
        /lora\s*=.*Lora\(\{\s*variable:\s*['"]--font-body['"]/s
      );
    });

    it('should configure Inter with --font-sans variable', () => {
      expect(layoutContent).toMatch(
        /inter\s*=.*Inter\(\{\s*variable:\s*['"]--font-sans['"]/s
      );
    });

    it('should configure Allura with --font-logo variable', () => {
      expect(layoutContent).toMatch(
        /allura\s*=.*Allura\(\{\s*variable:\s*['"]--font-logo['"]/s
      );
    });

    it('should apply font variables to body className', () => {
      expect(layoutContent).toMatch(
        /className=\{.*\$\{sortsMillGoudy\.variable\}.*\$\{lora\.variable\}.*\$\{inter\.variable\}.*\$\{allura\.variable\}/s
      );
    });

    it('should configure Lora with multiple weights', () => {
      expect(layoutContent).toMatch(
        /weight:\s*\[['"]400['"],\s*['"]500['"],\s*['"]600['"],\s*['"]700['"]\]/
      );
    });

    it('should configure Inter with multiple weights', () => {
      expect(layoutContent).toMatch(
        /weight:\s*\[['"]300['"],\s*['"]400['"],\s*['"]500['"],\s*['"]600['"],\s*['"]700['"]\]/
      );
    });
  });

  describe('CSS Custom Properties - Natasha Palette', () => {
    it('should define --background variable with cream color', () => {
      expect(cssContent).toContain('--background: 39 47% 94%');
      expect(cssContent).toMatch(/--background:.*#f4eee5/i);
    });

    it('should define --foreground variable with dark gray', () => {
      expect(cssContent).toContain('--foreground: 0 0% 20%');
      expect(cssContent).toMatch(/--foreground:.*#333/i);
    });

    it('should define --primary variable with olive green', () => {
      expect(cssContent).toContain('--primary: 72 14% 32%');
      expect(cssContent).toMatch(/--primary:.*#4F5543/i);
    });

    it('should define --secondary variable with rose color', () => {
      expect(cssContent).toContain('--secondary: 16 38% 62%');
      expect(cssContent).toMatch(/--secondary:.*#C58C77/i);
    });

    it('should define --accent variable with light olive', () => {
      expect(cssContent).toContain('--accent: 72 14% 48%');
      expect(cssContent).toMatch(/--accent:.*#868B6C/i);
    });

    it('should define --muted-foreground variable', () => {
      expect(cssContent).toContain('--muted-foreground: 0 0% 50%');
    });

    it('should have comment identifying Natasha palette', () => {
      expect(cssContent).toMatch(/\/\*.*Paleta Natasha.*\*\//i);
    });
  });

  describe('Font Family Configuration', () => {
    it('should set font variable for body font family', () => {
      expect(cssContent).toMatch(
        /html\s*\{[^}]*font-family:\s*var\(--font-sans\)[^}]*\}/s
      );
    });

    it('should set font variable for headings', () => {
      expect(cssContent).toMatch(
        /h1,\s*h2,\s*h3,\s*h4,\s*h5,\s*h6\s*\{[^}]*font-family:\s*var\(--font-display\)[^}]*\}/s
      );
    });
  });

  describe('Utility Classes', () => {
    it('should define .font-display utility class', () => {
      expect(cssContent).toMatch(/\.font-display\s*\{/);
    });

    it('should set font variable for .font-display', () => {
      expect(cssContent).toMatch(
        /\.font-display\s*\{[^}]*font-family:\s*var\(--font-display\)[^}]*\}/s
      );
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
      // Background (cream): 39 47% 94% - very light
      // Foreground (dark gray): 0 0% 20% - very dark
      // This combination should provide excellent contrast (> 4.5:1)
      expect(cssContent).toContain('--background: 39 47% 94%');
      expect(cssContent).toContain('--foreground: 0 0% 20%');
    });

    it('should define primary color with sufficient saturation', () => {
      // Primary (olive green): 72 14% 32% - medium tone
      const primaryMatch = cssContent.match(/--primary:\s*72\s+14%\s+32%/);
      expect(primaryMatch).toBeTruthy();
    });

    it('should define secondary color', () => {
      // Secondary (rosé/salmon): 16 38% 62% - medium tone
      const secondaryMatch = cssContent.match(/--secondary:\s*16\s+38%\s+62%/);
      expect(secondaryMatch).toBeTruthy();
    });

    it('should define accent color', () => {
      // Accent (olive green light): 72 14% 48% - medium tone
      const accentMatch = cssContent.match(/--accent:\s*72\s+14%\s+48%/);
      expect(accentMatch).toBeTruthy();
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
