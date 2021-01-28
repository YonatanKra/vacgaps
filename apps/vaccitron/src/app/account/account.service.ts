import { EventEmitter, Injectable, Output } from '@angular/core';

import { FbLogin, UserDetails } from '@vacgaps/fb-login';
import { environment } from '../../environments/environment';

const fbLogin = new FbLogin({ fbAppId: environment.facebookAppId });

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userDetails: UserDetails;

  @Output()
  loggedInStatusChanged = new EventEmitter<{
    event: string,
    payload: { loggedIn: boolean }
  }>();

  get loggedIn() {
    return !!this.userDetails;
  }

  constructor() {
    fbLogin.loggedInPromise.then(() => {
      this.userDetails = fbLogin.userDetails;
      this.loggedInStatusChanged.emit({
        event: 'loggedInStatusChanged',
        payload: { loggedIn: this.loggedIn },
      });
    });
  }

  async login() {
    this.userDetails = await fbLogin.login();
  }
}
