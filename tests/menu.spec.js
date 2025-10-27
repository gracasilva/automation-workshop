import { test, expect } from '@playwright/test';

test('Menu HOME validation', async ({ page }) => {
  await page.goto('https://playground-drab-six.vercel.app/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playground page/);
  
});