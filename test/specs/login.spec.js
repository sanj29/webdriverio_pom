
import LoginPage from '../pages/login.page.js';
import HomePage from '../pages/home.page.js';

describe('Demo Test', () =>{
    it('Login Test', async () =>{
        await LoginPage.open()
        await LoginPage.login('tomsmith','SuperSecretPassword!')
        await HomePage.checkMessage("You logged into a secure area!")
    })

    it('Logout Test', async() =>{
        await HomePage.logout()
        await HomePage.checkMessage("You logged out of the secure area!")

    })
})