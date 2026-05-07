import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async navigate() {
    await this.page.locator('[id="registration"]').click();
  }

  async register(username: string, email: string,   password: string, confirmpassword : string) {
    await this.page.locator('input[name="name"]').fill(username);
    await this.page.locator('select[id="country"]').selectOption({ label: 'Australia' })
    await this.page.locator('select[id="account"]').selectOption({ label: 'Engineer' })
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="password"]').fill(password);
    await this.page.locator('input[name="confirm_password"]').fill(confirmpassword);
    await this.page.click('button[type="submit"]');
  }

successMessage() {
  console.log(this.page.getByRole('heading', { name: 'Registration Successful' }).count());
  return this.page.getByRole('heading', { name: 'Registration Successful' });
}
}