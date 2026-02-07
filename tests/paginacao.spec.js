import { test, expect } from '@playwright/test';

test('Kabum - paginação exibe 20 produtos por página', async ({ page }) => {
  test.setTimeout(60000);

  await page.goto('https://www.kabum.com.br/computadores/notebooks');

  await page.getByLabel(/Exibir/i).selectOption({ label: '20 por página' });

  await page.waitForTimeout(3000);

  const count = await page.locator('.productCard').count();
  
  expect(count).toBeLessThanOrEqual(20);
});
