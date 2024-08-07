import {test, expect} from '@playwright/test'                
import { Procurementclass } from '../src/pages/procurement' // importing the class page with its location
test('login process', async({page}) =>
{
    const obj2 = new Procurementclass(page)   // creating the objrct
    await obj2.signin()                       // using the created object, call the sign in method
})
