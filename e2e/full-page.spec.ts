import { test, expect } from '@playwright/test';

test.describe('Landing Page E2E', () => {
  test('should load the complete landing page successfully', async ({
    page,
  }) => {
    // Navigate to the page
    await page.goto('/');

    // Check if the page loaded
    await expect(page).toHaveTitle(/Natasha Pereira/);

    // Hero section
    await expect(
      page.locator('h1').filter({
        hasText: 'Um espaço onde você finalmente pode existir sem medo.',
      })
    ).toBeVisible();
    await expect(
      page.locator('.hero-subheadline').filter({
        hasText:
          'Para mulheres que carregam histórias, decisões, pressões, dúvidas e',
      })
    ).toBeVisible();
    await expect(
      page.locator('a').filter({ hasText: 'Vamos conversar?' })
    ).toBeVisible();

    // Problem Statement section
    await expect(
      page.locator('.problem-statement h2').filter({
        hasText:
          'Para mulheres que carregam histórias, decisões, pressões, dúvidas e desejam se ouvir',
      })
    ).toBeVisible();

    // Sound Familiar section
    await expect(
      page.locator('h2').filter({ hasText: 'Isso soa familiar?' })
    ).toBeVisible();
    await expect(page.locator('text=Sobrecarga emocional')).toBeVisible();

    // About Therapist section
    await expect(
      page.locator('h2').filter({ hasText: 'Olá, sou Natasha Pereira.' })
    ).toBeVisible();
    await expect(
      page
        .locator('h3')
        .filter({ hasText: 'Sou uma psicóloga que não tem dúvidas:' })
    ).toBeVisible();

    // Services section
    await expect(
      page.locator('h2').filter({ hasText: 'Como posso te ajudar?' })
    ).toBeVisible();
    await expect(page.locator('text=Atendimento Individual')).toBeVisible();

    // CTA Section
    await expect(
      page.locator('h2').filter({
        hasText:
          'Você não precisa continuar se anulando para dar conta de tudo.',
      })
    ).toBeVisible();
    await expect(
      page.locator(
        'text=Agende sua sessão e comece a se ouvir com mais força e liberdade.'
      )
    ).toBeVisible();
    await expect(
      page.locator('a').filter({ hasText: 'Agende sua sessão' })
    ).toBeVisible();

    // Footer
    await expect(
      page.locator('h3').filter({ hasText: 'Contato' })
    ).toBeVisible();
    await expect(
      page.locator('text=© 2025 Natasha Pereira | CRP 01/22302')
    ).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    await page.goto('/');

    // Check for semantic HTML
    const headings = await page.locator('h1, h2, h3').count();
    expect(headings).toBeGreaterThan(0);

    // Check for alt texts on images (if any)
    const images = page.locator('img');
    const imageCount = await images.count();
    for (let i = 0; i < imageCount; i++) {
      const alt = await images.nth(i).getAttribute('alt');
      expect(alt).not.toBeNull();
      expect(alt).not.toBe('');
    }

    // Check for buttons with accessible names
    const buttons = page.locator('button');
    const buttonCount = await buttons.count();
    for (let i = 0; i < buttonCount; i++) {
      const accessibleName =
        (await buttons.nth(i).getAttribute('aria-label')) ||
        (await buttons.nth(i).textContent());
      expect(accessibleName?.trim()).not.toBe('');
    }
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    // Check if content is visible and properly sized
    await expect(page.locator('h1')).toBeVisible();
    await expect(
      page.locator('a').filter({ hasText: 'Vamos conversar?' })
    ).toBeVisible();

    // Check CTA section on mobile
    await expect(
      page
        .locator('h2')
        .filter({ hasText: 'Você não precisa continuar se anulando' })
    ).toBeVisible();
    await expect(
      page.locator('a').filter({ hasText: 'Agende sua sessão' })
    ).toBeVisible();
  });

  test('should have working navigation and smooth scrolling', async ({
    page,
  }) => {
    await page.goto('/');

    // Check if footer links exist (navigation)
    await expect(page.locator('text=Início')).toBeVisible();
    await expect(page.locator('text=Quem sou')).toBeVisible();
    await expect(page.locator('text=Serviços')).toBeVisible();
  });

  test('should load fast', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    const loadTime = Date.now() - startTime;

    // Should load in less than 3 seconds
    expect(loadTime).toBeLessThan(3000);
  });
});
