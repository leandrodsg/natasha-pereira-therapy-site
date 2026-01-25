import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('accessibility audit passes', async ({ page }) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page })
    // Exclude color-contrast temporarily - will be fixed in design update PR
    .disableRules(['color-contrast'])
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('color contrast violations are tracked', async ({ page }) => {
  await page.goto('/');

  const accessibilityScanResults = await new AxeBuilder({ page })
    .withRules(['color-contrast'])
    .analyze();

  // All contrast issues should now be fixed
  expect(accessibilityScanResults.violations).toEqual([]);
});
