import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportListPageComponent } from './report-list-page.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { NotificationsFilter, VaccinesReport } from '@vacgaps/interfaces';
import { By } from '@angular/platform-browser';
import { FilterFormModule } from '@vacgaps/filter-form';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { VaccinesReportsService } from '@vacgaps/vaccines-reporter';
import { HttpClientTestingModule } from '@angular/common/http/testing';

const MOCK_REPORTS = require('../../assets/demo-data.json');

@Component({
  selector: 'test-component',
  template: `<vacgaps-report-list-page
    [reportsList]="reportsList"
  ></vacgaps-report-list-page>`,
})
class TestComponent {
  reportsList: VaccinesReport[] = MOCK_REPORTS;

}
describe('ReportListPageComponent', () => {
  let component: ReportListPageComponent;
  let fixture: ComponentFixture<ReportListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [VaccinesReportsService],
      imports: [FilterFormModule, NoopAnimationsModule, HttpClientTestingModule],
      declarations: [ReportListPageComponent, TestComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`integrations`, function() {
    let parentFixture: ComponentFixture<TestComponent>,
      parentComponent: TestComponent,
      reportListComponent: ReportListPageComponent;

    beforeEach(function () {
      parentFixture = TestBed.createComponent(TestComponent);
      parentComponent = parentFixture.componentInstance;
      reportListComponent = parentFixture.debugElement.query(
        By.css('vacgaps-report-list-page')
      ).componentInstance;
      parentFixture.detectChanges();
    });

    it(`should get a list of reports from parent`, function() {
      expect(reportListComponent.reportsList).toEqual(parentComponent.reportsList);
    });

    it(`should update the filter when the filter fields change`, function() {
      const notificationsFilter: NotificationsFilter = {
        cities: ["100", "110"],
        healthCareService: "1",
        availableVaccines: 50,
        dueTimeInMs: 500,
      };
      spyOn(component, 'updateFilter');
      const filterComponent = fixture.debugElement.query(By.css('vacgaps-filter-form')).componentInstance;
      filterComponent.filterFields.setValue(notificationsFilter);
      expect(component.updateFilter).toHaveBeenCalledWith(notificationsFilter);
    });
  });

  it(`should return the data according to incoming filter`, function() {
    component.reportsList = MOCK_REPORTS;
    const notificationsFilter: NotificationsFilter = {
      cities: ["100", "110"],
      healthCareService: "1"
    };
    component.updateFilter(notificationsFilter);
    expect(component.filteredReportsList).toEqual([
      {
        city: '100',
        healthCareService: '1',
        address: 'שרה אמנו 39'
      },
      {
        city: '110',
        healthCareService: '1',
        address: 'שרה אמנו 39'
      },
    ])
  });

  it(`should return data with all cities if got an empty cities filter`, function() {
    component.reportsList = MOCK_REPORTS.map(value => { value.healthCareService = "1"; return value; });
    const notificationsFilter: NotificationsFilter = {
      cities: [],
      healthCareService: "1"
    };
    component.updateFilter(notificationsFilter);
    expect(component.filteredReportsList).toEqual(MOCK_REPORTS.map(value => { value.healthCareService = "1"; return value; }));
  });

  it(`should query the server according to environment for reports on load`, function() {
    const httpTestingController = TestBed.inject(HttpTestingController);
    const vaccinesReportsService = TestBed.inject(VaccinesReportsService);

    component.ngOnInit();
    const request = httpTestingController.match();

  });
});
