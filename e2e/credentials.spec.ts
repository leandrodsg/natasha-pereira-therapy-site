import { test, expect } from '@playwright/test';

test.describe('Credentials Section', () => {
  test('should display all credential cards', async ({ page }) => {
    await page.goto('/');

    const credentialsSection = page.locator(
      'section[aria-label="Credenciais e experiência"]'
    );
    await expect(credentialsSection).toBeVisible();

    // Check all 4 credential titles
    await expect(
      credentialsSection.locator('text=7 anos de prática clínica')
    ).toBeVisible();
    await expect(
      credentialsSection.locator('text=Especialista em EMDR')
    ).toBeVisible();
    await expect(
      credentialsSection.locator('text=Mais de 11 mil sessões')
    ).toBeVisible();
    await expect(
      credentialsSection.locator('text=Além do consultório')
    ).toBeVisible();
  });

  test('should display credential descriptions', async ({ page }) => {
    await page.goto('/');

    const credentialsSection = page.locator(
      'section[aria-label="Credenciais e experiência"]'
    );

    await expect(
      credentialsSection.locator('text=Um espaço seguro para ser você mesma')
    ).toBeVisible();
    await expect(
      credentialsSection.locator(
        'text=Técnica internacional para ressignificar'
      )
    ).toBeVisible();
    await expect(
      credentialsSection.locator('text=Uma trajetória de confiança')
    ).toBeVisible();
    await expect(
      credentialsSection.locator('text=Palestras, rodas de conversa')
    ).toBeVisible();
  });

  test('should have marsala background color', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    const credentialsSection = page.locator(
      'section[aria-label="Credenciais e experiência"]'
    );

    await expect(credentialsSection).toBeVisible();

    // Check that the section has the correct background class
    await expect(credentialsSection).toHaveClass(/bg-\[#662B2D\]/);

    // Note: Computed background color may vary by browser, so we rely on the class check
  });

  test('should display icons in each card', async ({ page }) => {
    await page.goto('/');

    const credentialsSection = page.locator(
      'section[aria-label="Credenciais e experiência"]'
    );

    // Check that SVG icons are present (4 cards = 4 icons)
    const icons = credentialsSection.locator('svg');
    await expect(icons).toHaveCount(4);
  });

  test('should be positioned after AboutTherapist section', async ({
    page,
  }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    const credentialsSection = page.locator(
      'section[aria-label="Credenciais e experiência"]'
    );

    const aboutBox = await aboutSection.boundingBox();
    const credentialsBox = await credentialsSection.boundingBox();

    expect(aboutBox).not.toBeNull();
    expect(credentialsBox).not.toBeNull();

    if (aboutBox && credentialsBox) {
      // Credentials should be below About
      expect(credentialsBox.y).toBeGreaterThan(aboutBox.y);
    }
  });
});
