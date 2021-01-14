import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FilterFormModule } from '@vacgaps/filter-form';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AuthGuard } from './guards/auth.guard';
import { SocialAuthService } from 'angularx-social-login';
import { SocialAuthServiceConfigService } from './fb-login/fb-login/config/social-auth-service-config.service';

@NgModule({
  declarations: [AppComponent, AppHeaderComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('./report-list-page/report-list-page.module').then(
              (m) => m.ReportListPageModule
            ),
          canActivate: [AuthGuard]
        },
        {
          path: 'login-page',
          loadChildren: () =>
            import('./login-page/login-page.module').then(
              (m) => m.LoginPageModule
            ),
          canActivate: [AuthGuard]
        }
      ],
      { initialNavigation: 'enabled' }
    ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    FilterFormModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    SocialAuthService,
    {
      provide: 'SocialAuthServiceConfig',
      useClass: SocialAuthServiceConfigService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
