import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsListItemComponent } from './reports-list-item.component';
import { Component, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';
import { VaccineReportItem } from '../reports-list/reports-list.component.spec';
import { ReportsListComponent } from '../reports-list/reports-list.component';
import { By } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatLineModule } from '@angular/material/core';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';

const REPORT_MOCK_ITEM = new VaccineReportItem();

@Component({
  selector: 'vacgaps-test-component',
  template: `
    <vacgaps-reports-list-item
      (comingFeedbackEvent)="comingEventHandler($event)"
      [reportItem]="item"
    ></vacgaps-reports-list-item>`
})
class TestComponent {
  item: VaccinesReport = REPORT_MOCK_ITEM;
  comingEventHandler($event) {

  }
}

describe('ReportsListItemComponent', () => {
  let component: ReportsListItemComponent;
  let fixture: ComponentFixture<ReportsListItemComponent>;
  const event = {
    stopPropagation: jasmine.createSpy()
  } as unknown as Event;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportsListItemComponent, TestComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe(`integration`, function() {
    let parentFixture: ComponentFixture<TestComponent>,
      parentComponent: TestComponent,
      reportsListItemComponent: ReportsListItemComponent;

    beforeEach(function() {
      parentFixture = TestBed.createComponent(TestComponent);
      parentComponent = parentFixture.componentInstance;
      reportsListItemComponent = parentFixture.debugElement.query(
        By.css('vacgaps-reports-list-item')
      ).componentInstance;
      parentFixture.detectChanges();
    });
    it(`should accept an item from parent`, function() {
      expect(reportsListItemComponent.reportItem).toEqual(REPORT_MOCK_ITEM);
    });

    it(`should fire an I am coming event to parent`, function() {
      const spy = spyOn(parentComponent, 'comingEventHandler');
      reportsListItemComponent.comingFeedback(event);
      expect(spy).toHaveBeenCalledWith(REPORT_MOCK_ITEM);
    });
  });

  describe(`I am coming report`, function() {
    it(`should stop propagation`, function() {
      component.comingFeedback(event);
      expect(event.stopPropagation).toHaveBeenCalled();
    });

    it(`should emit an event`, function() {
      spyOn(component.comingFeedbackEvent, 'emit');
      component.comingFeedback(event);
      expect(component.comingFeedbackEvent.emit).toHaveBeenCalledWith(component.reportItem);
    });
  });

  it(`should get a string value for healthServiceProvider`, function() {
    const report = (component.reportItem = new VaccineReportItem());
    expect(component.healthCareService).toEqual(
      HEALTH_CARE_SERVICES[report.healthCareService]
    );
  });

  it(`should get a string value for city`, function() {
    const report = (component.reportItem = new VaccineReportItem());
    expect(component.cityName).toEqual(CITIES[report.city]);
  });
});
