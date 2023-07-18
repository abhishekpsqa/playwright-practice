import moment from 'moment';
import {test, expect} from '@playwright/test'

test("Date Picker with momentjs", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.click("//input[@placeholder='Start date']");
    const prevBtn = page.locator("//div[@class='datepicker-days']//th[@class='prev']");
    const nextBtn = page.locator("//div[@class='datepicker-days']//th[@class='next']");
    const mmyyBtn = page.locator("div[class='datepicker-days'] th[class='datepicker-switch']");
    const dateFound = await mmyyBtn.textContent();
    
    let wantToSelectDate = "December 2022"
    const dateFoundMoment = moment(dateFound, "MMMM YYYY");
    const wantToSelectDateMoment = moment(wantToSelectDate, "MMMM YYYY");

    while(await mmyyBtn.textContent() != wantToSelectDate){
        
        if(dateFoundMoment.isBefore(wantToSelectDateMoment)){
            await nextBtn.click();
        }
        else if(dateFoundMoment.isAfter(wantToSelectDateMoment)){
            await prevBtn.click();
        }
    }
})

