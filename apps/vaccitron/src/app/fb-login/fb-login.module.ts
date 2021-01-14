import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { SocialLoginModule } from 'angularx-social-login';
import { MatButtonModule } from '@angular/material/button';
import { SocialAuthServiceConfigService } from './fb-login/config/social-auth-service-config.service';

@NgModule({
  declarations: [FbLoginComponent],
  exports: [FbLoginComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    MatButtonModule
  ],
  providers: [
    Location,
    {
      provide: 'SocialAuthServiceConfig',
      useClass: SocialAuthServiceConfigService
    }
  ]
})

export class FbLoginModule {

}
