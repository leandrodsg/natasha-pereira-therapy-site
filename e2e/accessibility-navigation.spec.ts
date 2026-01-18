import { test, expect } from '@playwright/test';

test('keyboard navigation works for all sections', async ({ page }) => {
  await page.goto('/');

  // Test anchor links from footer navigation
  const footer = page.locator('footer#rodape');
  const footerLinks = [
    { href: '#inicio', text: 'Início' },
    { href: '#quem-sou', text: 'Quem sou' },
    { href: '#servicos', text: 'Serviços' },
    // Note: #contato was removed, replaced with WhatsApp CTA
  ];

  for (const { href } of footerLinks) {
    const link = footer.locator(`nav a[href="${href}"]`);
    await link.click();
    await page.waitForTimeout(500); // Wait for smooth scroll
    const section = page.locator(href);
    await expect(section).toBeInViewport();
  }
});

test('CTAs have aria-describedby', async ({ page }) => {
  await page.goto('/');

  // Hero CTA button (inside #inicio section)
  const heroButton = page.locator(
    'section#inicio a[aria-describedby="hero-description"]'
  );
  await expect(heroButton).toHaveAttribute(
    'aria-describedby',
    'hero-description'
  );

  // CTA Section button (inside #contato section)
  const ctaButton = page.locator(
    'section#contato a[aria-describedby="cta-description"]'
  );
  await expect(ctaButton).toHaveAttribute(
    'aria-describedby',
    'cta-description'
  );
});
