import {test as baseTest} from "@playwright/test";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";

type appPages = {
    homepage: HomePage,
    loginpage: LoginPage,
    registerpage: RegisterPage
}
export const test = baseTest.extend<appPages>({
    homepage:async({page}, use)=>{
        await use(new HomePage(page));
    },
    loginpage: async({page},use)=>{
        await use(new LoginPage(page));
    },
    registerpage: async({page}, use)=>{
        await use(new RegisterPage(page));
    }
})

export const expect = baseTest.expect;

