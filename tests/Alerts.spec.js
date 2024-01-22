const {test, expect} = require('@playwright/test')

test.skip('Alert with OK', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept()
    })

    await page.click("//button[normalize-space()='Alert']")

    await page.waitForTimeout(5000)

});

test.skip('Confirmation Dialog-Alert with OK and cancel', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        // await dialog.accept() //close by using OK button
        await dialog.dismiss() //close by using cancel button
    })

    await page.click("//button[normalize-space()='Confirm Box']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!')
    
    await page.waitForTimeout(5000)

});

test('Prompt Dialog', async ({page})=> {

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Enabling Dialog window handler
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        // await dialog.accept('Harry Potter') //close by using OK button
        await dialog.dismiss() //close by using cancel button
    })

    await page.click("//button[normalize-space()='Prompt']")
    await expect(page.locator("//p[@id='demo']")).toHaveText('User cancelled the prompt.')
    
    await page.waitForTimeout(5000)

});