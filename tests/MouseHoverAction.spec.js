 const {test, expect} = require('@playwright/test')

 test('Mouse hover action', async({page}) =>{
    await page.goto('https://demo.opencart.com/')

    const Desktop = await page.locator("//a[normalize-space()='Desktops']")
    const Macbook = await page.locator("//a[normalize-space()='Mac (1)']")

    Desktop.hover()
    Macbook.hover()
    
    await page.waitForTimeout(5000)
 })