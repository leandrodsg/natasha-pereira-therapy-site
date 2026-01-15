import { test, expect } from '@playwright/test';

test.describe('Hero Section', () => {
  test('should display hero content correctly', async ({ page }) => {
    await page.goto('/');

    // Check hero section is visible
    const heroSection = page.locator('section#inicio');
    await expect(heroSection).toBeVisible();

    // Check headline
    await expect(
      heroSection.locator('h1').filter({
        hasText: 'Um espaço onde você finalmente pode existir sem medo.',
      })
    ).toBeVisible();

    // Check subheadline
    await expect(
      heroSection.locator('p').filter({
        hasText:
          'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir',
      })
    ).toBeVisible();

    // Check CTA button
    const ctaButton = heroSection
      .locator('button')
      .filter({ hasText: 'Vamos conversar?' });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute(
      'aria-describedby',
      'hero-description'
    );
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const heroSection = page.locator('section#inicio');
    const description = heroSection.locator('#hero-description');
    await expect(description).toBeVisible();

    const ctaButton = heroSection
      .locator('button')
      .filter({ hasText: 'Vamos conversar?' });
    await expect(ctaButton).toHaveAttribute(
      'aria-describedby',
      'hero-description'
    );
  });
});
