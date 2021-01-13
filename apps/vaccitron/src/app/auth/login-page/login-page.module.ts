import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import { FbLoginModule } from '../fb-login/fb-login.module';

const routes: Routes = [{ path: '', component: LoginPageComponent }];

@NgModule({
  declarations: [LoginPageComponent],
  imports: [CommonModule, FbLoginModule, RouterModule.forChild(routes)],
})
export class LoginPageModule {}
