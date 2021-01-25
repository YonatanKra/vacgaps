import { Injectable } from '@angular/core';

import { FbLogin, UserDetails } from '@vacgaps/fb-login';
import { environment } from '../../environments/environment';

const fbLogin = new FbLogin({ fbAppId: environment.facebookAppId });

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  userDetails: UserDetails;

  get loggedIn() {
    return !!this.userDetails;
  }

  constructor() {}

  async login() {
    return (this.userDetails = await fbLogin.login());
  }
}
