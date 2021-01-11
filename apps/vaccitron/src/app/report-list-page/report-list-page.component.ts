import { Component, OnInit } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';

@Component({
  selector: 'vacgaps-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.css'],
})
export class ReportListPageComponent implements OnInit {
  reportsList: VaccinesReport[] = [
    {
      city: '100',
      healthCareService: '1',
      address: 'שרה אמנו 39',
    },
    {
      city: '1001',
      healthCareService: '2',
      address: 'שרה אמנו 39',
    },
    {
      city: '530',
      healthCareService: '0',
      address: 'שרה אמנו 39',
    },
    {
      city: '2379',
      healthCareService: '3',
      address: 'שרה אמנו 39',
    },
    {
      city: '110',
      healthCareService: '1',
      address: 'שרה אמנו 39',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
