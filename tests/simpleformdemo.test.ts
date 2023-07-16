import { test, expect } from "@playwright/test";

test("enter-message-and-check",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const msgInput = page.locator("//input[@id='user-message']");
    console.log(await msgInput.getAttribute("placeholder"));
    expect(msgInput).toHaveAttribute("placeholder","Please enter your Message");
    const msg = "Hi I am testing"
    await msgInput.fill(msg);
    await page.click("//button[text()='Get Checked Value']");
    const outputMsg = page.locator("//p[@id='message']");
    expect(outputMsg).toHaveText(msg);
    await page.waitForTimeout(2000);
})

test("enter-nums-and-check-sum",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const val1 = 10;
    const val2 = 20;
    const sum = val1 + val2;
    await page.fill("//input[@id='sum1']",val1.toString());
    await page.fill("//input[@id='sum2']",val2.toString());
    await page.click("//button[normalize-space()='Get Sum']");
    const expectedValue = await page.locator("//p[@id='addmessage']").textContent();
    console.log(expectedValue);
    expect(expectedValue).toEqual(sum.toString());
    page.waitForTimeout(2000);
})
// use test.only to run only this test
test.only("test-checkbox-status", async({page})=>{
    page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    const checkbox1 = page.locator("//input[@id='isAgeSelected']");
    expect(checkbox1).not.toBeChecked();
    await checkbox1.click();
    expect(checkbox1).toBeChecked();
    await page.waitForTimeout(2000);
})