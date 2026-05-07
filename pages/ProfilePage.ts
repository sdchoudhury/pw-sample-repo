import { Page, expect } from '@playwright/test';

export class ProfilePage {
  constructor(private page: Page) {}

  validateSuccessfulLoginMsg() {
    return this.page.getByRole('heading', { name: 'Login Successful' });
  }

}