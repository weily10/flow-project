import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard = () => {
  const router = inject(Router);
  const isLoggedIn = !!localStorage.getItem('token'); // Simple check

  return isLoggedIn ? true : router.parseUrl('/login');
};
