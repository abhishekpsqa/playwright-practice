import {test, expect} from "../fixtures/pages";

let randoEmail = "";
const email = "jondoe@gmail.com"
const password = "123456";

test.describe("verify homepage, register and login", async()=>{

    test("Verify that user is able to add product to cart", async ({page, baseURL, homepage})=>{
        page.goto(`${baseURL}`);
        await homepage.addProductToCart();
    })
    
    test("verify user can register", async ({page, baseURL, registerpage})=>{
        await page.goto(`${baseURL}route=account/register`);
        const rando = Math.floor(Math.random()*1000);
        await registerpage.enterFirstname("John");
        await registerpage.enterLastName("Doe");
        randoEmail = `jondoe${rando}@gmail.com`
        await registerpage.enterEmail(randoEmail);
        await registerpage.enterTelephone("1234567890");
        await registerpage.enterPassword(password);
        await registerpage.enterConfirmPassword(password);
        await registerpage.clickOnPrivacyPolicy();
        await registerpage.clickOnContinue();
        const title = await page.title();
        expect(title).toBe("Your Account Has Been Created!");
    })
    
    
    test("verify user can login", async ({page, baseURL, loginpage})=>{
        await page.goto(`${baseURL}route=account/login`);
        await loginpage.enterEmail(email);
        await loginpage.enterPassword(password);
        await loginpage.clickOnLogin();
        const title = await page.title();
        expect(title).toBe("My Account");
    })
})

