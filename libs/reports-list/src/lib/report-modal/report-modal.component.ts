import { Component, Inject, Input, OnInit } from '@angular/core';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { VaccinesReport } from '@vacgaps/interfaces';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'vacgaps-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.scss'],
})
export class ReportModalComponent implements OnInit {
  @Input() report: VaccinesReport;

  public rowHeight = '40';

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([Breakpoints.HandsetLandscape, Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        if (result.matches) {
          this.rowHeight = '20';
        } else {
          this.rowHeight = '40';
        }
      });
  }

  get healthCareService(): string {
    return HEALTH_CARE_SERVICES[this.report?.healthCareService];
  }

  get city(): string {
    const city = CITIES[this.report?.city];
    return city ? city.name : '';
  }

  get district(): string {
    const city = CITIES[this.report?.city];
    return city ? city.district : '';
  }

  ngOnInit(): void {}
}
