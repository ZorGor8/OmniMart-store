import { test, expect } from '@playwright/test';

test('should complete a full purchase flow', async ({ page }) => {
  await page.goto('http://localhost:5173/');

  // 1. Ждем загрузки [Wait for load]
  await page.waitForLoadState('networkidle');

  // 2. Кликаем на кнопку товара [Click buy button]
  // Ищем любую кнопку в основной части страницы
  await page.locator('main button, .product-card button').first().click();

  // 3. Ищем ссылку на корзину ПО АДРЕСУ (href) [Search cart by href]
  // Это самый надежный способ для SPA
  const cartLink = page.locator('a[href*="cart"]');
  
  if (await cartLink.count() > 0) {
    await cartLink.first().click();
  } else {
    // Если href не найден, кликаем на иконку корзины через aria-label (если есть) 
    // или по порядковому номеру с конца
    await page.locator('nav a').nth(-3).click(); 
  }

  // 4. Проверка
  await expect(page).toHaveURL(/.*cart/);
});