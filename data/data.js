// data.js
var Chance = require('chance');
var chance = new Chance(); //npm i chance

const hr = '--------------~*~------------\n';
const app = 'Advantage Online Shopping'
const baseUrl = 'https://advantageonlineshopping.com/#/'
const homePageTitle = '\xa0Advantage Shopping'
const newAccountPageUrl = baseUrl + 'register'
const newAccountPageTitle = 'CREATE NEW ACCOUNT'

// --------------------------------- new user data ---------------------------------------

const fullName = chance.name();
var fName = fullName.split(' ').shift();
var lName = fullName.split(' ').pop();
var userName = (fullName.substring(0, 13) + chance.integer({ min: 11, max: 99 })).toLowerCase().replace(' ', '')
var password = 'Pass1'
var freeDomain = chance.pickone(['alpha.com', 'bravo.net', 'charlie.org', 'delta.biz', 'echo.ca','gmail.com', 'yahoo.com', 'hotmail.com'])
var userEmail = `${userName}@${freeDomain}`
var phoneNum = chance.phone()
var streetAddress = chance.address()
var userCountry = 'Canada'
var userCity = chance.city()
var postalCode = chance.postal()
var province = chance.province({country: 'ca', full: false})

var listName = ['usernameRegisterPage', 'emailRegisterPage', 'passwordRegisterPage', 'confirm_passwordRegisterPage',
             'first_nameRegisterPage', 'last_nameRegisterPage', 'phone_numberRegisterPage', 'countryListboxRegisterPage',
             'cityRegisterPage', 'addressRegisterPage', 'state_\\/_province_\\/_regionRegisterPage',
             'postal_codeRegisterPage']

var listVal = [userName, userEmail, password, password, fName, lName, phoneNum, userCountry, userCity, streetAddress, province, postalCode]

// -------------------------------------------------------------------------------------------
  module.exports = 
  {
    hr,
    app, 
    baseUrl,
    homePageTitle, 
    newAccountPageUrl, 
    newAccountPageTitle, 
    fullName, 
    fName, 
    lName, 
    userName,
    password,
    userEmail, 
    phoneNum, 
    streetAddress, 
    userCountry,
    userCity,
    postalCode, 
    province,
    listName,
    listVal
};
// -------------------------------------------------------------------------------------------



