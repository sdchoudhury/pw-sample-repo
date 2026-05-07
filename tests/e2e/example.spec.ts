import {test, expect} from '@playwright/test';
import { describe } from 'node:test';

describe('Example Test Suite', () => {
  test('Example Test Case', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.waitForURL('https://www.google.com/');
    const title = await page.title();
    await expect(title).toBe('Google');
    console.log('Page title is:', title);
    let timestamp = new Date();
    console.log('Current Time is:', timestamp);
    await page.locator('[name="q"]').fill('Playwright');
    await page.locator('[name="q"]').press('Enter');
    await page.close();

  })
})
