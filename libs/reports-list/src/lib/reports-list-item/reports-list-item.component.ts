import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
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

  @Output()
  comingReportEvent = new EventEmitter<VaccinesReport>();

  constructor() {}

  get healthCareService(): string {
    return HEALTH_CARE_SERVICES[this.reportItem?.healthCareService];
  }

  get cityName(): string {
    return CITIES[this.reportItem?.city]?.name;
  }

  comingReport($event) {
    $event.stopPropagation();
    this.comingReportEvent.emit(this.reportItem);
  }

  ngOnInit(): void {}
}
