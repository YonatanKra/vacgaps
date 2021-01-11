import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('416321649791285')
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [FbLoginComponent],
  exports: [FbLoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ]
})
export class FbLoginModule { }
