import { test, expect } from '@playwright/test'
test('Assessment2', async ({ page }) => {

  await page.goto('https://adaptiveqat.caresoftglobal.com/');
  await page.getByPlaceholder('User ID / Email ID').fill('620048')
  await page.getByRole('textbox', {name:'Password'}).fill('Test123@')
  //await page.getByPlaceholder('Password').fill('Test123@')
  await page.getByRole('textbox', {name:'Password'}).press('Enter')
  //await page.getByRole('link', {name:'Customer Page'}).click()
  await page.locator('[name="Customer Page"]').click()
  await page.getByRole('link', { name: 'Create Request' }).click()
  //await page.locator('[formid="618F9209-9707-4186-A8DC-A3F69D68F560"]').selectOption('VeSys')
  //await page.locator('#dp1722911689387').click();
  //await page.getByRole('link', { name: '13' }).click();
  await page.locator('[placeholder="DD-MMM-YYYY"][controlid="E461B9A0-A07D-4D5A-A334-6542C8038E9B"]').fill('12-Aug-2024')
  //await page.getByRole('textbox',{name:'Select Project location'}).selectOption('Coimbatore')
  await page.locator('[placeholder="DD-MMM-YYYY"][controlid="E461B9A0-A07D-4D5A-A334-6542C8038E9B"]').press('Enter')
  //await page.locator('[id="select2-Project location-ff-container"]').selectOption('Coimbatore')
  //await page.locator('[id="select2-Project location-ff-container"]').getByText('Coimbatore').click()
  await page.locator('[name="Project location"]').selectOption("Coimbatore")
  await page.pause()
});