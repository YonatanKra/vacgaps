import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VaccinesReport } from '@vacgaps/interfaces';
import { registerLocaleData } from '@angular/common';
import localeIL from '@angular/common/locales/en-IL';
import { ReportModalComponent } from '../report-modal/report-modal.component';
registerLocaleData(localeIL, 'il');

@Component({
  selector: 'vacgaps-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  @Input()
  reportsList: VaccinesReport[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(report: VaccinesReport): void {
    const dialogRef = this.dialog.open(ReportModalComponent, {
      width: '250px',
      data: report,
      direction: 'rtl'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
