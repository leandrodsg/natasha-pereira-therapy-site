import { test, expect } from '@playwright/test';

test.describe('About Therapist Section', () => {
  test('should display about section content correctly', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    await expect(aboutSection).toBeVisible();

    // Check heading
    await expect(
      aboutSection.locator('h2').filter({
        hasText: 'Acredito que você tem o poder de criar um',
      })
    ).toBeVisible();

    // Check bio text presence
    await expect(aboutSection.locator('text=Formada em 2019')).toBeVisible();
    await expect(
      aboutSection.locator('text=Trabalhar com mulheres faz sentido')
    ).toBeVisible();
    await expect(
      aboutSection.locator(
        'text=Sou uma psicóloga que não tem dúvidas: crio espaços seguros'
      )
    ).toBeVisible();
  });

  test('should load therapist image', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    const image = aboutSection.locator('img');
    await expect(image).toBeVisible();
    await expect(image).toHaveAttribute(
      'alt',
      'Natasha Pereira, psicóloga especializada em terapia para mulheres'
    );
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
