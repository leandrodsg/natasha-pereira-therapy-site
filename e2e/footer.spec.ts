import { test, expect } from '@playwright/test';

test.describe('Footer Section', () => {
  test('should display footer content correctly', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer#rodape');
    await expect(footer).toBeVisible();

    // Check logo and description
    await expect(
      footer.locator('h2').filter({ hasText: 'Natasha Pereira' })
    ).toBeVisible();
    await expect(
      footer.locator('text=Psicóloga especializada em terapia para mulheres.')
    ).toBeVisible();

    // Check copyright
    await expect(
      footer.locator('text=© 2026 Natasha Pereira | CRP 01/22302')
    ).toBeVisible();
  });

  test('should have working external links', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer#rodape');

    // Check Instagram link (icon with aria-label)
    const instagramLink = footer.locator('a[aria-label="Instagram"]');
    await expect(instagramLink).toBeVisible();
    await expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    await expect(instagramLink).toHaveAttribute('target', '_blank');
    await expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');

    // Check WhatsApp link
    const whatsappLink = footer
      .locator('a')
      .filter({ hasText: 'WhatsApp: +55 61 98144-8553' });
    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute(
      'href',
      'https://wa.me/5561981448553'
    );

    // Check Email link
    const emailLink = footer
      .locator('a')
      .filter({ hasText: 'Email: natashaa.pereira@hotmail.com' });
    await expect(emailLink).toBeVisible();
    await expect(emailLink).toHaveAttribute(
      'href',
      'mailto:natashaa.pereira@hotmail.com'
    );
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer#rodape');

    // Check navigation links
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

  test('should display contact information', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer#rodape');

    // Check contact section
    await expect(
      footer.locator('h3').filter({ hasText: 'Contato' })
    ).toBeVisible();
    await expect(
      footer.locator(
        'text=Endereço: SEPS 705/905 Bloco A - Centro Empresarial Santa Cruz -'
      )
    ).toBeVisible();
  });
});
