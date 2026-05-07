export function generateUser() {
  const timestamp = Date.now();
  return {
    username: `user_${timestamp}`,
    email: `user_${timestamp}@mail.com`,
    password: `Test@1234`,
    confirmPassword: `Test@1234`
  };
}