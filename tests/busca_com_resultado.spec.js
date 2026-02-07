import { test, expect } from '@playwright/test';

test('Kabum - busca retorna resultados', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/');

  const termo = 'mouse';
  
  await page.getByTestId('searchbar-search-input').fill(termo);

  await page.getByTestId('searchbar-search-input').press('Enter');

  await page.waitForSelector('.productCard', { timeout: 10000 });

  const resultados = await page.locator('.productCard').count();
  expect(resultados).toBeGreaterThan(0);

  const tituloPrimeiro = await page.locator('.productCard').first().innerText();
  expect(tituloPrimeiro.toLowerCase()).toContain('mouse');
});







