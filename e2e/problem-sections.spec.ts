import { test, expect } from '@playwright/test';

test.describe('Problem Statement & Sound Familiar Sections', () => {
  test('should display problem statement content', async ({ page }) => {
    await page.goto('/');

    const problemSection = page.locator('.problem-statement');
    await expect(problemSection).toBeVisible();

    // Check heading
    await expect(
      problemSection.locator('h2').filter({
        hasText:
          'Para mulheres que carregam histórias, decisões, pressões, dúvidas e',
      })
    ).toBeVisible();

    // Check description
    await expect(
      problemSection.locator('p').filter({
        hasText: 'Se você já tentou de tudo para perder peso',
      })
    ).toBeVisible();
  });

  test('should display sound familiar section with list items', async ({
    page,
  }) => {
    await page.goto('/');

    const soundFamiliarSection = page.locator('.sound-familiar');
    await expect(soundFamiliarSection).toBeVisible();

    // Check heading
    await expect(
      soundFamiliarSection
        .locator('h2')
        .filter({ hasText: 'Isso soa familiar?' })
    ).toBeVisible();

    // Check list items
    const listItems = soundFamiliarSection.locator('li');
    await expect(listItems).toHaveCount(6);

    // Check specific items
    await expect(
      soundFamiliarSection.locator('text=Sobrecarga emocional')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Dificuldade em estabelecer limites')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Medo de desapontar os outros')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Culpa ao priorizar a si mesma')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Sensação de estar sempre "dividida"')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Pressão por ser forte o tempo todo')
    ).toBeVisible();
  });

  test('should display arrow icons for each list item', async ({ page }) => {
    await page.goto('/');

    const soundFamiliarSection = page.locator('.sound-familiar');
    const arrowIcons = soundFamiliarSection.locator(
      '[data-testid="arrow-icon"]'
    );
    await expect(arrowIcons).toHaveCount(6);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const problemSection = page.locator('.problem-statement');
    await expect(problemSection).toHaveAttribute(
      'aria-labelledby',
      'problem-statement-heading'
    );

    const soundFamiliarSection = page.locator('.sound-familiar');
    await expect(soundFamiliarSection).toHaveAttribute(
      'aria-labelledby',
      'sound-familiar-heading'
    );
  });
});
