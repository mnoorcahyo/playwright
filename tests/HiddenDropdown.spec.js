const {test, expect } = require('@playwright/test')

test('Hidden Dropdown', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator("[name='username']").fill('Admin')
    await page.locator("[name='password']").fill('admin123')
    await page.locator("[type='submit']").click()

    await page.locator("//span[normalize-space()='PIM']").click()

    // klik on dropdown
    await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[1]").click()

    // waiting for options
    await page.waitForTimeout(3000)

    const options = await page.$$("//div[@role='listbox']//span")

    for(let option of options) {
        const ListOption = await option.textContent()
        // console.log("value of option =", ListOption)
        if (ListOption.includes('QA Engineer')) {
            await option.click()
            break;
        }
    }
})