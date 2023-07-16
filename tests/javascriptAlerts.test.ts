import {test, expect} from '@playwright/test'

test("accept javascript alert", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")

    //handling events
    page.on('dialog',async(alert)=>{
        await alert.accept();
        console.log(await alert.message());
    })
    await page.locator('p').filter({ hasText: 'JS AlertClick Me' }).getByRole('button').click();
    await page.click("//button[normalize-space()='Book a Demo']");
})

test("accept and assert javascript alert", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    page.on("dialog",async(alert)=>{
        await alert.accept();
    })
    await page.locator('p').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();
    const message = await page.locator("//p[@id='confirm-demo']").textContent();
    expect(message).toContain("OK!");
})

test("dismiss and assert javascript alert", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.on("dialog",async(alert)=>{
        await alert.dismiss();
    })
    await page.locator('p').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();
    const message = await page.locator("//p[@id='confirm-demo']").textContent();
    expect(message).toContain("Cancel!");
})

test("accept alert with form", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    await page.on("dialog",async(alert)=>{
        await alert.accept("Hi I am testing");
    })
    await page.locator('p').filter({ hasText: 'Prompt box:Click Me' }).getByRole('button').click();
    const message = await page.locator("//p[@id='prompt-demo']").textContent();
    expect(message).toContain("Hi I am testing");
})

//page.locator('p').filter({ hasText: 'JS AlertClick Me' }).getByRole('button').click();
//page.locator('p').filter({ hasText: 'Confirm box:Click Me' }).getByRole('button').click();
//page.locator('p').filter({ hasText: 'Prompt box:Click Me' }).getByRole('button').click();