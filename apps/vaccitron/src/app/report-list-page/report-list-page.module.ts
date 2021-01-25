import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportListPageComponent } from './report-list-page.component';
import { FilterFormModule } from '@vacgaps/filter-form';
import { ReportsListModule } from '@vacgaps/reports-list';
import { VaccinesReportsService } from '@vacgaps/vaccines-reporter';
import { HttpClientModule } from '@angular/common/http';
import { LoginModalModule } from '@vacgaps/login-modal';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const routes: Routes = [{ path: '', component: ReportListPageComponent }];

@NgModule({
  providers: [VaccinesReportsService],
  declarations: [ReportListPageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FilterFormModule,
    ReportsListModule,
    LoginModalModule,
    MatProgressSpinnerModule
  ],
})
export class ReportListPageModule {}
