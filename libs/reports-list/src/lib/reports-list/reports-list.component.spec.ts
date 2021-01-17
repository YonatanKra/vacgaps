import {
  ComponentFixture,
  fakeAsync,
  flush,
  TestBed,
} from '@angular/core/testing';

import { ReportsListComponent } from './reports-list.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';
import { By } from '@angular/platform-browser';
import { CITIES_TYPE, HEALTH_CARE_SERVICE } from '@vacgaps/constants';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { animationFrameScheduler } from 'rxjs';

/** Finish initializing the virtual scroll component at the beginning of a test. */
function finishInit(fixture: ComponentFixture<any>) {
  // On the first cycle we render and measure the viewport.
  fixture.detectChanges();
  flush();

  // On the second cycle we render the items.
  fixture.detectChanges();
  flush();

  // Flush the initial fake scroll event.
  animationFrameScheduler.flush();
  flush();
  fixture.detectChanges();
}

const REPORTS_LIST_MOCK: VaccinesReport[] = [
  {
    city: '100',
    healthCareService: HEALTH_CARE_SERVICE.Mehuhedet,
    address: 'Marom 12, Modiin',
    "branchName": "wat",
    "reporter": 'ww',
    "updateTime": 5
  },
];

export class VaccineReportItem implements VaccinesReport {
  constructor(
    public address: string = 'some default address',
    public city: CITIES_TYPE[number] = '100',
    public healthCareService: HEALTH_CARE_SERVICE = HEALTH_CARE_SERVICE.Macabi,
    public branchName = "wat",
    public reporter = "ww",
    public updateTime = 5
  ) { }
}


@Component({
  selector: 'vacgaps-test-component',
  template: ` <vacgaps-reports-list
    [reportsList]="list"
  ></vacgaps-reports-list>`,
})
class TestComponent {
  list: VaccinesReport[] = REPORTS_LIST_MOCK;
}

describe('ReportsListComponent', () => {
  let component: ReportsListComponent;
  let fixture: ComponentFixture<ReportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatListModule, ScrollingModule],
      declarations: [ReportsListComponent, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`integration`, function () {
    let parentFixture: ComponentFixture<TestComponent>,
      parentComponent: TestComponent,
      reportsListComponent: ReportsListComponent;
    beforeEach(function () {
      parentFixture = TestBed.createComponent(TestComponent);
      parentComponent = parentFixture.componentInstance;
      reportsListComponent = parentFixture.debugElement.query(
        By.css('vacgaps-reports-list')
      ).componentInstance;
      parentFixture.detectChanges();
    });
    it(`should get a list of vaccineReports from parent`, function () {
      expect(reportsListComponent.reportsList).toEqual(REPORTS_LIST_MOCK);
    });
  });

  describe(`list view`, function () {
    it(`should show listItems according to list size`, fakeAsync(() => {
      component.reportsList = [
        new VaccineReportItem(),
        new VaccineReportItem(),
        new VaccineReportItem(),
        new VaccineReportItem(),
      ];
      finishInit(fixture);
      fixture.detectChanges();
      expect(
        fixture.debugElement.queryAll(By.css('vacgaps-reports-list-item'))
          .length
      ).toEqual(component.reportsList.length);
    }));
  });
});
