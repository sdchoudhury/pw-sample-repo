/**
 * Test Data - Centralized data management
 * Keep all test data here; never hardcode in spec files
 */

export const USERS = {
  validUser: {
    username: 'qa_testers@qabrains.com',
    password: 'Password123',
  },
  invalidUser: {
    username: 'invalid@qabrains.com',
    password: 'WrongPassword123',
  },
  emptyCredentials: {
    username: '',
    password: '',
  },
  sqlInjectionUser: {
    username: "' OR 1=1 --",
    password: "' OR 1=1 --",
  },
};

export const REGISTRATION_DATA = {
  validUser: {
    firstName: 'Rahul',
    lastName: 'Sharma',
    email: `testuser_${Date.now()}@test.com`, // unique each run
    password: 'SecurePass@123',
    confirmPassword: 'SecurePass@123',
    phone: '9876543210',
    gender: 'male',
    acceptTerms: true,
  },
  passwordMismatch: {
    firstName: 'Test',
    lastName: 'User',
    email: `mismatch_${Date.now()}@test.com`,
    password: 'SecurePass@123',
    confirmPassword: 'DifferentPass@456',
    acceptTerms: true,
  },
  invalidEmail: {
    firstName: 'Test',
    lastName: 'User',
    email: 'not-an-email',
    password: 'SecurePass@123',
    confirmPassword: 'SecurePass@123',
    acceptTerms: true,
  },
};

export const FORM_DATA = {
  validSubmission: {
    fullName: 'Priya Nair',
    email: 'priya.nair@example.com',
    phone: '9123456789',
    country: 'IN',
    subject: 'Test Automation Practice',
    message: 'This is a sample message submitted via Playwright automation.',
    gender: 'female' as const,
    newsletter: true,
    acceptTerms: true,
  },
  minimalSubmission: {
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    message: 'Minimal form submission test.',
  },
};

export const URLS = {
  base: 'https://practice.qabrains.com',
  login: '/login',
  register: '/register',
  form: '/form',
  dashboard: '/dashboard',
  forgotPassword: '/forgot-password',
};

export const ERROR_MESSAGES = {
  invalidCredentials: 'Invalid credentials',
  requiredField: 'required',
  passwordMismatch: 'Passwords do not match',
  invalidEmail: 'valid email',
};
