import {Page} from '@playwright/test'

export default class RegisterPage{

    constructor(public Page: Page){

    }
    
    async enterFirstname(firstname: string){
        await this.Page.fill("//input[@id='input-firstname']", firstname);
    }

    async enterLastName(lastname: string){
        await this.Page.fill("//input[@id='input-lastname']", lastname);
    }

    async enterEmail(email: string){
        await this.Page.fill("//input[@id='input-email']", email);
    }

    async enterTelephone(telephone: string){
        await this.Page.fill("//input[@id='input-telephone']", telephone);
    }

    async enterPassword(password: string){
        await this.Page.fill("//input[@id='input-password']", password);
    }

    async enterConfirmPassword(confirmPassword: string){
        await this.Page.fill("//input[@id='input-confirm']", confirmPassword);
    }

    async clickOnPrivacyPolicy(){
        const checkBox = await this.Page.locator("//input[@id='input-agree']").isChecked();
        if(!checkBox){
            await this.Page.click("//label[@for='input-agree']");
        }
    }

    async clickOnContinue(){
        await this.Page.click("//input[@value='Continue']");
        await this.Page.waitForLoadState();
    }

}