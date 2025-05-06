import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/')
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Toastr').click()

})


test('Checkboxes test', async ({page}) => {

// await page.getByRole('checkbox', {name:'Hide on click'}).check({force:true})
// await page.getByRole('checkbox', {name:'Prevent arising of duplicate toast'}).check({force:true})

const allCheck=page.getByRole('checkbox')
for(const box of await allCheck.all()) {

    await box.uncheck({force:true})
    expect(await box.isChecked()).toBeTruthy()
}


})