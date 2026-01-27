import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have working anchor links in footer', async ({ page }) => {
    await page.goto('/');

    // Test footer navigation links exist and have correct hrefs
    const footer = page.locator('footer#rodape');

    const navLinks = footer.locator('nav a');
    await expect(navLinks).toHaveCount(5);

    await expect(navLinks.filter({ hasText: 'Sobre' })).toHaveAttribute(
      'href',
      '#quem-sou'
    );
    await expect(navLinks.filter({ hasText: 'Serviços' })).toHaveAttribute(
      'href',
      '#servicos'
    );
    await expect(navLinks.filter({ hasText: 'Como Funciona' })).toHaveAttribute(
      'href',
      '#como-funciona'
    );
    await expect(navLinks.filter({ hasText: 'Opiniões' })).toHaveAttribute(
      'href',
      '#avaliacoes'
    );
    await expect(navLinks.filter({ hasText: 'Dúvidas' })).toHaveAttribute(
      'href',
      '#faq'
    );
  });

  test('should have sections with correct IDs', async ({ page }) => {
    await page.goto('/');

    // Check that all sections have the correct IDs
    await expect(page.locator('section#inicio')).toBeVisible();
    await expect(page.locator('section#quem-sou')).toBeVisible();
    await expect(page.locator('section#servicos')).toBeVisible();
    await expect(page.locator('footer#rodape')).toBeVisible();
  });
});
