const {test, expect} = require('@playwright/test')

test('CheckBox', async ({page}) => {

    await page.goto('http://total-qa.com/checkbox-example/')


    // Single Check Box
    await page.locator("//div[@id='primary']//input[1]").check() //male
    // await page.check("//input[@id='tree-node-desktop' and @type='checkbox']")

    expect (await page.locator("//div[@id='primary']//input[1]")).toBeChecked()
    expect (await page.locator("//div[@id='primary']//input[1]").isChecked()).toBeTruthy()
    expect (await page.locator("//div[@id='primary']//input[4]").isChecked()).toBeFalsy()

    // Multiple Check Box
    const CheckBox = [
        "//div[@id='primary']//input[1]",
        "//div[@id='primary']//input[3]",
        "//div[@id='primary']//input[4]"
    ]
    
    for(const locate of CheckBox){ //select multiple check boxes
        await page.locator(locate).check();
    }

    await page.waitForTimeout(5000);

    for(const locate of CheckBox) //unselect multiple checkboxes which are already selected
    { 
        if(await page.locator(locate).isChecked())
        {
            await page.locator(locate).uncheck()
        }
    }

})