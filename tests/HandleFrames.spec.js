const {test, expect} = require('@playwright/test')

test('Frames', async ({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames/')

    // total frames
    const AllFrames = await page.frames()
    console.log('Number of frames', AllFrames.length)

    // approach 1: using name or url
    // const NameFrame = await page.frame('name') //if name is present
    // const frame1 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("[name='mytext1']", 'Hello World')

    //approach 2: using frame locator
    const InputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    InputBox.fill('Hello Cahyo')


    await page.waitForTimeout(5000)
} )