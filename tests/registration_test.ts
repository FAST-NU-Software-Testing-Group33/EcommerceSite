Feature('registration');

/*
Scenario: User's password does not match for registration
Given: The user is on the sign up page
When: User enters a new password
And: User enters a different password in "Retype Password" field
And: User clicks register button
Then: An error message should be displayed
*/

Scenario('password mismatch', ({ I }) => {
	I.amOnPage('/');
	I.click('Account');
	I.click('CreateAnAccount');
	I.fillField('#name', 'Hashir');
	I.fillField('#email', 'hashir@gmail.com');
	I.fillField('#password', 'hashir12345');
	I.fillField('#cPassword', 'HASHIR12345');
	I.click('Register');
	I.see("Password doesn't match");
});

/*
Scenario: User does not provide correct email for registration
Given: The user is on the sign up page
When: User enters an incorrect email format
And: User clicks register button
Then: An error message should be displayed
*/

Scenario('incorrect email', ({ I }) => {
	I.amOnPage('/');
	I.click('Account');
	I.click('CreateAnAccount');
	I.fillField('#name', 'Hashir');
	I.fillField('#email', 'hashir@gmail');
	I.fillField('#password', 'hashir12345');
	I.fillField('#cPassword', 'hashir12345');
	I.click('Register');
	I.see("Email is not valid");
});