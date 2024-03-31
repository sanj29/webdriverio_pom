import { $ } from '@wdio/globals'
import Base from '../pages/base.js'

class LoginPage extends Base{

    get usernameTextbox(){
        return $('#username')
    }

    get passwordTextbox(){
        return $('#password')
    }

    get loginBtn(){
        return $('button[type="submit"]')
    }

     async login(username, password){

        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginBtn.click()
    }

     open () {
        return super.open('login')
        //super.open('login');
    }

}
export default new LoginPage()