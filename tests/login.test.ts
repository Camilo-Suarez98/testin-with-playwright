import { test, chromium } from "@playwright/test";

test("login test", async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.click("//a[contains(.,'Login')]");

  await page.fill("input[name='email']", "camilo.suarez85@gmail");
  await page.fill("input[name='password']", "1234");
  await page.click("input[value='Login']");

  await page.waitForTimeout(5000);

  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();

  await newPage.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");

  await newPage.waitForTimeout(5000);
});