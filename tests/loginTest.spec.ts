import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto("http://localhost:4200/pages/iot-dashboard")
const clickForms=page.getByRole('link', { name: 'Forms' })
const formLayout=page.getByRole('link', { name: 'Form Layouts' })
await clickForms.click()
await formLayout.click()


})

test('login scenario',async ({page}) =>{

const emailField=page.locator('#inputEmail1')
const passwordField=page.locator('#inputPassword2')
const radio=page.getByText('Option 1')
const SubBu=page.locator('form').filter({ hasText: 'EmailPasswordRadiosOption 1Option 2Disabled OptionSign in' }).getByRole('button')



await emailField.fill('test@test.com')

await passwordField.fill('password')

await radio.click()
await SubBu.click()
expect(SubBu).toContainText('Sign in');

})