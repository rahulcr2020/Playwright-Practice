import {test} from '@playwright/test'
import { first } from 'rxjs-compat/operator/first'

test.beforeEach(async({page}) => {//before each helps in executing somethimg** before everye execution.
    await page.goto('http://localhost:4200/') 
    await page.getByText('Forms').click()
    await page.getByTitle('Form Layouts').click()
})

// test('First test', async ({page}) => { 
//     await page.goto('http://localhost:4200/') 
//     await page.getByText('Forms').click()
//     await page.getByText('Form Layouts').click()
//     await page.locator('#inputEmail1').fill('kun@di.com')
//     await page.locator('#inputPassword2').fill('kakkus')
//     await page.locator('nb-card').locator('nb-radio').locator(':text-is("Option 1")').click()
//     await page.getByRole('button').getByText('SIGN IN').first().click()

// })

// test('Navigate to Date Picker', async ({page}) => {
//     await page.getByText('Forms').click()
//     await page.getByText('Datepicker').click()

// })

// test('Locator Syntax Rules', async ({page}) =>{

//     await page.locator('[id="inputEmail1"]').click()


// })

//by exact test match.
//page.locator(':text-is("text")')

test('Finding parent elements', async ({page})=>{

    // await page.goto('http://localhost:4200/pages/iot-dashboard')
    // await page.getByRole('link', { name: 'Forms' }).click()
    // await page.getByRole('link', { name: 'Form Layouts' }).click()
    const submitButton=page.locator('form').filter({ hasText: 'Email addressPasswordCheck me outSubmit' }).getByRole('button')

    await page.getByLabel('Email address').click()
    await page.locator('#exampleInputPassword1').click()
    await page.locator('label').filter({ hasText: 'Check me out' }).locator('span').first().click()
    await submitButton.click()
   
})


