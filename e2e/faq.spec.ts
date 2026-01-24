import { test, expect } from '@playwright/test';

test.describe('FAQ Section', () => {
  test('should display FAQ section with all questions', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('section#faq');
    await expect(faqSection).toBeVisible();

    // Check heading
    await expect(
      faqSection.locator('h2').filter({
        hasText: 'Perguntas Frequentes',
      })
    ).toBeVisible();

    // Check subtitle
    await expect(
      faqSection.locator('text=Respostas para as dúvidas mais comuns')
    ).toBeVisible();

    // Check all 5 questions are present
    await expect(
      faqSection.locator('text=Como funciona o primeiro atendimento?')
    ).toBeVisible();
    await expect(
      faqSection.locator('text=Quanto tempo dura cada sessão?')
    ).toBeVisible();
    await expect(
      faqSection.locator('text=Você atende apenas mulheres?')
    ).toBeVisible();
    await expect(
      faqSection.locator('text=O que é Gestalt-terapia?')
    ).toBeVisible();
    await expect(
      faqSection.locator(
        'text=Preciso estar passando por algo "muito grave" para buscar terapia?'
      )
    ).toBeVisible();
  });

  test('should expand and collapse FAQ items', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('section#faq');
    const firstQuestion = faqSection.locator('details').first();

    // Initially closed
    await expect(firstQuestion).not.toHaveAttribute('open');

    // Click to expand
    await firstQuestion.locator('summary').click();
    await expect(firstQuestion).toHaveAttribute('open');

    // Verify answer is visible
    await expect(
      firstQuestion.locator('text=No primeiro encontro, conversamos')
    ).toBeVisible();

    // Click to collapse
    await firstQuestion.locator('summary').click();
    await expect(firstQuestion).not.toHaveAttribute('open');
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('section#faq');

    // Section has aria-labelledby
    await expect(faqSection).toHaveAttribute('aria-labelledby', 'faq-heading');

    // All details elements exist
    const detailsElements = faqSection.locator('details');
    await expect(detailsElements).toHaveCount(5);
  });

  test('should navigate with keyboard', async ({ page }) => {
    await page.goto('/');

    // Tab to FAQ section and interact
    const faqSection = page.locator('section#faq');
    const firstSummary = faqSection.locator('summary').first();

    await firstSummary.focus();
    await page.keyboard.press('Enter');

    const firstDetails = faqSection.locator('details').first();
    await expect(firstDetails).toHaveAttribute('open');
  });

  test('should display CTA button with WhatsApp link', async ({ page }) => {
    await page.goto('/');

    const faqSection = page.locator('section#faq');
    const ctaButton = faqSection.locator('a').filter({
      hasText: 'Ainda tem dúvidas? Fale comigo',
    });

    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute('href', /wa\.me/);
    await expect(ctaButton).toHaveAttribute('target', '_blank');
    await expect(ctaButton).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('should have FAQPage schema for SEO', async ({ page }) => {
    await page.goto('/');

    // Check for JSON-LD script
    const schemaScript = page.locator('script[type="application/ld+json"]');
    const schemaContent = await schemaScript.first().textContent();

    expect(schemaContent).toContain('"@type":"FAQPage"');
    expect(schemaContent).toContain('schema.org');
    expect(schemaContent).toContain('Como funciona o primeiro atendimento?');
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    await page.goto('/');

    const faqSection = page.locator('section#faq');
    await expect(faqSection).toBeVisible();

    // Heading visible
    await expect(
      faqSection.locator('h2').filter({ hasText: 'Perguntas Frequentes' })
    ).toBeVisible();

    // All FAQ items visible
    const detailsElements = faqSection.locator('details');
    await expect(detailsElements).toHaveCount(5);

    // CTA button visible
    await expect(
      faqSection.locator('a').filter({ hasText: 'Ainda tem dúvidas?' })
    ).toBeVisible();
  });

  test('should have no accessibility violations', async ({ page }) => {
    await page.goto('/');

    // Basic accessibility checks for FAQ section
    const faqSection = page.locator('section#faq');

    // Semantic section element
    const tagName = await faqSection.evaluate((el) => el.tagName);
    expect(tagName).toBe('SECTION');

    // Has role="region"
    await expect(faqSection).toHaveAttribute('role', 'region');

    // Heading hierarchy
    const headings = faqSection.locator('h2, h3');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
  });
});
