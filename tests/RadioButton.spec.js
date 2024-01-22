const{test,expect} = require('@playwright/test')

test('Radio Button', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register')

    // Radio Button
    await page.locator("//input[@value='M']").check() //male
    // await expect(await page.locator("//input[@value='M']"))
    await expect(await page.locator("//input[@value='M']")).toBeChecked()
    await expect(await page.locator("//input[@value='M']").isChecked()).toBeTruthy()

    await expect(await page.locator("//input[@value='F']").isChecked()).toBeFalsy()

    await page.waitForTimeout(5000)
})