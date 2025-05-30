import {test, expect, chromium} from '@playwright/test'

test('Slow motion and video recording demo', async() => {

        // launch browser
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
    });
    // create a context for browser
    const context = await browser.newContext({
        recordVideo: {
            dir: 'videos/',
            size: {width:800, height: 600}
        }
    });

    const page = await context.newPage();

    await page.goto('https://opensource-demo.orangehrmlive.com');
    //wait page.pause();
    await page.locator('[name="username"]').click();
    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').click();
    await page.locator('[name="password"]').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
})