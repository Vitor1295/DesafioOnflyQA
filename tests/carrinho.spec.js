import { test, expect } from '@playwright/test';

test('Fluxo Kabum - adicionar produto ao carrinho e validar', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/');

  await page.getByTestId('searchbar-search-input').fill('mouse gamer');

  await page.getByTestId('searchbar-search-input').press('Enter');

  await page.waitForSelector('.productCard');
  
  await page.locator('.productCard').first().click();

  await page.getByRole('button', { name: 'Comprar agora' }).click();

  await expect(page.getByLabel('itens').nth(2)).toHaveText('1');

  await page.getByRole('link', { name: 'Carrinho' }).click();

  const total = await page.getByLabel('Total').innerText();
  expect(total).toMatch(/R\$/);
});







