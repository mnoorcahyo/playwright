const {test,expect} = require('@playwright/test')

test('Keyboard Action', async({page})=>{
    await page.goto('https://gotranscript.com/text-compare')

    // await page.locator('name="text1"').fill("Welcome to automation")
    await page.type('[name="text1"]', 'welcome to automation')


    // Cmnd+A 
    await page.keyboard.press('Meta+A')

    // Cmnd+C
    await page.keyboard.press('Meta+C')

    // TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // Cmnd+V
    await page.keyboard.press('Meta+V')



    await page.waitForTimeout(3000)
})