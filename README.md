# cypress-automation-project
This project is a hands-on practice framework using Cypress for end-to-end testing of a sample web application.

## General Requirements

### Dependencies

1. Make sure you have [NodeJs](https://nodejs.org/en/) installed on your system.

### Dev Install

* Install all dependencies

```bash
npm install
```

### How To Use Cypress

The following commands can be used in order to run the test cases

**Open Cypress Test Runnner**

 Use the command:

```bash
npx cypress open
```

or the custom command

```bash
npm run cy:open
```

**Run Electron Headless**

 Use the command:

```bash
npx cypress run
```

or the custom command
```bash
npm run cy:electron
```

**Run Chrome Headless**

 Use the command:

```bash
npx cypress run --browser chrome
```

or the custom command
```bash
npm run cy:chrome
```

**Run ESLint**

Use the command to check for any JavaScript issues:

```bash
npm run lint-check
```

Use the command to fix for any JavaScript issues:

```bash
npm run lint-fix
```

**Remove test report files**

Use the command:

```bash
npm run pretest
```

#### Writing tests

##### Test Structure
* `it()`: It is used to define an specific test case.
* `describe()`: It is used to group some test cases that are related to an specific feature or behavior.
* `context()`: It is used to group all the test cases of an specific E2E or file.

For any additional info on how to write tests, read [this article](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests) from Cypress.

##### POM pattern
Add proerties to the constructor of the Page Object class to call them on the methods, for example:


```javascript 
export default class LoginPage {
  constructor() {
    this.usernameInput = '#user-name'
    this.passwordInput = '#password'
    this.loginButton = '#login-button'
  }
}
```

Write methods on the Page Object class to call them on the test, for example:


```javascript 
  usernameInput() {
    return cy.get(this.usernameInput);
  }

  passwordInput() {
    return cy.get(this.passwordInput);
  }

  loginButton() {
    return cy.get(this.loginButton);
  }

  login(username, password) {
    this.usernameInput().type(username);
    this.passwordInput().type(password);
    this.loginButton().click();
}
```

Than call them from the it() step on your feature scenario (*describe()*) for cleaner code:

```javascript
 it('Login', () => {
    cy.login(this.data.username, this.data.password);
   
  });
```

##### Cypress Custom Commands

In Cypress is possible to create [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands) to be used in the test. To create or edit a custom command, go to `support/commands.js` and add the code. E.g:

```javascript 
Cypress.Commands.add('search', (word) => {
    searchBar().type(word).type('{enter}');
  });
```

### Engineering Standards

There are standards established for  Test Automation. Here's a list that of some standards that we should follow for all our automation work:

* [Basics](https://docs.cypress.io/guides/references/best-practices)
* [Coding Standards](https://betterprogramming.pub/8-best-practices-for-future-proofing-your-typescript-code-2600fb7d8063)
* [Git and PR Standards](https://sourcelevel.io/blog/7-git-best-practices-to-start-using-in-your-next-commit)
* [Git Guide](https://git-scm.com/docs/gittutorial)
* [Design Pattern](https://www.toolsqa.com/cypress/page-object-pattern-in-cypress/)

### Formatting

* Use semicolons.
* Use const for declaring elements.
* No more than 150 characters on a single line.
* No trailing white spaces.
* Opening braces go on the same line.
* Use single quotes.
* Do not use var for declaring variables.
* Declare one variable per let statement.
* Do not comment out unused code. Remove it if is not needed / used.
* For single line comments, use `// This is a comment`.
* For Multiline comments, use: 

```typescript
/* 
This is 
a multiline
comment 
*/
```

* For import statements, if the statement has more than 3 functions, add the next function on a new line per line. See the syntax below on how we should handle the import for single and multiple functions.
```javascript
// Example
import { clickBackButton, clickNextButton, closeAndSaveButton, } from '../url';

import { 
  clickBackButton, 
  clickNextButton, 
  closeAndSaveButton,
  checkQuoteReviewPage,
} from '../url';
```
### Naming Conventions

* Use `lowerCamelCase` for _variables_, _properties_, _functions_ and _constants_ names.
* Use `PascalCase` for class files