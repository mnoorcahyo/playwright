const {test, expect} = require('@playwright/test')

test('BootstrapDropdown', async ({page}) => {

    await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click()

    // 1
    // const option = await page.locator('ul>li label input')
    // await expect(option).toHaveCount(11)

    // 2
    // const options = await page.$$('ul>li label input')
    // await expect(options.length).toBe(11)

    // 3 Select options from dropdown
    // const options = await page.$$('ul>li label')
    // for (let option of options) {
    //     const value = await option.textContent()
    //     // console.log('Value is', value)
    
    //     if(value.includes('Angular') || value.includes('Java')){
    //         await option.click()
    //     }
    // }

    // 4 Delect option
    const options = await page.$$('ul>li label')
    for (let option of options) {
        const value = await option.textContent()
        // console.log('Value is', value)
    
        if(value.includes('HTML') || value.includes('CSS')){
            await option.click()
        }
    }


    await page.waitForTimeout(5000)
})