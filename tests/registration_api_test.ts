Feature('registration api')

Scenario('register', async ({ I }) => {
  const response = await I.sendPostRequest('/signup', {
    name: 'Hashir',
    email: 'hashir@gmail.com',
    password: 'HASHIR12345',
    cPassword: 'HASHIR12345',
  });
  I.seeResponseCodeIsSuccessful();
})