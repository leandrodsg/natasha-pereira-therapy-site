import { test, expect } from '@playwright/test';

test.describe('Services Section', () => {
  test('should display all three service cards', async ({ page }) => {
    await page.goto('/');

    const servicesSection = page.locator('section#servicos');
    await expect(servicesSection).toBeVisible();

    // Check title
    await expect(
      servicesSection.locator('h2').filter({ hasText: 'Como posso te ajudar?' })
    ).toBeVisible();

    // Check all three service cards
    const serviceCards = servicesSection.locator('.service-card');
    await expect(serviceCards).toHaveCount(3);

    // Check service titles
    await expect(
      servicesSection.locator('text=Atendimento Individual')
    ).toBeVisible();
    await expect(
      servicesSection.locator('text=Roda de conversa')
    ).toBeVisible();
    await expect(
      servicesSection.locator('text=Terapia de grupo para mulheres')
    ).toBeVisible();
  });

  test('should display service card content correctly', async ({ page }) => {
    await page.goto('/');

    const servicesSection = page.locator('section#servicos');
    const firstCard = servicesSection.locator('.service-card').first();

    // Check title
    await expect(
      firstCard.locator('h3').filter({ hasText: 'Atendimento Individual' })
    ).toBeVisible();

    // Check description
    await expect(
      firstCard.locator('text=Um espaço seguro para falar de si')
    ).toBeVisible();

    // Check link (case insensitive)
    const link = firstCard.locator('a').filter({ hasText: /saiba mais/i });
    await expect(link).toBeVisible();
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const servicesSection = page.locator('section#servicos');
    await expect(servicesSection).toHaveAttribute(
      'aria-labelledby',
      'services-title'
    );

    const title = servicesSection.locator('#services-title');
    await expect(title).toBeVisible();
  });
});
