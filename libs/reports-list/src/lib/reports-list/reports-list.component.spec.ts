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
import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE, TargetGroup } from '@vacgaps/constants';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatListModule } from '@angular/material/list';
import { animationFrameScheduler } from 'rxjs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReportModalComponent } from '../report-modal/report-modal.component';

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
    healthCareService: '1',
    address: 'Marom 12, Modiin',
    branchName: 'wat',
    reporter: 'ww',
    updateTime: 5,
    id: "1",
    comingFeedbackCount: 12
  },
];

export class VaccineReportItem implements VaccinesReport {
  constructor(
    public address: string = 'some default address',
    public city: CITIES_TYPE[number] = '100',
    public healthCareService: HEALTH_CARE_SERVICES_TYPE[number] = '2',
    public branchName = 'wat',
    public reporter = 'ww',
    public updateTime = 5,
    public comingFeedbackCount: number = 12,
    public id: string = "1"
  ) {}
}

@Component({
  selector: 'vacgaps-test-component',
  template: ` <vacgaps-reports-list
    (listActionEvent)="handleListAction($event)"
    [reportsList]="list"
  ></vacgaps-reports-list>`,
})
class TestComponent {
  list: VaccinesReport[] = REPORTS_LIST_MOCK;

  handleListAction($event: any) {}
}

describe('ReportsListComponent', () => {
  let component: ReportsListComponent;
  let fixture: ComponentFixture<ReportsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatListModule,
        ScrollingModule,
        MatDialogModule,
        MatFormFieldModule,
      ],
      declarations: [ReportsListComponent, TestComponent, ReportModalComponent],
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

    it(`should fire an event to parent`, function () {
      const data = {
        type: 'report',
        payload: {},
      };
      const spy = spyOn(parentComponent, 'handleListAction');
      reportsListComponent.listActionEvent.emit(data);
      expect(spy).toHaveBeenCalledWith(data);
    });
  });

  describe(`handleComingReport`, function () {
    it(`should emit a coming report action`, function () {
      const eventData: VaccinesReport = {
        comingFeedbackCount: 12, id: '1',
        address: '',
        branchName: '',
        city: '',
        healthCareService: '',
        reporter: '',
        updateTime: 0
      };
      const actionData = {
        type: 'comingFeedback',
        payload: eventData,
      };

      spyOn(component.listActionEvent, 'emit');
      component.handleComingFeedback(eventData);
      expect(component.listActionEvent.emit).toHaveBeenCalledWith(actionData);
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
