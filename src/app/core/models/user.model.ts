export interface User {
  email: string;
  password: string;
  // Add any other user properties you need
}

export interface RegistrationData {
  email: string;
  role: string;
  password: string;
  confirmPassword: string;
}
