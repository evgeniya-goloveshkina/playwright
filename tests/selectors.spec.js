import {test, expect} from '@playwright/test'

test('Selectors Demo', async ({page}) => {
    await page.goto('https://saucedemo.com/')
    //await page.pause()
    await page.click('id=user-name')
    await page.locator('id=user-name').fill('Ed')
    await page.locator('#login-button').click()
    await page.locator('xpath=//input[@name="password"]').fill('Far')
    await page.locator('text=LOGIN').click()
    await page.locator('input:has-text("LOGIN")').click()
});