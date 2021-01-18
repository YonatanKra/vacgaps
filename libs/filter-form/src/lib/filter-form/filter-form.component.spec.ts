import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormComponent } from './filter-form.component';
import { NotificationsFilter } from '@vacgaps/interfaces';
import { By } from '@angular/platform-browser';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const CITIES_LIST = new Map(
  Object.entries({
    0: '0',
    1: '1',
  })
);

const DISTRICTS_LIST = new Map(
  Object.entries({
    2: '2',
    3: '3',
  })
);
@Component({
  selector: 'vacgaps-test-component',
  template: `<vacgaps-filter-form
    (formSubmit)="handleFormUpdate($event)"
    (formUpdate)="handleFormValueUpdate($event)"
    [cityList]="cities"
    [districtList]="districts"
  ></vacgaps-filter-form>`,
})
class TestComponent {
  cities = CITIES_LIST;
  districts = DISTRICTS_LIST;

  handleFormUpdate(data) {}

  handleFormValueUpdate($event: NotificationsFilter) {}
}
describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatAutocompleteModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
      ],
      declarations: [FilterFormComponent, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a reactive form object`, function () {
    const formFieldNames = [
      'cities',
      'districts',
      'healthCareService',
      'availableVaccines',
      'dueTimeInMs',
    ].sort();
    expect(Object.keys(component.filterFields.controls).sort()).toEqual(
      jasmine.arrayWithExactContents(formFieldNames)
    );
  });

  it(`should submit the form data`, function () {
    const data: NotificationsFilter = {
      availableVaccines: Math.round(Math.random() * 100),
      cities: ['100', '200'],
      districts: ['300', '400'],
      dueTimeInMs: 0,
      healthCareService: '1',
    };
    component.filterFields.setValue(data);
    spyOn(component.formSubmit, 'emit');

    component.submitForm();

    expect(component.formSubmit.emit).toHaveBeenCalledWith(data);
  });

  describe(`addCity`, function () {
    it(`should add the selected cities list to the form control`, function () {
      const citiesListInFormBeforeAddition =
        component.filterFields.controls.cities.value;
      component.citiesUpdated(['999', '0']);
      const citiesListInFormAfterAddition =
        component.filterFields.controls.cities.value;
      expect(citiesListInFormBeforeAddition).toEqual(
        jasmine.arrayWithExactContents([])
      );
      expect(citiesListInFormAfterAddition).toEqual(
        jasmine.arrayWithExactContents(['999', '0'])
      );
    });
  });

  it(`should submit the form on every form update`, function () {
    spyOn(component.formUpdate, 'emit');
    const formFieldsNames = [
      'cities',
      'districts',
      'healthCareService',
      'availableVaccines',
      'dueTimeInMs',
    ];
    formFieldsNames.forEach((controlName) => {
      component.filterFields.controls[controlName].setValue('new value');
    });
    expect((component.formUpdate.emit as any).calls.count()).toEqual(
      formFieldsNames.length
    );
  });

  describe(`Integration tests`, function () {
    let parentFixture: ComponentFixture<TestComponent>,
      parentComponent: TestComponent,
      formComponent: FilterFormComponent;
    beforeEach(function () {
      parentFixture = TestBed.createComponent(TestComponent);
      parentComponent = parentFixture.componentInstance;
      formComponent = parentFixture.debugElement.query(
        By.css('vacgaps-filter-form')
      ).componentInstance;
      parentFixture.detectChanges();
    });

    it(`should output the form data to parent component`, function () {
      const data: NotificationsFilter = {
        availableVaccines: Math.round(Math.random() * 100),
        cities: ['100', '200'],
        districts: ['300', '400'],
        dueTimeInMs: 0,
        healthCareService: '1',
      };
      formComponent.filterFields.setValue(data);
      fixture.detectChanges();
      spyOn(parentComponent, 'handleFormUpdate');
      formComponent.submitForm();
      expect(parentComponent.handleFormUpdate).toHaveBeenCalledWith(data);
    });

    it(`should receive cities list from parent via the cityList`, function () {
      expect(formComponent.cities.size).toEqual(CITIES_LIST.size);
      for (const [key, value] of CITIES_LIST.entries()) {
        expect(value).toEqual(formComponent.cities.get(key));
      }
    });

    it(`should output the form data to parent component on form update`, function () {
      const data: NotificationsFilter = {
        availableVaccines: Math.round(Math.random() * 100),
        cities: ['100', '200'],
        districts: ['300', '400'],
        dueTimeInMs: 0,
        healthCareService: '1',
      };
      spyOn(parentComponent, 'handleFormValueUpdate');
      formComponent.filterFields.setValue(data);
      expect(parentComponent.handleFormValueUpdate).toHaveBeenCalledWith(data);
    });
  });

  it(`should emit a form update on city removal from the list`, function() {
    component.filterFields.setValue({
      availableVaccines: 13,
      cities: ["999"],
      districts: ["888"],
      dueTimeInMs: 50,
      healthCareService: "1"
    });
    spyOn(component.formUpdate, 'emit');
    component.citiesUpdated([]]);
    expect(component.formUpdate.emit).toHaveBeenCalledWith({
      availableVaccines: 13,
      cities: [],
      districts: [],
      dueTimeInMs: 50,
      healthCareService: "1"
    });
  });
});
