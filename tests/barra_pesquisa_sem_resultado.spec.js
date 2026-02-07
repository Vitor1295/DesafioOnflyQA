import { test, expect } from '@playwright/test';

test('Busca sem resultado mostra mensagem correta', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/');

  const termo = 'asdfgh123';
  await page.getByTestId('searchbar-search-input').fill(termo);
  
  await page.getByTestId('searchbar-search-input').press('Enter');

  await expect(page.getByText(/Lamentamos, nenhum produto encontrado com esse critério de pesquisa./i)).toBeVisible();

  const resultados = await page.locator('.productCard').count();
  expect(resultados).toBe(0);
});
