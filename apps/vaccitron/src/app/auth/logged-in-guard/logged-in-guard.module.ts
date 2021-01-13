import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoggedInGuard } from './logged-in-guard';
import { FbLoginComponent } from '../fb-login/fb-login/fb-login.component';

@NgModule({
  declarations: [LoggedInGuard],
  exports: [LoggedInGuard],
  imports: [
    CommonModule,
    FbLoginComponent
  ]
})

export class LoggedInGuardModule {

}
