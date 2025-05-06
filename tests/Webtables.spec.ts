import {test,expect} from '@playwright/test'


test.beforeEach(async({page})=>{

    await page.goto('http://localhost:4200/')
    await page.getByText('Tables & Data').click()
    await page.getByText('Smart Table').click()
})

test('Table handling', async ({page}) =>{

const rowTable= page.getByRole('row',{name:'@twitter'})
await rowTable.locator('.nb-edit').click()
await page.locator('input-editor').getByPlaceholder('Age').clear()
await page.locator('input-editor').getByPlaceholder('Age').fill('55')
await rowTable.locator('.nb-checkmark').click()
const row = page.locator('table tbody tr', {
    has: page.locator('text=twitter@outlook.com')
})
const ageCell = row.locator('td').nth(6);
await expect(ageCell).toHaveText('55');
}
)