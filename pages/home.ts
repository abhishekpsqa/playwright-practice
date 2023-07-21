import {Page} from "@playwright/test"


export default class HomePage{
    constructor(public Page:Page){

    }

    async clickOnSpecialHotTab(){
        await this.Page.click("//span[normalize-space()='Home']");
        await this.Page.waitForLoadState();
    }

    async addProductToCart(){
        await this.Page.click("//a[@title='Lumix S Series From Panasonic']");
        await this.Page.waitForLoadState();
        await this.Page.hover("//div[@class='carousel-item active']//img[@title='iPod Touch']");
        await this.Page.click("//i[@class='fas fa-shopping-cart']");
    }
}