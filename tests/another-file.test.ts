import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("//a[contains(.,'Login')]");
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
  await page.locator("[placeholder='E-Mail Address']").click();
  await page.locator("[placeholder='E-Mail Address']").fill('koushik350@gmail.com');
  await page.locator("[placeholder='Password']").click();
  await page.locator("[placeholder='Password']").fill('Pass123$');
  await page.click("input[value='Login']");
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/account");
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/edit");
  await page.locator("[placeholder='First Name']").click();
  await page.locator("[placeholder='First Name']").fill('koushick');
  await page.click("input[value='Continue']");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("//a[contains(.,'Logout')]");
  await expect(page).toHaveURL("https://ecommerce-playground.lambdatest.io/index.php?route=account/logout");
});