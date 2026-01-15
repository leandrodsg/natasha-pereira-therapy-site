import { test, expect } from '@playwright/test';

test('skip link is visible on focus and navigates to main content', async ({
  page,
}) => {
  await page.goto('/');

  // Skip link should have sr-only class initially
  const skipLink = page.locator('a[href="#main-content"]');
  await expect(skipLink).toHaveClass(/sr-only/);

  // Focus on skip link (simulate Tab)
  await page.keyboard.press('Tab');
  await expect(skipLink).toBeVisible();

  // Press Enter to activate the skip link (anchor navigation)
  await page.keyboard.press('Enter');

  // Should scroll to main content
  const main = page.locator('#main-content');
  await expect(main).toBeInViewport();
});
