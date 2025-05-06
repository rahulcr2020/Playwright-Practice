import {test,expect} from '@playwright/test'

test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/')
    await page.getByText('Modal & Overlays').click()
    await page.getByText('Tooltip').click()

})

test('tooltips', async ({page}) => {
    
const TooltipPage=page.locator('nb-card',{hasText:'Tooltip Placements'})
await page.getByRole('button',{name:'TOP'}).hover()

})