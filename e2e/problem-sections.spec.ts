import { test, expect } from '@playwright/test';

test.describe('Sound Familiar Section', () => {
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
      soundFamiliarSection.locator('h2').filter({
        hasText: 'Você está aqui porque encontrar paz é importante para você',
      })
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

  test('should display check icons for each list item', async ({ page }) => {
    await page.goto('/');

    const soundFamiliarSection = page.locator(
      'section[aria-labelledby="sound-familiar-heading"]'
    );
    const checkIcons = soundFamiliarSection.locator(
      '[data-testid="check-icon"]'
    );
    await expect(checkIcons).toHaveCount(6);
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    await page.goto('/');

    const soundFamiliarSection = page.locator(
      'section[aria-labelledby="sound-familiar-heading"]'
    );
    await expect(soundFamiliarSection).toHaveAttribute(
      'aria-labelledby',
      'sound-familiar-heading'
    );
  });
});
