import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { MatCardModule } from '@angular/material/card';
import { FbLoginComponent } from './fb-login/fb-login.component';
import { SocialLoginModule } from 'angularx-social-login';
import { MatButtonModule } from '@angular/material/button';
import { FbAuthService } from './fb-login/fb-auth/fb-auth.service';
import { SocialAuthServiceConfigService } from './config/social-auth-service-config.service';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent, FbLoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  providers: [
    FbAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useClass: SocialAuthServiceConfigService
    }
  ]
})
export class LoginPageModule {}
