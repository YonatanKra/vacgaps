import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportListPageComponent } from './report-list-page.component';
import { FilterFormModule } from '@vacgaps/filter-form';
import { ReportsListModule } from '@vacgaps/reports-list';
import { FbLoginModule } from '../auth/fb-login/fb-login.module';

const routes: Routes = [{ path: '', component: ReportListPageComponent }];

@NgModule({
  declarations: [ReportListPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FilterFormModule,
    ReportsListModule,
    FbLoginModule,
  ],
})
export class ReportListPageModule {}
