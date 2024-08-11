import {test as base} from 'playwright-bdd'
import { Login2 } from '../../src/pages/login-page'
type allClass={
    login:Login2;
    

}

export const test=base.extend<allClass>
({
    login:async({page}, use)=> {await use(new Login2(page))}

    //Syntax//<object>:async({page}, use)=> {await use(new <className in page>(page))}
})