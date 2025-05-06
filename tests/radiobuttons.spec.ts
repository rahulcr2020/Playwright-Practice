import {test,expect} from '@playwright/test'
import { sequenceEqual } from 'rxjs-compat/operator/sequenceEqual'

test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/')
    const clickForms=page.getByRole('link', { name: 'Forms' })
    const formLayout=page.getByRole('link', { name: 'Form Layouts' })
    await clickForms.click()
    await formLayout.click()

})

test('Radio buttons', async ({page}) => {

const selecPage = page.locator('nb-card', {hasText:"Using the Grid"})
await selecPage.getByLabel('Option 1').check({force:true})
await selecPage.getByRole('radio',{name:'Option 2'}).check({force:true})

}
)