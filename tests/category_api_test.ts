Feature('category api')

Scenario('add category', async ({ I }) => {
  const loginResponse = await I.sendPostRequest('/signin', {
    email: 'hashir@gmail.com',
    password: 'HASHIR12345',
  });
  I.amBearerAuthenticated(secret(loginResponse.data.token));
  const response = await I.sendPostRequest('/category/add-category', {
    email: 'hashir@gmail.com',
    name: 'category 1',
    image: 'img.png',
  });
  I.seeResponseCodeIsSuccessful();
})
