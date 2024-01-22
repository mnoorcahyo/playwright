const {test, expect} = require('@playwright/test')

test('Multiple Select Dropdown', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Select multiple option from multi select dropdown
    // await page.selectOption('#colors', ['Yellow', 'White', 'Green'])

    // Assertions
    // 1) Check number of option in dropdown
    // const OptionDropdown = await page.locator('#colors option')
    // await expect(OptionDropdown).toHaveCount(5)

    // 2) Check number of option in dropdown using JS Array
    // const OptionDropdown = await page.$$('#colors option')
    // console.log('Number of option', OptionDropdown.length)
    // await expect(OptionDropdown.length).toBe(5)

    // 3) Check presence of value in the dropdown
    const ValueContent = await page.locator('#colors').textContent()
    // await expect.soft(ValueContent.includes('Rose Gold')).toBeFalsy()
    await expect(ValueContent.includes('Blue')).toBeTruthy()

    await page.waitForTimeout(5000)
})