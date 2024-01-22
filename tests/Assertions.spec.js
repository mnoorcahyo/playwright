const {test, expect} = require('@playwright/test')

test('Assertions', async ({page}) =>{
    await page.goto('https://demo.nopcommerce.com/register')

    // 1) expect(page).toHaveURL() Page has URL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    // 2) expect(page).toHaveTitle()	Page has a title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    // 3) expect(locator).toBeVisible()	Element is visible
    const logoElement = await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    // 4) expect(locator).toBeEnabled()	Element is enabled  
    const searchBoxEnabled = await page.locator('#small-searchterms')
    await expect(searchBoxEnabled).toBeEnabled()

    //    expect(locator).toBeDisabled()	Element is disabled
    // const searchBoxDisabled = await page.locator('#small-searchterms')
    // await expect(searchBoxDisabled).toBeDisabled()

    // 5) expect(locator).toBeChecked()	Checkbox is checked

    // RadioButton
    const maleRadioButton = await page.locator('#gender-male')
    await maleRadioButton.click() //select radio button
    await expect(maleRadioButton).toBeChecked()

    //Checkbox
    const checkBox = await page.locator('#Newsletter')
    await expect(checkBox).toBeChecked
    
    // 6) expect(locator).toHaveAttribute()	Element has a DOM attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    // 7) expect(locator).toHaveText()	Element matches text
    await expect(await page.locator('.page-title h1')).toHaveText('Register') //full text

    // 8) expect(locator).toContainText()	Element contains text
    await expect(await page.locator('.page-title h1')).toContainText('Regis') //partial text

    // 9) expect(locator).toHaveValue(value)	Input has a value
    const inputEmail = await page.locator('#Email')
    inputEmail.fill('mnc@gmail.com')
    await expect(inputEmail).toHaveValue('mnc@gmail.com')

    // 10) expect(locator).toHaveCount()	List has exact number of children
    const optionDropdown = await page.locator("select[name='DateOfBirthYear'] option")
    await expect(optionDropdown).toHaveCount(112)
})