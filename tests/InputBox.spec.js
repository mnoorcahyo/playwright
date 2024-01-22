const{test,expect} = require('@playwright/test')

test('InputBox', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // InputBox - FirstName
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible()
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty()
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable()


    // await page.locator("//input[@id='FirstName']").fill("John")
    await page.fill("//input[@id='FirstName']", 'John')

    await page.waitForTimeout(5000)
})