// const { test, expect } = require("@playwright/test")

import { test, expect } from "@playwright/test";

test('Locators', async ({page}) => {

    await page.goto("https://demoblaze.com/")

    // click on login button - property
    // await page.locator('id=login2').click()
    await page.click('id=login2')

    //provide username - CSS
    // await page.locator('#loginusername').fill('mnoorcahyo')
    await page.fill('#loginusername', 'pavanol')
    // await page.type('#loginusername')

    // provide password
    await page.fill("input[id='loginpassword']", 'test@123')

    // Click on Login Button - Xpath
    await page.click("//button[normalize-space()='Log in']")

    // verify logout link presence - Xpath
    const LogoutLink = await page.locator("//a[@id='logout2']")
    
    await expect(LogoutLink).toBeVisible()

    await page.close()

 })