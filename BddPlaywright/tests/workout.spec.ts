import { test, expect } from '@playwright/test';
import { Login2 } from '../src/pages/login-page';
test('has title', async ({ page }) => {
    const obj1 = new Login2(page)
    await obj1.login()
    await obj1.selectCard()
    await obj1.addRequest()

})