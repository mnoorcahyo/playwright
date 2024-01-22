const {test,expect} = require('@playwright/test')
const { stat } = require('fs')

test('DropDown', async({page}) =>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    // Multiple ways to select option from the dropdown
    // await page.locator('#country').selectOption({label: 'India'}) //label /visible text
    // await page.locator('#country').selectOption('India') //visible text
    // await page.locator('#country').selectOption({value: 'india'}) //by value
    // await page.locator('#country').selectOption({index: 2}) //by index
    // await page.selectOption('#country', 'India') //by index

    // Assertions
    // 1) Check number of options in dropdown - Approach1
    // const options = await page.locator('#country option')
    // await expect(options).toHaveCount(10)

    // 2) Check number of options in dropdown - Approach2
    // const options = await page.$$('#country option')
    // console.log('Number of option', options.length)
    // await expect(options.length).toBe(10)

    // 3) Check presence of value in the dropdown - Approach1
    // const content = await page.locator('#country').textContent()
    // await expect(content.includes('India')).toBeTruthy()

    // 4) Check presence of value in the dropdown - Approach2 - using looping
    /*const options = await page.$$('#country option')
    let status = false
    for(const option of options){
        // console.log(await option.textContent())
        let value = await option.textContent()
        if(value.includes('Canada')){
            status = true
            break
        }
        console.log('status sebelum diubah', status)
    }
    console.log('status setelah diubah', status)
    expect(status).toBeTruthy()


    await page.waitForTimeout(5000)*/

    //  5) Select option from dropdown using loop
    const options = await page.$$('#country option')
    for(const option of options){
        let value = await option.textContent()
        if(value.includes('Canada')){
            await page.selectOption('#country', value)
            break
        }
    }


    await page.waitForTimeout(5000)
})