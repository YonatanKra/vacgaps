import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { VaccinesReport } from '@vacgaps/interfaces';

@Component({
  selector: 'vacgaps-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss']
})
export class ReportModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ReportModalComponent>,
    @Inject(MAT_DIALOG_DATA) public report: VaccinesReport) {}

  ngOnInit(): void {
  }

  get healthCareService(): string {
    return HEALTH_CARE_SERVICES[this.report?.healthCareService];
  }

  get city(): string {
    return CITIES[this.report?.city];
  }

}
