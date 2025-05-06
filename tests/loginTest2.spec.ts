import {test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{

await page.goto('http://localhost:4200/')
const clickForms=page.getByRole('link', { name: 'Forms' })
const formLayout=page.getByRole('link', { name: 'Form Layouts' })
await clickForms.click()
await formLayout.click()

})

test('Login Scenario 2 with assertion', async ({page}) => {

const emailAdd=page.getByLabel('Email address')
const passWd=page.locator('#exampleInputPassword1')
const checkbx=page.locator('#exampleInputPassword1')
const sbmt=page.locator('form').filter({ hasText: 'Email addressPasswordCheck me outSubmit' }).getByRole('button')


await emailAdd.fill('test@test.com')
await emailAdd.click()
await passWd.fill('password')
await passWd.click()
await checkbx.click()
await sbmt.click()
expect(sbmt).toContainText('Submit')


})