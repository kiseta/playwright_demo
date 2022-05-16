# Playwright Demo Project

Playwright Test Automation framework with JavaScript Demo
- Test Login feature on [Guestbook Demo App](https://https://testautomationpro.com/aut//)

## Prerequisites

You will need the following installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)


## Installation

* `git clone <repository-url>` this repository
* `cd playwright-demo`
* `npm install`

### to run Playwright test (runs headless by default)
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