import { BrowserContext, Locator, Page, expect } from "@playwright/test";
export class Procurementclass
{
page:Page
url:string
userid:Locator
password:Locator
signinbutton:Locator
dashboardurl:string
current:string
card:Locator
addbutton:Locator
select1:Locator
option:Locator
category:Locator
categoryoption:Locator
item:Locator
name:Locator
license:Locator
licensetype:Locator
quantity:Locator
uom:Locator
uomquantity:Locator
selected:Locator
itemdropdown:Locator
item2:Locator
item3:Locator
budget:Locator
price:Locator
month:Locator
monthselect:Locator
dateselect:Locator
save:Locator
ok:Locator

constructor(page:Page)
{
this.page=page
this.url ='https://procurementqat.caresoftglobal.com/'
this.userid =this.page.locator('[id="txtUserID"]')
this.password =this.page.getByRole("textbox",{name:'Password'})
this.signinbutton =this.page.getByRole('button',{name:'Sign in'})
const dashboardurl = 'https://procurementqat.caresoftglobal.com/Dashboard'
const current = page.url()
this.card= this.page.getByRole('heading', {name:'Software'})
//this.addbutton= this.page.getByRole('button', { name: 'Add ' })
this.addbutton =this.page.locator('[id="btnadd"][type="submit"]')

  //this.select1=this.page.getByRole('textbox', { name: 'Select Priority' })
  this.select1=this.page.locator('[id="select2-ddlPriority-container"]')
  this.option=this.page.getByRole('option', { name: 'Medium' })
  this.category=this.page.getByRole('textbox', { name: 'Select Category' })
  this.categoryoption=this.page.getByRole('option', { name: 'Perpetual' })
  this.item=this.page.getByRole('textbox', { name: 'Select Item descriptions' })
  this.name=this.page.getByRole('option', { name: 'Adobe' })
  this.license=this.page.getByPlaceholder('Please enter License type')
  this.licensetype=this.page.getByPlaceholder('Please enter License type')
  this.quantity=this.page.locator('#txtQty')
  this.uom=this.page.getByRole('textbox', { name: 'Select Requested Quantity/ UOM' })
  this.uomquantity=this.page.getByRole('option', { name: 'Units' })
  this.selected=this.page.getByRole('button', { name: 'None selected ' })
  this.itemdropdown=this.page.getByLabel('BBB10550C00-Wilson Site Revamp')
  this.item2=this.page.getByRole('textbox', { name: 'Select Caresoft Entity' })
  this.item3=this.page.getByRole('option', { name: 'Caresoft Global Private' })
  this.budget=this.page.getByPlaceholder('Requested Budget', { exact: true })
  this.price=this.page.getByRole('textbox', { name: 'Select Base Currency' })
  this.month=this.page.getByRole('option', { name: 'May-' })
  this.monthselect=this.page.locator('#txtEnddate')
  this.dateselect=this.page.getByRole('cell', { name: '14' })
  this.save=this.page.getByRole('button', { name: 'Save ' })
  this.ok=this.page.getByRole('button', { name: 'OK' })

}

public async signin()
{    
    await this.page.goto(this.url)
    await this.userid.fill('101479')
    await this.password.fill('Mummy@162')
    await this.signinbutton.click()
    //await this.page.waitForTimeout(5000)
    await expect(this.current).toBe(this.dashboardurl)
    {console.log('url matched')}
    //await this.page.waitForTimeout(5000)
    await this.card.click()
    //await this.page.pause()
    //await this.page.waitForTimeout(9000)
    await this.addbutton.click()
    //await this.page.pause()
    //await this.page.waitForTimeout(10000) 
  //await this.select1.dispatchEvent('click')

  //await this.page.waitForSelector('[id="select2-ddlPriority-container"]')
  //await this.select1.dispatchEvent('click')
  //await this.option.click();
  await this.category.click();
  await this.categoryoption.click();
  await this.item.click();
  await this.name.click();
  await this.license.click();
  await this.licensetype.fill('Public');
  await this.quantity.fill('1');
  await this.uom.click();
  await this.uomquantity.click();
  await this.selected.click();
  await this.itemdropdown.check();
  await this.item2.click();
  await this.item3.click();
  await this.budget.fill('190');
  await this.price.click();
  await this.month.click();
  await this.monthselect.click();
  await this.dateselect.click();
  await this.save.click();
  await this.ok.click();

}
}

