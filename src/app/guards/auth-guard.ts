import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const isLoggedIn = localStorage.getItem('motilearn_user');

  if (isLoggedIn) {
    return true;
  }

  router.navigate(['/']);
  return false;
};