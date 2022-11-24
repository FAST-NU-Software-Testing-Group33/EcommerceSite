const { I } = inject();

module.exports = {

  locators: {
    accountButton: 'div[title=Account]',
    loginButton: 'div[title=Login]',
    createAcountButton: 'div[title=CreateAnAccount]',
    registerButton: 'div[title=Register]',
    nameField: '#name',
    passwordField: '#password',
    confirmPasswordField: '#cPassword',
    emailField: '#email',
  },

  OpenAccountDialog()
  {
    I.amOnPage('/');
	  I.click(this.locators.accountButton);
  },

  Login(username, passoword)
  {
    I.click(this.locators.loginButton);
	  I.fillField(this.locators.nameField, username);
	  I.fillField(this.locators.passwordField, passoword);
	  I.click(this.locators.loginButton);
  },

  CreateAccount(name, email, passoword, cPassowrd)
  {
    I.click(this.locators.createAcountButton);
	  I.fillField(this.locators.nameField, name);
	  I.fillField(this.locators.emailField, email);
	  I.fillField(this.locators.passwordField, passoword);
	  I.fillField(this.locators.confirmPasswordField, cPassowrd);
	  I.click(this.locators.registerButton);
  }
}
