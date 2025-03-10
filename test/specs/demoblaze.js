import Landinpage from "../pageobjects/Landinpage.js";
import Homepage from "../pageobjects/Homepage.js";
import addtocart from "../pageobjects/addtocart.js";

describe('checking Demoblaze launching',function(){
    it('launching the url',async()=>{
        Landinpage.LaunchURL();
        // await expect(await browser.getUrl()).toContain('demoblaze');

        await browser.pause('3000')
    
    })
    it('Selecting laptop from the category', async () => {
        await Homepage.selectLaptop();
        await browser.pause(3000);
        // await expect(await browser.getUrl()).toContain('#Laptops'); // Ensure correct URL
        // await expect($('//div[contains(@class, "card-block")]')).toBeDisplayed(); // Check products loaded
    });
    it('click laptop from the category', async () => {
        await Homepage.clickLaptop();
        // await browser.pause('3000')
        const laptopTitle=await $('//h2[text()="Sony vaio i5"]')
        await expect(laptopTitle).toExist();
        const pageUrl = await browser.getUrl(); 
        await expect(pageUrl).toContain("prod.html?idp_=8");
        await browser.pause('3000')
        //await expect(`//h2[text()='Sony vaio i5']`).toBeDisplayed()
    })
    it('checking navigation to the addtocart page', async()=>{
        await addtocart.clickaddtoCart();
        await expect(browser).toHaveTitle("STORE");
        await browser.pause('3000')

    })
    it('checking navigation to the viewcart page', async()=>{
        await addtocart.viewcart();
        await browser.pause('3000')

    })
    it('checking delete prod from cart', async()=>{
        await addtocart.$deletecart();
        await browser.pause('3000')

    })
})