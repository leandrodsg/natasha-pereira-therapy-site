import { test, expect } from '@playwright/test';

test.describe('Responsive Design', () => {
  const viewports = [
    { name: 'iPhone SE', width: 375, height: 667 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'iPad', width: 768, height: 1024 },
    { name: 'Desktop HD', width: 1920, height: 1080 },
    { name: 'Desktop 4K', width: 3840, height: 2160 },
  ];

  for (const viewport of viewports) {
    test(`should render correctly on ${viewport.name} (${viewport.width}x${viewport.height})`, async ({
      page,
    }) => {
      await page.setViewportSize({
        width: viewport.width,
        height: viewport.height,
      });
      await page.goto('/');

      // Check that main sections are visible
      await expect(page.locator('section#inicio')).toBeVisible();
      await expect(page.locator('section#quem-sou')).toBeVisible();
      await expect(page.locator('section#servicos')).toBeVisible();
      await expect(page.locator('footer#rodape')).toBeVisible();

      // Check hero content
      await expect(
        page.locator('h1').filter({ hasText: 'Um espaço onde você finalmente' })
      ).toBeVisible();

      // Check services grid (should adapt to viewport)
      const serviceCards = page.locator('.service-card');
      await expect(serviceCards).toHaveCount(4);

      // Check footer layout
      const footer = page.locator('footer#rodape');
      await expect(
        footer.locator('a').filter({ hasText: 'Natasha Pereira' })
      ).toBeVisible();
    });
  }
});
