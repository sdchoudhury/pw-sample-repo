import { request } from '@playwright/test';
import { baseURL } from './env';

export async function getProfile(token: string) {
  const apiContext = await request.newContext({
    baseURL,
    extraHTTPHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  const response = await apiContext.get('/api/user/profile');
  return response.json();
}