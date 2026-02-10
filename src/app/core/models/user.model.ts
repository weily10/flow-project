export interface User {
  email: string;
  password: string;
  // Add any other user properties you need
}

export interface RegistrationData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
