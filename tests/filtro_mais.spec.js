import { test, expect } from '@playwright/test';

test('Kabum - menu Mais > Computadores abre página promocional com produtos', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/');

  await page.getByRole('button', { name: 'Botão do menu (Ver mais)' }).click();

  await page.getByLabel('Mais ').getByRole('link', { name: 'Computadores' }).click();

  await page.waitForSelector('.nameCard');
  const produtos = page.locator('.nameCard');
  const count = await produtos.count();
  expect(count).toBeGreaterThan(0);

  let encontrado = false;
  for (let i = 0; i < count; i++) {
    const titulo = await produtos.nth(i).innerText();
    if (/Notebook|Computador/i.test(titulo)) {
      encontrado = true;
      break;
    }
  }

  expect(encontrado).toBeTruthy();
});







