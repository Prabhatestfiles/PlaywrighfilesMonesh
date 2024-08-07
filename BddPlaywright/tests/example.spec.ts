import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('get started link', async ({ page }) => {

  await page.goto('https://procurementqat.caresoftglobal.com/Dashboard')

  await expect.soft(page).toHaveURL('https://procurementqat.caresoftglobal.com')

  //await page.setViewportSize({ width: 1920, height: 1080 });
  
// while(await page.getByLabel('Customer').isVisible()==false){
// page.keyboard.down('PageDown')
// }
 
  await page.locator('[id="txtUserID"]').fill('101479')
  await page.getByRole("textbox",{name:'Password'}).fill('Mummy@162')
  await page.getByRole('button',{name:'Sign in'}).click()
  await page.getByRole('heading', {name:'Software'}).click()
  await page.locator('[id="btnadd"][type="submit"]').click()
  await page.locator('[id="ddlItemCategory"]').selectOption('Subscription')  // with select
  //await page.mouse.wheel(0, 600);
  await page.getByLabel('Customer').check()
  await page.locator('[class="multiselect-selected-text"]').click()

  await page.check('[type="checkbox"][value="BAYONE13179C000"]');
  await page.getByRole('option', { name: 'May-' })
  await page.locator('#txtEnddate').click()
  await page.getByRole('cell', { name: '14' }).click()
  //await page.locator('[id="ddlItemCategory"]').click()
  //await page.getByText('Subscription').click()
  //await page.locator('[id="ddlItemCategory"]').getByText('Subscription')
  await page.pause()
});