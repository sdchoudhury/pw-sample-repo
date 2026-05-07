import { expect } from '@playwright/test';
import { test } from '../../fixtures/authFixture';
import { USERS } from '../../config/testData';


test.describe('User Lifecycle E2E - POM + Fixture', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Should register, login and validate profile', async ({ loginPage, registerPage, profilePage, user }) => {


  // Register
  await registerPage.navigate();
  await registerPage.register(user.username, user.email, user.password, user.confirmPassword);

  await expect(registerPage.successMessage()).toBeVisible();
  await expect(registerPage.successMessage())
    .toHaveText('Registration Successful');

  // Login
  await loginPage.navigate();
  await loginPage.login(USERS.validUser.username, USERS.validUser.password);

  // Token
 // const token = await page.evaluate(() => localStorage.getItem('token'));

  // UI validation
  await expect(profilePage.validateSuccessfulLoginMsg())
  .toBeVisible();
  await expect(profilePage.validateSuccessfulLoginMsg())
  .toHaveText('Login Successful');

});

  test('Verify no login with invalid credentials', async ({ loginPage }) => {
     

      // Login with invalid credential
      await loginPage.navigate();
      await loginPage.login(USERS.invalidUser.username, USERS.invalidUser.password);
      await expect(loginPage.getErrorMessage())
                .toBeVisible();
      await expect(loginPage.getErrorMessage())
              .toContainText(/invalid/i);
    
  })

});