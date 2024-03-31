import { $ } from '@wdio/globals'
import Base from '../pages/base.js'

class HomePage extends Base{

    get logoutBtn(){
        return $('aria/Logout')
        //document.querySelector("#content > div > a > i")
        //#content > div > a
    }

    get loggedMessage(){
        return $('#flash')
    }


   async checkMessage(msg){
        await  expect (this.loggedMessage).toHaveTextContaining(msg)
    }

    async logout(){
        await this.logoutBtn.click()

    }
}
export default new HomePage()