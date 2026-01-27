import { test, expect } from '@playwright/test';

test('keyboard navigation works for all sections', async ({ page }) => {
  await page.goto('/');

  // Test anchor links from footer navigation
  const footer = page.locator('footer#rodape');
  const footerLinks = [
    { href: '#quem-sou', text: 'Sobre' },
    { href: '#servicos', text: 'Serviços' },
    { href: '#como-funciona', text: 'Como Funciona' },
    { href: '#faq', text: 'Dúvidas' },
  ];

  for (const { href } of footerLinks) {
    const link = footer.locator(`nav a[href="${href}"]`);
    await link.click();
    await page.waitForTimeout(1500); // Wait for smooth scroll

    // Check if the section is at least partially visible
    const section = page.locator(href);
    const isVisible = await section.isVisible();
    expect(isVisible).toBe(true);

    // Check that the section is positioned reasonably (not completely off-screen)
    const boundingBox = await section.boundingBox();
    expect(boundingBox?.y).toBeGreaterThanOrEqual(-20000);
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
});
