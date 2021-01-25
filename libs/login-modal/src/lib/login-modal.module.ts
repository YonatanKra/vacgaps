import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [CommonModule, MatGridListModule, MatFormFieldModule, MatIconModule, MatDialogModule, MatButtonModule],
  declarations: [LoginModalComponent],
  exports: [LoginModalComponent]
})
export class LoginModalModule {}
