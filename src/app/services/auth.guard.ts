import { inject } from '@angular/core';
import {
  CanActivateFn, CanMatchFn, Router,
  CanActivateChildFn,
  UrlTree
} from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanMatchFn|CanActivateFn|CanActivateChildFn = async () => {
  const authState = inject(AuthService); 
  const router = inject(Router); 
   const {data, error} = await authState.get().auth.getSession();
if(data.session!=null){
  return true;
}else{
  return router.parseUrl('/signin');;
}
};