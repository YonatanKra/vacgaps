import { Component, Input, OnInit } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';

@Component({
  selector: 'vacgaps-reports-list-item',
  templateUrl: './reports-list-item.component.html',
  styleUrls: ['./reports-list-item.component.scss'],
})
export class ReportsListItemComponent implements OnInit {
  @Input()
  reportItem: VaccinesReport;

  constructor() {}

  get healthCareService(): string {
    return HEALTH_CARE_SERVICES[this.reportItem?.healthCareService];
  }

  get city(): string {
    return CITIES[this.reportItem?.city];
  }

  ngOnInit(): void {}
}
