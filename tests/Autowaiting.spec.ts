import {test,expect} from '@playwright/test'

test.beforeEach(async ({page}) => {
    await page.goto('http://uitestingplayground.com/ajax')
    const clickButton=page.getByRole('button', { name: 'Button Triggering AJAX Request' })
    await clickButton.click()
   

})

test('Auto waiting scenario', async ({page}) => {

// await page.waitForSelector('.bg-success')// wait for element

//await page.waitForResponse('http://uitestingplayground.com/ajaxdata') //wait for response

})


test('Page timeouts examples', async ({page}) => {

const locButton=page.locator('.bg-success')
await locButton.click({timeout:16000})//manually adding timeout, over rides config timeout.

})