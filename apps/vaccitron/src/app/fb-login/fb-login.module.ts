import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FbLoginComponent } from './fb-login/fb-login.component';



@NgModule({
  declarations: [FbLoginComponent],
  exports: [FbLoginComponent],
  imports: [
    CommonModule
  ]
})
export class FbLoginModule { }
