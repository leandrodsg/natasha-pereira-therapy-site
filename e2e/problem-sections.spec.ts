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
      soundFamiliarSection.locator('text=Você carrega o mundo nos ombros')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Dizer "não" parece impossível')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=O medo de desapontar paralisa')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Cuidar de si parece egoísmo')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=Dividida entre mil papéis')
    ).toBeVisible();
    await expect(
      soundFamiliarSection.locator('text=A obrigação de ser forte')
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
