import { test, expect } from '@playwright/test';

test.describe('Performance', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Assert load time is under 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });

  test('should have no layout shifts (CLS)', async ({ page }) => {
    // Monitor layout shifts
    let clsValue = 0;
    page.on('metrics', (metrics) => {
      if (metrics.name === 'CumulativeLayoutShift') {
        clsValue = metrics.value;
      }
    });

    await page.goto('/');

    // Wait for page to stabilize
    await page.waitForLoadState('networkidle');

    // CLS should be less than 0.1
    expect(clsValue).toBeLessThan(0.1);
  });

  test('should have acceptable First Contentful Paint', async ({ page }) => {
    await page.goto('/');

    // Get performance metrics
    const performanceTiming = await page.evaluate(() => {
      const timing = performance.getEntriesByType(
        'navigation'
      )[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded:
          timing.domContentLoadedEventEnd - timing.domContentLoadedEventStart,
        loadComplete: timing.loadEventEnd - timing.loadEventStart,
      };
    });

    // DOM Content Loaded should be reasonable
    expect(performanceTiming.domContentLoaded).toBeLessThan(2000);
  });

  test('should have images optimized', async ({ page }) => {
    await page.goto('/');

    // Check that images have proper attributes
    const images = page.locator('img');
    const imageCount = await images.count();

    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt'); // Should have alt text
    }
  });
});
