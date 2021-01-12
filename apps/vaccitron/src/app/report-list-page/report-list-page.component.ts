import { Component, Input, OnInit } from '@angular/core';
import { NotificationsFilter, VaccinesReport } from '@vacgaps/interfaces';

@Component({
  selector: 'vacgaps-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.css'],
})
export class ReportListPageComponent implements OnInit {
  @Input()
  reportsList: VaccinesReport[] = [
    {
      city: '10',
      healthCareService: '1',
      address: 'שרה אמנו 39'
    },
    {
      city: '1001',
      healthCareService: '2',
      address: 'שרה אמנו 39'
    },
    {
      city: '530',
      healthCareService: '0',
      address: 'שרה אמנו 39'
    },
    {
      city: '2379',
      healthCareService: '3',
      address: 'שרה אמנו 39'
    },
    {
      city: '110',
      healthCareService: '1',
      address: 'שרה אמנו 39'
    }
  ];

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
      && (!notificationsFilter.cities?.length || notificationsFilter.cities.includes(report.city))
      // TODO::add the time filter according to how it is supposed to be sent from the server (don't forget to update the interface)
    });
  }
}
