import { test, expect } from '@playwright/test';

test.describe('CTA Section', () => {
  test('should display CTA content correctly', async ({ page }) => {
    await page.goto('/');

    const ctaSection = page.locator('section#contato');
    await expect(ctaSection).toBeVisible();

    // Check heading
    await expect(
      ctaSection.locator('h2').filter({
        hasText:
          'Você não precisa continuar se anulando para dar conta de tudo.',
      })
    ).toBeVisible();

    // Check description
    await expect(
      ctaSection.locator('p').filter({
        hasText:
          'Agende sua sessão e comece a se ouvir com mais força e liberdade.',
      })
    ).toBeVisible();

    // Check button
    const ctaButton = ctaSection
      .locator('button')
      .filter({ hasText: 'Agende sua sessão' });
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute(
      'aria-describedby',
      'cta-description'
    );
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const ctaSection = page.locator('section#contato');
    const description = ctaSection.locator('#cta-description');
    await expect(description).toBeVisible();

    const ctaButton = ctaSection
      .locator('button')
      .filter({ hasText: 'Agende sua sessão' });
    await expect(ctaButton).toHaveAttribute(
      'aria-describedby',
      'cta-description'
    );
  });
});
