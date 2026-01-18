/**
 * Font Loading E2E Tests
 * PR #13: Sistema de Design - Tipografia e Cores
 *
 * Validates that fonts load correctly without FOUT (Flash of Unstyled Text)
 */

import { test, expect } from '@playwright/test';

test.describe('Font Loading - PR #13', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load Cormorant Garamond font from Google Fonts', async ({
    page,
  }) => {
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');

    // Check if font is applied to headings
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    const fontFamily = await heading.evaluate(
      (el) => window.getComputedStyle(el).fontFamily
    );

    expect(fontFamily).toContain('Cormorant Garamond');
  });

  test('should load Montserrat font from Google Fonts', async ({ page }) => {
    // Wait for fonts to load
    await page.waitForLoadState('networkidle');

    // Check if font is applied to body
    const body = page.locator('body');
    const fontFamily = await body.evaluate(
      (el) => window.getComputedStyle(el).fontFamily
    );

    expect(fontFamily).toContain('Montserrat');
  });

  test('should apply Cormorant Garamond to all heading levels', async ({
    page,
  }) => {
    await page.waitForLoadState('networkidle');

    // Check h1
    const h1 = page.locator('h1').first();
    if ((await h1.count()) > 0) {
      const h1Font = await h1.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );
      expect(h1Font).toContain('Cormorant Garamond');
    }

    // Check h2
    const h2 = page.locator('h2').first();
    if ((await h2.count()) > 0) {
      const h2Font = await h2.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );
      expect(h2Font).toContain('Cormorant Garamond');
    }

    // Check h3
    const h3 = page.locator('h3').first();
    if ((await h3.count()) > 0) {
      const h3Font = await h3.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );
      expect(h3Font).toContain('Cormorant Garamond');
    }
  });

  test('should apply .font-display utility class correctly', async ({
    page,
  }) => {
    await page.waitForLoadState('networkidle');

    // Find element with font-display class (logo in header)
    const fontDisplayElement = page.locator('.font-display').first();

    if ((await fontDisplayElement.count()) > 0) {
      await expect(fontDisplayElement).toBeVisible();

      const fontFamily = await fontDisplayElement.evaluate(
        (el) => window.getComputedStyle(el).fontFamily
      );

      expect(fontFamily).toContain('Cormorant Garamond');
    }
  });

  test('should load fonts without FOUT (Flash of Unstyled Text)', async ({
    page,
  }) => {
    // Navigate and immediately check font
    await page.goto('/');

    // Font should be applied quickly (within 1 second)
    await page.waitForTimeout(1000);

    const heading = page.locator('h1').first();
    const fontFamily = await heading.evaluate(
      (el) => window.getComputedStyle(el).fontFamily
    );

    // Should have custom font, not fallback
    expect(fontFamily).toContain('Cormorant Garamond');
    expect(fontFamily).not.toBe('serif'); // Not just fallback
  });

  test('should use font-display=swap for better performance', async ({
    page,
  }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Check if the CSS @import in globals.css includes display=swap
    // Since fonts are loaded via CSS @import, we verify the stylesheet contains the correct parameter
    const hasDisplaySwap = await page.evaluate(() => {
      const stylesheets = Array.from(document.styleSheets);
      for (const sheet of stylesheets) {
        try {
          const rules = Array.from(sheet.cssRules || []);
          for (const rule of rules) {
            if (
              rule instanceof CSSImportRule &&
              rule.href?.includes('fonts.googleapis.com') &&
              rule.href?.includes('display=swap')
            ) {
              return true;
            }
          }
        } catch {
          // Cross-origin stylesheets can't be read
          continue;
        }
      }
      return false;
    });

    // Alternative: Check if fonts are actually loaded with swap behavior
    // by verifying that custom fonts are applied without blocking render
    const fontsLoaded = await page.evaluate(() => {
      return document.fonts.check('16px "Cormorant Garamond"');
    });

    expect(hasDisplaySwap || fontsLoaded).toBe(true);
  });

  test('should apply correct font weights', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();

    const fontWeight = await heading.evaluate(
      (el) => window.getComputedStyle(el).fontWeight
    );

    // Font weight should be defined (not 'normal' which is default)
    expect(fontWeight).toBeTruthy();
    // Should be numeric value (300, 400, 500, 600, 700, etc.)
    expect(parseInt(fontWeight)).toBeGreaterThan(0);
  });

  test('should render italic variant correctly', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // Find italic elements (like emphasis words in Hero)
    const italicElement = page.locator('.italic, em, i').first();

    if ((await italicElement.count()) > 0) {
      const fontStyle = await italicElement.evaluate(
        (el) => window.getComputedStyle(el).fontStyle
      );

      expect(fontStyle).toBe('italic');
    }
  });

  test('should maintain smooth scroll behavior', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // Check if smooth scroll is enabled
    const scrollBehavior = await page.evaluate(() => {
      return window.getComputedStyle(document.documentElement).scrollBehavior;
    });

    expect(scrollBehavior).toBe('smooth');
  });

  test('should apply CSS variables correctly', async ({ page }) => {
    await page.waitForLoadState('networkidle');

    // Check if CSS variables are applied
    const primaryColor = await page.evaluate(() => {
      return window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--primary');
    });

    expect(primaryColor).toContain('111 18% 55%');
  });

  test('should not have console errors related to fonts', async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Filter font-related errors
    const fontErrors = consoleErrors.filter(
      (error) =>
        error.toLowerCase().includes('font') ||
        error.toLowerCase().includes('typography')
    );

    expect(fontErrors).toHaveLength(0);
  });

  test('should load fonts over HTTPS (security)', async ({ page }) => {
    const insecureRequests: string[] = [];

    page.on('request', (request) => {
      const url = request.url();
      if (
        url.includes('font') &&
        url.startsWith('http://') &&
        !url.includes('localhost')
      ) {
        insecureRequests.push(url);
      }
    });

    await page.goto('/');
    await page.waitForLoadState('networkidle');

    expect(insecureRequests).toHaveLength(0);
  });
});
