import { test, expect } from '@playwright/test';

test('Kabum - home carrega com elementos principais', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/');

  await expect(page).toHaveTitle(/Kabum/i);

  await expect(page.getByTestId('searchbar-search-input')).toBeVisible();

  await expect(page.getByRole('button', { name: 'Entre', exact: true })).toBeVisible();

  await expect(page.getByRole('link', { name: 'Carrinho' })).toBeVisible();
    
  await expect(page.locator('a[href="/"]')).toBeVisible();

  await expect(page.getByRole('link', { name: 'Cupons', exact: true })).toBeVisible();
  
});




