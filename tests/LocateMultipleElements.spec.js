const {test, expect} = require('@playwright/test')

test('LocateMultipleElements', async ({page})=>{

    await page.goto("https://demoblaze.com/")

    /*const Links = await page.$$('a');

    for(const link of Links)
    {
        const linkText = await link.textContent();
        console.log(linkText)


    }*/

    // Locate all the products displayed on home page
    // page.waitForSelector("//div[@id='tbodyid']//div//h4/a");

    const products = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const product of products) {
        const productName = await product.textContent()
        console.log(productName);
    }


})