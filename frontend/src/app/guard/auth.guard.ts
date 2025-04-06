import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token')
  const router = inject(Router)

  if(!!token){
    // TODO - token authentication/refresh with backend
    return true
  } else {
    // temporarily leaving this open
    // router.navigateByUrl('login')
    // return false
    return true;
  }
};
