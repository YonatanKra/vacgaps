import { Injectable } from '@angular/core';
import { FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthServiceConfigService implements SocialAuthServiceConfig{

  constructor() { }

  autoLogin = true;
  providers = [{ id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider('416321649791285') }];
}
