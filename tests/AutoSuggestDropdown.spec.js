const {test,expect} = require('@playwright/test')

test('Auto Suggest Dropdown', async ({page}) => {

    await page.goto('https://www.redbus.in/')

    await page.locator('#src').fill('Delhi')
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text")

    const suggests = await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text")

    for(let suggest of suggests) {
        const value = await suggest.textContent()
        // console.log('value ini adalah', value)

        if(value.includes('Karol Bagh')){
            await suggest.click()
            break;
        }
    }

    await page.waitForTimeout(5000)
})