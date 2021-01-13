import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FbLoginComponent],
  exports: [FbLoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    MatButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: true,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('416321649791285')
          }
        ]
      } as SocialAuthServiceConfig
    }
  ]
})

export class FbLoginModule {

}
