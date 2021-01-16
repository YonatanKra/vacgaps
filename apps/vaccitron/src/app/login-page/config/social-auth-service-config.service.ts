import { Injectable } from '@angular/core';
import { SocialAuthServiceConfig } from 'angularx-social-login';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SocialAuthServiceConfigService implements SocialAuthServiceConfig{

  constructor() { }

  autoLogin = true;
  providers = environment.loginProviderConfig;
}
