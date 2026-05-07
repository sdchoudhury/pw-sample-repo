/// &lt;reference types="node" /&gt;

import { defineConfig } from '@playwright/test';
import { baseURL } from './config/env';

export default defineConfig({
  testDir: './tests',

  retries: 2,
  workers: 3,

  use: {
    baseURL: baseURL,
    headless: false,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry'
  },

  reporter: [
    ['html'],
    ['allure-playwright']
  ]
});