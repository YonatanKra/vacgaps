import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReportsListItemComponent } from './reports-list-item/reports-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [CommonModule, MatListModule, ScrollingModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatGridListModule],
  declarations: [ReportsListComponent, ReportsListItemComponent, ReportModalComponent],
  exports: [ReportsListComponent],
  bootstrap: [ReportsListComponent]
})
export class ReportsListModule {}
