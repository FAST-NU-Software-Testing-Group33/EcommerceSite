Feature('login');

/*
Scenario: User does not provide correct login credentials
Given: The user is on the login page
When: User enters email and password incorrectly
And: User clicks login button
Then: An error message should be displayed
*/

Scenario('incorrect credentials', ({ I, homePage }) => {
	homePage.OpenAccountDialog();
	homePage.Login('doesnotexist@gmail.com', 'doesnotexist12345');
	I.see("Invalid email or password");
});
