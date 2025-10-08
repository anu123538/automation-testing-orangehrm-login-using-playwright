// tests/login.spec.js
const { test, expect } = require('@playwright/test');
const {LoginPage} = require('../pages/LoginPage');

test('Login to OrangeHRM demo site', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  // Assert that dashboard is visible after login
  await expect(page).toHaveURL(/dashboard/);
  await expect(page.locator('h6')).toContainText('Dashboard');
});
