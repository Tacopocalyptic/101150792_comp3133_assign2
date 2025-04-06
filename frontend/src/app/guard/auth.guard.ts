import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  // const router = inject(Router)
  // const platformID = inject(PLATFORM_ID)
  
  // if(isPlatformBrowser(platformID)){
  //   console.log("PLATFORM IS BROWSER")

  //   const token = localStorage.getItem('token')
  //   if(!!token){
  //     // TODO - token authentication/refresh with backend
  //     return true
  //   } else {
  //     router.navigateByUrl('login')
  //     // return false
  //     return true
  //   }
  // }
  // console.log("PLATFORM IS NOT BROWSER")

  return true;
};
