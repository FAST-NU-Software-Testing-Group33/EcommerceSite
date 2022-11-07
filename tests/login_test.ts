Feature('login');

/*
Scenario: User does not provide correct login credentials
Given: The user is on the login page
When: User enters email and password incorrectly
And: User clicks login button
Then: An error message should be displayed
*/

Scenario('incorrect credentials', ({ I }) => {
	I.amOnPage('/');
	I.click('Account');
	I.click('Login');
	I.fillField('#name', 'doesnotexist@gmail.com');
	I.fillField('#password', 'doesnotexist12345');
	I.click('Login');
	I.see("Invalid email or password");
});
