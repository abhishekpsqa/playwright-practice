import { Expect, test } from "@playwright/test";

test("download file", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("//textarea[@id='textbox']","Abhishek is testing playwright");
    await page.click("//button[@id='create']");
    
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.click("//a[@id='link-to-download']")
    ]);
    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(`download/${fileName}`);
})

test("upload file",async ({page}) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("//input[@type='file']", ["upload/lionTiger1.jpg","upload/lionTiger2.jpg" ]);
    await page.waitForTimeout(2000);
})

test.only("upload file using FileChooser", async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
    const uploadFiles = await Promise.all([
        page.waitForEvent('filechooser'),
        page.click("//input[@type='file']")
    ])
    await uploadFiles[0].setFiles(["upload/lionTiger1.jpg","upload/lionTiger2.jpg" ])
    await page.waitForTimeout(2000);
})

