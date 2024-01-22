const {test,expect} = require('@playwright/test')

test('Keyboard Action', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    // await page.locator('name="text1"').fill("Welcome to automation")
    await page.ty('name="text1"', 'welcome to automation')




    await page.waitForTimeout(5000)
})