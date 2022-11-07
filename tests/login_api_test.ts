Feature('login api')

Scenario('login', async ({ I }) => {
  const response = await I.sendPostRequest('/signin', {
    email: 'hashir@gmail.com',
    password: 'HASHIR12345',
  });
  I.seeResponseCodeIsSuccessful();
})