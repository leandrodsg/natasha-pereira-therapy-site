import { test, expect } from '@playwright/test';

test.describe('Problem Statement & Sound Familiar Sections', () => {
  test('should display problem statement content', async ({ page }) => {
    await page.goto('/');

    // Problem statement section uses aria-labelledby
    const problemSection = page.locator(
      'section[aria-labelledby="problem-statement-heading"]'
    );
    await expect(problemSection).toBeVisible();

    // Check heading
    await expect(
      problemSection.locator('h2').filter({
        hasText: 'Você está aqui porque',
      })
    ).toBeVisible();

    // Check description
    await expect(
      problemSection.locator('p').filter({
        hasText: 'Para mulheres que carregam histórias',
      })
    ).toBeVisible();
  });

  test('should display sound familiar section with list items', async ({
    page,
  }) => {
    await page.goto('/');

    // Sound familiar section uses aria-labelledby
    const soundFamiliarSection = page.locator(
      'section[aria-labelledby="sound-familiar-heading"]'
    );
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

    // Check specific items (updated to match actual content)
    await expect(
      soundFamiliarSection.locator('text=sobrecarga emocional')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Estabelecer limites')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=medo de desapontar')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Culpa ao priorizar')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Sensação de estar sempre')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Pressão por ser forte')
    ).toBeVisible();
  });

  test('should display arrow icons for each list item', async ({ page }) => {
    await page.goto('/');

    const soundFamiliarSection = page.locator(
      'section[aria-labelledby="sound-familiar-heading"]'
    );
    const arrowIcons = soundFamiliarSection.locator(
      '[data-testid="arrow-icon"]'
    );
    await expect(arrowIcons).toHaveCount(6);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const problemSection = page.locator(
      'section[aria-labelledby="problem-statement-heading"]'
    );
    await expect(problemSection).toHaveAttribute(
      'aria-labelledby',
      'problem-statement-heading'
    );

    const soundFamiliarSection = page.locator(
      'section[aria-labelledby="sound-familiar-heading"]'
    );
    await expect(soundFamiliarSection).toHaveAttribute(
      'aria-labelledby',
      'sound-familiar-heading'
    );
  });
});
