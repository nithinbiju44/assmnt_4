import demoQa from "../pageobjects/demoqa.js";

describe('checking entire working of demoqa',()=>{
    it('Launching demoqa Url',async()=>{
       demoQa.launchUrl(); 
       await browser.pause(3000);
       await expect(browser).toHaveTitle('DEMOQA');

    })
    it('checking the navigation of elements',async()=>{
        await demoQa.clickElements();
        await browser.pause(3000);     
        // await expect(browser).toHaveTitle('DEMO QA');
        const pageUrl = await browser.getUrl();
        await expect(pageUrl).toBe('https://demoqa.com/elements');

         
    })
    it('checking the navigation to webtables',async()=>{
        await demoQa.clickWebtables();
        const webTablesHeader = await $('//h1[text()="Web Tables"]');
        await expect(webTablesHeader).toBeDisplayed();
        await browser.pause(3000);
    })
    it('checking the navigaion of add button',async()=>{
        await demoQa.clickonAdd();
        const adduserTitle=await $('//div[text()="Registration Form"]')
        await expect(adduserTitle).toBeDisplayed();
        await browser.pause(3000);
    })
    it('adding the userdetails',async()=>{
        const submitButton = await $('//button[text()="Submit"]');
        await expect(submitButton).toBeDisplayed();
        await demoQa.enteruserDetails();
        await browser.pause(3000);
        


    })
})