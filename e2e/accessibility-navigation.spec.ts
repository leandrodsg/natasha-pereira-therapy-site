import { test, expect } from '@playwright/test';

test('keyboard navigation works for all sections', async ({ page }) => {
  await page.goto('/');

  // Test anchor links from footer
  const footerLinks = [
    { href: '#inicio', text: 'Início' },
    { href: '#quem-sou', text: 'Quem sou' },
    { href: '#servicos', text: 'Serviços' },
    { href: '#contato', text: 'Contato' },
  ];

  for (const { href } of footerLinks) {
    const link = page.locator(`a[href="${href}"]`);
    await link.click();
    const section = page.locator(href);
    await expect(section).toBeInViewport();
  }
});

test('CTAs have aria-describedby', async ({ page }) => {
  await page.goto('/');

  const heroButton = page.locator('a', { hasText: 'Vamos conversar?' });
  await expect(heroButton).toHaveAttribute(
    'aria-describedby',
    'hero-description'
  );

  const ctaButton = page.locator('a', { hasText: 'Agende sua sessão' });
  await expect(ctaButton).toHaveAttribute(
    'aria-describedby',
    'cta-description'
  );
});
