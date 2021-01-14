import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsListComponent } from './reports-list/reports-list.component';
import { MatListModule } from '@angular/material/list';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { ReportsListItemComponent } from './reports-list-item/reports-list-item.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, MatListModule, ScrollingModule, MatCardModule],
  declarations: [ReportsListComponent, ReportsListItemComponent],
  exports: [ReportsListComponent],
})
export class ReportsListModule {}
