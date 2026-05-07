const ENV = process.env.ENV || 'qa';

const baseURLs: Record<string, string> = {
  qa: 'https://practice.qabrains.com/',
  stage: 'https://stage.qabrains.com',
  dev: 'https://dev.qabrains.com'
};

if (!baseURLs[ENV]) {
  throw new Error(`Invalid ENV: ${ENV}`);
}

export const baseURL = baseURLs[ENV]; // ✅ ADD THIS

export const config = {
  use: {
    baseURL,
  }
};