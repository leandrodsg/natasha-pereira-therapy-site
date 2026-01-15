import { test, expect } from '@playwright/test';

test.describe('About Therapist Section', () => {
  test('should display about section content correctly', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    await expect(aboutSection).toBeVisible();

    // Check heading
    await expect(
      aboutSection
        .locator('h2')
        .filter({ hasText: 'Olá, sou Natasha Pereira.' })
    ).toBeVisible();

    // Check subheading
    await expect(
      aboutSection.locator('h3').filter({
        hasText:
          'Sou uma psicóloga que não tem dúvidas: crio espaços seguros para',
      })
    ).toBeVisible();

    // Check bio text presence
    await expect(aboutSection.locator('text=Formada em 2019')).toBeVisible();
    await expect(
      aboutSection.locator('text=Trabalhar com mulheres faz sentido')
    ).toBeVisible();

    // Check link
    const learnMoreLink = aboutSection
      .locator('a')
      .filter({ hasText: 'Saiba mais sobre mim' });
    await expect(learnMoreLink).toBeVisible();
  });

  test('should load therapist image', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    const image = aboutSection.locator(
      'img[alt="Natasha Pereira - Psicóloga"]'
    );
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute('alt', 'Natasha Pereira - Psicóloga');
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    await expect(aboutSection).toHaveAttribute(
      'aria-labelledby',
      'about-heading'
    );

    const heading = aboutSection.locator('#about-heading');
    await expect(heading).toBeVisible();
  });
});
