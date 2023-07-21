import {Page} from "@playwright/test";

export default class LoginPage{

    constructor(public Page: Page){

    }

    async enterEmail(email: string){
        await this.Page.fill("//input[@id='input-email']", email);
    }

    async enterPassword(password: string){
        await this.Page.fill("//input[@id='input-password']", password);
    }

    async clickOnLogin(){
        await this.Page.click("//input[@value='Login']");
        await this.Page.waitForLoadState();
    }

}