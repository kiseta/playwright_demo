// playwright tests for 

const { test, expect } = require('@playwright/test');
const data = require('../data/data')

  
test.describe('AOS Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(data.baseUrl)
        await page.locator('#menuUserLink').click();
    });

    // test.afterEach(async ({ page }) => {
    // });

    test('Test 01 > New User can register', async ({ page }) => {

        await page.locator('text=CREATE NEW ACCOUNT').click();
        await expect(page).toHaveURL(data.newAccountPageUrl);
        await expect(page.locator('h3:has-text("CREATE ACCOUNT")')).toBeVisible();

        var dataVals = '';
        for (n in data.listName){
            if (data.listName[n] != 'countryListboxRegisterPage'){
                await page.locator(`input[name="${data.listName[n]}"]`).fill(data.listVal[n]);
                dataVals += data.listVal[n] + ', '
            }
            if (data.listName[n] == 'countryListboxRegisterPage') {
                await page.locator('text=CountryCountry').click();
                await page.selectOption('select[name="countryListboxRegisterPage"]', { label: 'Canada' });
            }
        }
        console.log('>>> User data:', dataVals)

           
        await page.locator('input[name="i_agree"]').check();

        await Promise.all([
            page.waitForNavigation(/*{ url: 'http://advantageonlineshopping.com/#/' }*/),
            page.locator('text=REGISTER').click()
        ]);

        // validate username displayed
        var userLocator = `[aria-label="UserMenu"] >> text=${data.userName}`
        await expect(page.locator(userLocator)).toBeVisible();

        await page.locator(userLocator).click();

        await page.locator('label[role="link"]:has-text("Sign out")').click();

        // aosLogout(page)
    });

    test('Test 02 > New User can login', async ({ page }) => {
        // await page.goto(data.baseUrl)
        await aosLogin(page)
        await aosLogout(page)

    });   

}); 

async function logthis(val) {
    console.log(val);
}   

async function aosLogin(page) {
    // await page.locator('#menuUserLink').click();
    await page.locator('input[name="username"]').fill(data.userName);
    await page.locator('input[name="password"]').fill(data.password);
    await page.locator('#sign_in_btnundefined').click()
    // validate login
    await expect(page.locator(`[aria-label="UserMenu"] >> text=${data.userName}`)).toBeVisible();
}

async function aosLogout(page) {
    var userLocator = `[aria-label="UserMenu"] >> text=${data.userName}`
    await expect(page.locator(userLocator)).toBeVisible();
    await page.locator(userLocator).click();
    await page.locator('label[role="link"]:has-text("Sign out")').click();
}