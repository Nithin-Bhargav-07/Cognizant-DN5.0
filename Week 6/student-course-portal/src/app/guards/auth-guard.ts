import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = false;
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  } else {
    alert('Access Denied: Please log in first!');
    router.navigate(['/']);
    return false;
  }
};