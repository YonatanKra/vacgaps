import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { FbLoginComponent } from '../fb-login/fb-login/fb-login.component';

@Injectable()
export class LoggedInGuard implements CanActivate {
  
  constructor(private fbLoginComponent: FbLoginComponent, public router: Router) {}
  
  canActivate(): boolean {
    if (!this.fbLoginComponent.isLoggedIn) {
      this.router.navigate(['login-page']);
      return false;
    }

    return true;
  }

}