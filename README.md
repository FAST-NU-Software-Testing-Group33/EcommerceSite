# Project Demo
[![Alt text](https://img.youtube.com/vi/lXk14qt2D28/0.jpg)](https://www.youtube.com/watch?v=lXk14qt2D28)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

NPM / Yarn and Node.js installed

### Installing

Installing NPM modules on both client and server folders

Execute these commands from the project directory

```
cd client && npm install
```

```
cd server && npm install
```

### Running the app

Open a terminal on server directory

```
npm run start:dev
```

and open another terminal on client directory
```
npm run start
```

Access the web app at http://localhost:3000/

### Testing the app

The project uses [Codeceptjs](https://codecept.io/) test framework for UI and API testing.

You need to install the project first using:

```
npm install codeceptjs
```

To run the tests, go to the root directory of the project and run:

```
npx codeceptjs run
```

### About Codeceptjs

Codeceptjs is based on [Mocha](https://mochajs.org/) testing framework. It is designed for scenario driven acceptance testing in BDD-style. The framework provides many features like Smart locators: use names, labels, matching text, CSS or XPath to locate elements, Interactive debugging shell: pause test at any point and try different commands in a browser and, Easily create tests, pageobjects, stepobjects with CLI generators.

## Usage

All actions are performed by I object; assertions functions start with `see` function.
In this examples all methods of `I` are taken from WebDriver helper, see [reference](https://github.com/codeceptjs/CodeceptJS/blob/master/docs/helpers/WebDriver.md) to learn how to use them.

Let's execute this test with `run` command. Additional option `--steps` will show us the running process. We recommend use `--steps` or `--debug` during development.

```sh
npx codeceptjs run --steps
```

This will produce an output:

```sh
CodeceptJS Demonstration --
 test some forms
 • I am on page "http://simple-form-bootstrap.plataformatec.com.br/documentation"
 • I fill field "Email", "hello@world.com"
 • I fill field "Password", "****"
 • I check option "Active"
 • I check option "Male"
 • I click "Create User"
 • I see "User is valid"
 • I dont see in current url "/documentation"
 ✓ OK in 17752ms
```

CodeceptJS has an ultimate feature to help you develop and debug your test.
You can **pause execution of test in any place and use interactive shell** to try different actions and locators.
Just add `pause()` call at any place in a test and run it.

Interactive shell can be started outside test context by running:

```sh
npx codeceptjs shell
```

### Actions

The form is filled with `fillField` methods, which locates form elements by their label.
The same way you can locate element by name, `CSS` or `XPath` locators in tests:

```js
// by name
I.fillField('user_basic[email]', 'hello@world.com');
// by CSS
I.fillField('#user_basic_email', 'hello@world.com');
// don't make us guess locator type, specify it
I.fillField({css: '#user_basic_email'}, 'hello@world.com');
```

Other methods like `checkOption`, and `click` work in a similar manner. They can take labels or CSS or XPath locators to find elements to interact.

### Assertions

Assertions start with `see` or `dontSee` prefix. In the case below, we are asserting that string 'User is valid' is somewhere in a webpage.
However, we can narrow the search to particular element by providing a second parameter:

```js
I.see('User is valid');
// better to specify context:
I.see('User is valid', '.alert-success');
```

In this case 'User is valid' string will be searched only inside elements located by CSS `.alert-success`.

### Grabbers

In case you need to return a value from a webpage and use it directly in test, you should use methods with `grab` prefix.
They are expected to be used inside async/await functions, and their results will be available in test:

```js
const assert = require('assert');

Feature('CodeceptJS Demonstration');

Scenario('test page title', async ({ I }) => {
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
  const title = await I.grabTitle();
  assert.equal(title, 'Example application with SimpleForm and Twitter Bootstrap');
});
```

The same way you can grab text, attributes, or form values and use them in next test steps.

### Before/After

Common preparation steps like opening a web page, logging in a user, can be placed in `Before` or `Background`:

```js
const { I } = inject();

Feature('CodeceptJS Demonstration');

Before(() => { // or Background
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
});

Scenario('test some forms', () => {
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});

Scenario('test title', () => {
  I.seeInTitle('Example application');
});
```

## PageObjects

CodeceptJS provides the most simple way to create and use page objects in your test.
You can create one by running

```sh
npx codeceptjs generate pageobject
```

It will create a page object file for you and add it to the config.
Let's assume we created one named `docsPage`:

```js
const { I } = inject();

module.exports = {
  fields: {
    email: '#user_basic_email',
    password: '#user_basic_password'
  },
  submitButton: {css: '#new_user_basic input[type=submit]'},

  sendForm(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.submitButton);
  }
}
```

You can easily inject it to test by providing its name in test arguments:

```js
Feature('CodeceptJS Demonstration');

Before(({ I }) => { // or Background
  I.amOnPage('http://simple-form-bootstrap.plataformatec.com.br/documentation');
});

Scenario('test some forms', ({ I, docsPage }) => {
  docsPage.sendForm('hello@world.com','123456');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');
});
```

When using Typescript, replace `module.exports` with `export` for autocompletion.
