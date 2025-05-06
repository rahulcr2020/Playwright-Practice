import {expect, test} from '@playwright/test'

test.beforeEach(async({page}) => {//before each helps in executing somethimg** before everye execution.
    await page.goto('http://localhost:4200/') 
    await page.getByText('Forms').click()
    await page.getByTitle('Form Layouts').click()

})

test('Input fields', async ({page}) =>{

const emailField=page.locator('#inputEmail1')
const passwordField=page.locator('#inputPassword2')

await emailField.pressSequentially('test@test.com')

await passwordField.pressSequentially('password')

//generic assertion.

const inputval= await emailField.inputValue()
expect(inputval).toEqual('test@test.com')

})