const {test, expect} = require('@playwright/test')

test('Built-inLocators', async({page})=>{

    await page.goto('https://mola.tv/')

    const logo=await page.getByAltText('logo Mola')
    await expect(logo).toBeVisible()

})