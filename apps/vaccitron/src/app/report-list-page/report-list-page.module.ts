import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReportListPageComponent } from './report-list-page.component';


const routes: Routes = [
  { path: '', component: ReportListPageComponent }
];

@NgModule({
  declarations: [ReportListPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ReportListPageModule { }
