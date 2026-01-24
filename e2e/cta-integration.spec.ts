// e2e/cta-integration.spec.ts
import { test, expect } from '@playwright/test';

test.describe('CTA Integration', () => {
  test('Hero CTA button links to WhatsApp', async ({ page }) => {
    await page.goto('/');

    const heroCta = page
      .locator('section#inicio a')
      .filter({ hasText: 'Vamos conversar?' });
    await expect(heroCta).toBeVisible();

    // Check that it has the correct WhatsApp link
    await expect(heroCta).toHaveAttribute(
      'href',
      /https:\/\/wa\.me\/5561981448553/
    );
    await expect(heroCta).toHaveAttribute('target', '_blank');
    await expect(heroCta).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('FAQ Section button links to WhatsApp', async ({ page }) => {
    await page.goto('/');

    const ctaButton = page
      .locator('section#faq a')
      .filter({ hasText: 'Ainda tem dúvidas? Fale comigo' });
    await expect(ctaButton).toBeVisible();

    // Check that it has the correct WhatsApp link
    await expect(ctaButton).toHaveAttribute(
      'href',
      /https:\/\/wa\.me\/5561981448553/
    );
    await expect(ctaButton).toHaveAttribute('target', '_blank');
    await expect(ctaButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Footer WhatsApp link is correct', async ({ page }) => {
    await page.goto('/');

    const whatsappLink = page
      .locator('footer a')
      .filter({ hasText: '+55 61 98144-8553' });
    await expect(whatsappLink).toBeVisible();

    await expect(whatsappLink).toHaveAttribute(
      'href',
      'https://wa.me/5561981448553'
    );
    await expect(whatsappLink).toHaveAttribute('target', '_blank');
    await expect(whatsappLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('Footer email link is correct', async ({ page }) => {
    await page.goto('/');

    const emailLink = page
      .locator('footer a')
      .filter({ hasText: 'natashaa.pereira@hotmail.com' });
    await expect(emailLink).toBeVisible();

    await expect(emailLink).toHaveAttribute(
      'href',
      'mailto:natashaa.pereira@hotmail.com'
    );
  });

  test('Footer Instagram link is correct', async ({ page }) => {
    await page.goto('/');

    const instagramLink = page.locator('footer a[aria-label="Instagram"]');
    await expect(instagramLink).toBeVisible();

    await expect(instagramLink).toHaveAttribute(
      'href',
      'https://instagram.com/sounatashapsi'
    );
    await expect(instagramLink).toHaveAttribute('target', '_blank');
    await expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });
});
