Feature('registration');

/*
Scenario: User's password does not match for registration
Given: The user is on the sign up page
When: User enters a new password
And: User enters a different password in "Retype Password" field
And: User clicks register button
Then: An error message should be displayed
*/

Scenario('password mismatch', ({ I, homePage }) => {
	homePage.OpenAccountDialog();
	homePage.CreateAccount('Hashir', 'hashir@gmail.com', 'hashir12345', 'HASHIR12345');
	I.see("Password doesn't match");
});

/*
Scenario: User does not provide correct email for registration
Given: The user is on the sign up page
When: User enters an incorrect email format
And: User clicks register button
Then: An error message should be displayed
*/

Scenario('incorrect email', ({ I, homePage }) => {
	homePage.OpenAccountDialog();
	homePage.CreateAccount('Hashir', 'hashir@gmail', 'hashir12345', 'hashir12345');
	I.see("Email is not valid");
});