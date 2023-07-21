import {test, expect} from "@playwright/test";
import HomePage from "../pages/home";
import RegisterPage from "../pages/register";
import LoginPage from "../pages/login";

let randoEmail = "";
const email = "jondoe@gmail.com"
const password = "123456";

test.describe("verify homepage, register and login", async()=>{

    test("Verify that user is able to add product to cart", async ({page, baseURL})=>{
        page.goto(`${baseURL}`);
        const homePage = new HomePage(page);
        await homePage.addProductToCart();
    })
    
    test("verify user can register", async ({page, baseURL})=>{
        await page.goto(`${baseURL}route=account/register`);
        const rando = Math.floor(Math.random()*1000);
        const register = new RegisterPage(page);
        await register.enterFirstname("John");
        await register.enterLastName("Doe");
        randoEmail = `jondoe${rando}@gmail.com`
        await register.enterEmail(randoEmail);
        await register.enterTelephone("1234567890");
        await register.enterPassword(password);
        await register.enterConfirmPassword(password);
        await register.clickOnPrivacyPolicy();
        await register.clickOnContinue();
        const title = await page.title();
        expect(title).toBe("Your Account Has Been Created!");
    })
    
    
    test("verify user can login", async ({page, baseURL})=>{
        await page.goto(`${baseURL}route=account/login`);
        const login = new LoginPage(page);
        await login.enterEmail(email);
        await login.enterPassword(password);
        await login.clickOnLogin();
        const title = await page.title();
        expect(title).toBe("My Account");
    })
})

