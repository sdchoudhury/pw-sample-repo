import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async login(email: string, password: string) {
    await this.page.getByPlaceholder("eg. user@user.com").fill(email);
    await this.page.getByPlaceholder('*******').fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  getErrorMessage() {

    return this.page.getByText('Your email and password both are invalid!');
  }

}