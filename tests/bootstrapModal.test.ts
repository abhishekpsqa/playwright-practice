import {test, expect} from '@playwright/test'

test("accept bootstrap modal", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
    await page.click("//button[@data-target='#myModal']");
    //click on save changes on modal
    await page.click("//div[@id='myModal']//button[@type='button'][normalize-space()='Save Changes']");

})