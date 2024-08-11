import { createBdd } from "playwright-bdd";
import { test } from './fixtures/fixture1';
const{Given, When, Then} = createBdd(test)

Then('Loginwith', async ({ login }) => {

    await login.login()


})