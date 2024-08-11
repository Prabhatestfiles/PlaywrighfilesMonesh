import { test as base} from 'playwright-bdd'
//import { Login } from '../../src/pages/login-page'
import { Login } from '../../src/pages/login1-page'
type allStepClass={
    login:Login;
    

}

export const test=base.extend<allStepClass>
({
    login:async({page}, use)=> {await use(new Login(page))}

    //Syntax//<object>:async({page}, use)=> {await use(new <className in page>(page))}
})