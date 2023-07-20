import {test, expect} from '@playwright/test'
import type { Page } from 'playwright-core';


test("Iframes", async({page})=>{
    await page.goto("https://letcode.in/frame")
    const frameCount = await page.frames().length;
    console.log(frameCount);
    //select frame and do actions
    const firstFr = await page.frameLocator("//iframe[@id='firstFr']");
    await firstFr.locator("//input[@placeholder='Enter name']").fill("Abhishek");
    const nestedFrame = await firstFr.frameLocator("//iframe[@class='has-background-white']");
    await nestedFrame.locator("//input[@placeholder='Enter email']").fill("test@test.com");

})

// handling multiple tabs
test("handling single tabs", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
    // For a new window popup we use promise
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("//a[normalize-space()='Follow On Twitter']")
    ])
    console.log(newWindow.url());

})

test("handling multiple tabs", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
    const [multiPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.click("//a[@id='followboth']")
    ])
    await page.waitForLoadState();
    const pages = multiPage.context().pages()
    let index:number;
    let facebookPage:Page;
    let twitterPage:Page;
    console.log(pages[0].url());
    for(index=0; index<pages.length; index++){
        if(pages[index].url().includes("twitter")){
            twitterPage = pages[index];
        }
        else if(pages[index].url().includes("facebook")){
            facebookPage = pages[index];
        }   
    }
    console.log(`Facebook url is ${facebookPage.url()}`);
    console.log(`Twitter url is ${twitterPage.url()}`);
})