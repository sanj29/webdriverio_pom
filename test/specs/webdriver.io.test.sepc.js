
import LoginPage from '../pages/login.page.js'

describe("Recording 31/03/2024 at 12:57:56", () => {
  it("tests Recording 31/03/2024 at 12:57:56", async () => {
    
    await LoginPage.open()

    await browser.$("#username").click()
    await browser.$("#username").setValue("tomsmith")
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyDown', value: '' }]
    }])
    await browser.performActions([{
      type: 'key',
      id: 'keyboard',
      actions: [{ type: 'keyUp', value: '' }]
    }])
    await browser.$("#password").setValue("SuperSecretPassword!")
    await browser.$("aria/Login").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/secure")
    await browser.$("aria/Logout").click()
    await expect(browser).toHaveUrl("https://the-internet.herokuapp.com/login")
  });
});
