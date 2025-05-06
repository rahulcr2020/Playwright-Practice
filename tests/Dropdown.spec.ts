import { COSMIC_THEME } from '@nebular/theme'
import {expect, test} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/')

}) 

test('dropdowns selection', async ({page}) =>{

const dropDownSel= page.locator('ngx-header nb-select')
await dropDownSel.click()

const selectDrop= page.getByText('cosmic')
await selectDrop.click()
expect(selectDrop).toContainText('Cosmic')
const colorlayout=page.locator('nb-layout-header')
await expect(colorlayout).toHaveCSS('background-color', 'rgb(50, 50, 89)')

})