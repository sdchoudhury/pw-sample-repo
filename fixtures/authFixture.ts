import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { ProfilePage } from '../pages/ProfilePage';
import { generateUser } from '../utils/dataGenerator';

type Fixtures = {
  loginPage: LoginPage;
  registerPage: RegisterPage;
  profilePage: ProfilePage;
  user : ReturnType<typeof generateUser>;
};

export const test = base.extend<Fixtures>({
    
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  registerPage: async ({ page }, use) => {
    await use(new RegisterPage(page));
  },

  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },

    user : async ({}, use) => {
    const user = generateUser();
    await use(user);
  }
});