const {test, expect} = require('@playwright/test')

test('Mouse Double Click', async({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    const DoubleClick = await page.locator("//button[normalize-space()='Copy Text']")
    
    // double click 
    await DoubleClick.dblclick()

    const Return = await page.locator('#field2')

    await expect(Return).toHaveValue('Hello World!')
    


    await page.waitForTimeout(5000)
})