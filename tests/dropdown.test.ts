import {test, expect} from '@playwright/test'

//dropdown test

test("select dropdown value", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='select-demo']",{
        //select option with value
        value:"Monday"
    });
    await page.waitForTimeout(2000);
    //select option with label
    await page.selectOption("//select[@id='select-demo']",{
        label:"Tuesday"
    });
    await page.waitForTimeout(2000);
    //select option with index
    await page.selectOption("//select[@id='select-demo']",{
        index:4
    });
    await page.waitForTimeout(2000);
})

test("multiselect drop down test", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='multi-select']",[{
        label:"California"
    },{
        label:"Florida"
    },{
        value:"Ohio"
    }])
    await page.waitForTimeout(2000);
})