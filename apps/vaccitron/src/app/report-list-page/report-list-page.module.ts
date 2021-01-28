import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ErrorDialog, ReportListPageComponent } from './report-list-page.component';
import { FilterFormModule } from '@vacgaps/filter-form';
import { ReportsListModule } from '@vacgaps/reports-list';
import { VaccinesReportsService } from '@vacgaps/vaccines-reporter';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginModalModule } from '@vacgaps/login-modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TokenInterceptorService } from '../http-interceptors/token-interceptor.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [{ path: '', component: ReportListPageComponent }];

@NgModule({
  providers: [
    VaccinesReportsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  declarations: [ReportListPageComponent, ErrorDialog],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FilterFormModule,
    ReportsListModule,
    LoginModalModule,
    MatGridListModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
})
export class ReportListPageModule {}
