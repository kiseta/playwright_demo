const { test, expect } = require('@playwright/test');
const app = 'Guestbook Demo';
const baseUrl = 'https://testautomationpro.com/aut/';
const homePageUrl = baseUrl + "index.php"
const homePageTitle = 'Home - Guestbook Demo';
const loginPageUrl = baseUrl + 'login.php';
const loginPageTitle = 'Login - Guestbook Demo';
const formPageUrl = baseUrl + 'form.php'
const formPageTitle = 'Sign the Guesbook - Guestbook Demo'
const loginErrorMsg = 'Login unsuccessful, check the user name and password!'
const ADMIN = [ 'admin@', 'root' ];
const USER = [ 'Demouser', 'Demopass' ];
const NOUSER = ['foo', 'bar'];


test.describe('Guestbook Login tests', () => {

    test.beforeEach(async ({ page }) => {

      navHomePage(page, 'Home', baseUrl, homePageTitle);

      navLoginPage(page, 'Login', loginPageUrl, loginPageTitle);

    });

      // test.afterEach(async ({ page }) => {

      // });

    test('Test 01 | Login Admin User', async ({ page }) => {

        await loginAs(page, ADMIN[0], ADMIN[1])

        await validatePage(page, 'Guestbook Sign Form', formPageUrl, formPageTitle);

        await logOut(page, ADMIN[0])

        await validatePage(page, 'Home', homePageUrl, homePageTitle)

    });

    test('Test 02 | Login Demouser User', async ({ page }) =>  {

        await loginAs(page, USER[0], USER[1])

        await validatePage(page, 'Guestbook Sign Form', formPageUrl, formPageTitle);
          
        await logOut(page, USER[0])

        await validatePage(page, 'Home', homePageUrl, homePageTitle)


    });

    test('Test 03 | Login Validate Error Message', async ({ page }) =>  {
      
      await loginAs(page, NOUSER[0], NOUSER[1]);

      await expect(page.locator('id=errormsg')).toHaveText(loginErrorMsg);
      
      let errTxt = await page.locator('id=errormsg').innerText()

      await console.log('Error Message text: ', errTxt)
    
      if(errTxt == loginErrorMsg) {
          await console.log(`Incorrect login error message is confirmed: ${loginErrorMsg}`)
      }
    });

  }); 

async function logthis(val) {
    await console.log(val);
}

async function navHomePage(page, pagename, url, title) {
    await page.goto(url);
    await logthis(`Launch the ${app} website at ${url}`)
    await validatePage(page, pagename, url, title)
  }

async function navLoginPage(page, pagename, url, title) {
    await page.locator('id=LogintMenuItem').click();
    await logthis(`Navigate to ${pagename} Page, click the \'Login\' link`)
    await validatePage(page, pagename, url, title)
  }

  async function validatePage(page, pagename, url, title){
    await expect(page).toHaveURL(url);
    await expect(page).toHaveTitle(title)
    await logthis(`Validate ${pagename} Page Url: ${url}`)
    await logthis(`Validate ${pagename} Page Title: ${title}`)
  }

  async function loginAs(page, username, password){
    await page.locator('id=txt_username').fill(username);
    await page.locator('id=txt_password').fill(password);
    await page.locator('id=btn_submit').click();
    await console.log(` --- Login as Username: ${username}, Password: ${password}`)
  }

  async function logOut(page, username){
    
    let logoutLinkText = await page.locator('id=LogoutMenuItem').innerText();
    await logthis(`Validate Login, logout link text: ${logoutLinkText} is displayed`);
    await expect(page.locator('id=LogoutMenuItem')).toHaveText('Logout '+ username);
    await page.locator('id=LogoutMenuItem').click();
    await logthis(`Logout: Click \'Logout ${username} link\'`)
  }