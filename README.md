# Playwright Demo Project

Playwright Automated Testing Tool Demo, GitHub Actions used to run the tests on push
- Testing Login functionality on [Guestbook Demo App](https://testautomationpro.com/aut/) => tests/guestbook.spec.js
- Testing New User Registration, Logout, Login functionality on [Advantage Online Shopping App](https://advantageonlineshopping.com/) => tests/aos.spec.js

## Prerequisites

You will need the following installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)


## Installation

* `git clone <repository-url>` this repository
* `cd playwright-demo`
* `npm install`

## Running Playwright tests (runs headless by default)
```
npx playwright test
```
or headed
```
npx playwright test --headed
```
or headed with nicely formatted html report
```
npx playwright test --headed --reporter=html
```
on specific browser
```
npx playwright test --browser=firefox
```
on all browsers
```
npx playwright test --browser=all
```

## DEBUGging Playwright tests
to run in DEBUG mode, run the following command in terminal

``` 
$env:PWDEBUG=1
```
then
```
npx playwright test
```
