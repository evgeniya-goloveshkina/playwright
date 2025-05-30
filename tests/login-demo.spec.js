import {test, expect} from '@playwright/test'

test('Demo Login Test 1', async({page}) => {

    await page.goto('https://demo.applitools.com/')
    await page.pause()
    await page.locator('id=username').fill('Raghav')
    await page.locator('id=password').fill('1234')
    await page.waitForSelector('id=log-in', {timeout:5000})
    await page.locator('id=log-in').click()
})

test.only('Login demo test 3', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com');
    //wait page.pause();
    await page.locator('[name="username"]').click();
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').click();
    await page.locator('[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.locator('span').filter({ hasText: 'Adam Wilson' }).click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.close();
 })