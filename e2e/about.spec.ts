import { test, expect } from '@playwright/test';

test.describe('About Therapist Section', () => {
  test('should display about section content correctly', async ({ page }) => {
    await page.goto('/');

    const aboutSection = page.locator('section#quem-sou');
    await expect(aboutSection).toBeVisible();

    // Check heading
    await expect(
      aboutSection.locator('h2').filter({
        hasText: 'Existe um refúgio seguro',
      })
    ).toBeVisible();

    // Check bio text presence - new content
    await expect(
      aboutSection.locator('text=Provar o próprio valor')
    ).toBeVisible();
    await expect(
      aboutSection.locator('text=Minha formação em Gestalt-Terapia')
    ).toBeVisible();
    await expect(
      aboutSection.locator('text=Tudo isso me trouxe até aqui')
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
    await expect(image).toHaveAttribute('src', /aboutme_new\.jpg/);
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
