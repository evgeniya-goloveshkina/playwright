import { test } from '@playwright/test'

test.skip('Test One', async({ page }) => {

})

test('not yet ready', async ({ page }) => {
    test.fail();
})

test.fixme('to be fixed', async ({ page }) => {
})

test('slow test', async ({ page }) => {
    test.slow();
})

// Tags
test('test login page @smoke', async ({ page }) => {
})