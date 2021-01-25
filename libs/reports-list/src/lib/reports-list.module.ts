import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReportsListItemComponent } from './reports-list-item/reports-list-item.component';
import { MatCardModule } from '@angular/material/card';
import { ReportModalComponent } from './report-modal/report-modal.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    ScrollingModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
    MatFormFieldModule
  ],
  declarations: [
    ReportsListComponent,
    ReportsListItemComponent,
    ReportModalComponent,
  ],
  exports: [ReportsListComponent],
  bootstrap: [ReportsListComponent],
})
export class ReportsListModule {}
