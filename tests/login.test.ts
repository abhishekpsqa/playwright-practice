 import { chromium, test } from "@playwright/test";

 test("Login test", async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //https://ecommerce-playground.lambdatest.io/
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    await page.click("//span[normalize-space()='Login']");
    await page.fill("//input[@id='input-email']", "test@test.com");
    await page.fill("//input[@id='input-password']","test");
    await page.click("//input[@value='Login']");
    const newContext1 = await browser.newContext();
    const page1 = await newContext1.newPage();
    page1.goto("https://ecommerce-playground.lambdatest.io/");
    await page1.waitForTimeout(5000);
 })