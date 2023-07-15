import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('test@test.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('test');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('test13');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/');
});