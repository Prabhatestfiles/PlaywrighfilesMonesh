import { createBdd } from "playwright-bdd";
import {test} from './fixtures/fixture';
const{Given, When, Then} = createBdd(test)

Then('Login', async ({login}) =>
{
    
    await login.login()
    //await login.credential()
    
})

Then('Credential', async ({login}) =>
    {
        
        //await login.login()
        await login.credential()
        
    })
    
