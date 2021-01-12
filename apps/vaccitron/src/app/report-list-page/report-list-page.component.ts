import { Component, Input, OnInit } from '@angular/core';
import { NotificationsFilter, VaccinesReport } from '@vacgaps/interfaces';

@Component({
  selector: 'vacgaps-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.css'],
})
export class ReportListPageComponent implements OnInit {
  @Input()
  reportsList: VaccinesReport[];

  get filteredReportsList(): VaccinesReport[] {
    return this.filterList(this.#currentFilter);
  }

  #currentFilter: NotificationsFilter = { healthCareService: '' };

  updateFilter(newFilter: NotificationsFilter) {
    this.#currentFilter = newFilter;
  }

  constructor() {}

  ngOnInit(): void {}

  filterList(notificationsFilter: NotificationsFilter): VaccinesReport[] {
    return this.reportsList?.filter(report => {
      return (!notificationsFilter.healthCareService || report.healthCareService === notificationsFilter.healthCareService)
      && (!notificationsFilter.cities || notificationsFilter.cities.includes(report.city))
      // TODO::add the time filter according to how it is supposed to be sent from the server (don't forget to update the interface)
    });
  }
}
