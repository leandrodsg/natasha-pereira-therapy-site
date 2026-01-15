import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should have working anchor links in footer', async ({ page }) => {
    await page.goto('/');

    // Test footer navigation links exist and have correct hrefs
    const footer = page.locator('footer#rodape');

    const navLinks = footer.locator('nav a');
    await expect(navLinks).toHaveCount(4);

    await expect(navLinks.filter({ hasText: 'Início' })).toHaveAttribute(
      'href',
      '#inicio'
    );
    await expect(navLinks.filter({ hasText: 'Quem sou' })).toHaveAttribute(
      'href',
      '#quem-sou'
    );
    await expect(navLinks.filter({ hasText: 'Serviços' })).toHaveAttribute(
      'href',
      '#servicos'
    );
    await expect(navLinks.filter({ hasText: 'Contato' })).toHaveAttribute(
      'href',
      '#contato'
    );
  });

  test('should have sections with correct IDs', async ({ page }) => {
    await page.goto('/');

    // Check that all sections have the correct IDs
    await expect(page.locator('section#inicio')).toBeVisible();
    await expect(page.locator('section#quem-sou')).toBeVisible();
    await expect(page.locator('section#servicos')).toBeVisible();
    await expect(page.locator('section#contato')).toBeVisible();
    await expect(page.locator('footer#rodape')).toBeVisible();
  });
});
