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
    0: {name: '0', district: 'd0'},
    1: {name: '1', district: 'd1'},
  })
);
@Component({
  selector: 'vacgaps-test-component',
  template: `<vacgaps-filter-form
    (formSubmit)="handleFormUpdate($event)"
    (formUpdate)="handleFormValueUpdate($event)"
    [cityList]="cities"
  ></vacgaps-filter-form>`,
})
class TestComponent {
  cities = CITIES_LIST;

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
      dueTimeInMs: 0,
      healthCareService: '1',
    };
    component.filterFields.setValue(data);
    spyOn(component.formSubmit, 'emit');

    component.submitForm();

    expect(component.formSubmit.emit).toHaveBeenCalledWith(data);
  });

  it(`should filter constants Map by string in the cities list`, function () {
    const map = new Map(
      Object.entries({
        0: 'test',
        1: 'zest',
        2: 'completelyDifferent',
        3: 'TEST',
      })
    );
    component.cityList = map;
    fixture.detectChanges();
    const elementsBeforeFilter = component.citiesSelectList.size;

    component.filterCities('te');
    fixture.detectChanges();
    const elementsAfterFilter = component.citiesSelectList.size;

    expect(elementsBeforeFilter).toEqual(4);
    expect(elementsAfterFilter).toEqual(3);
  });

  describe(`addCity`, function () {
    it(`should add city to selectedCities list`, function () {
      const cityDoesntExistBeforeAddition = !component.selectedCities.has(
        '999'
      );
      component.addCity(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      const cityExistsAfterAddition = component.selectedCities.has('999');
      expect(cityDoesntExistBeforeAddition).toEqual(true);
      expect(cityExistsAfterAddition).toEqual(true);
    });

    it(`should clear the autocomplete input`, function () {
      component.citiesFilterTerm = 'some string';
      component.addCity(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      expect(component.citiesFilterTerm).toEqual('');
    });

    it(`should add the selected cities list to the form control`, function () {
      const citiesListInFormBeforeAddition =
        component.filterFields.controls.cities.value;
      component.addCity(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      component.addCity(({
        option: { value: '0' },
      } as unknown) as MatAutocompleteSelectedEvent);
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
      expect(formComponent.citiesSelectList.size).toEqual(CITIES_LIST.size);
      for (const [key, value] of CITIES_LIST.entries()) {
        expect(value).toEqual(formComponent.citiesSelectList.get(key));
      }
    });

    it(`should output the form data to parent component on form update`, function () {
      const data: NotificationsFilter = {
        availableVaccines: Math.round(Math.random() * 100),
        cities: ['100', '200'],
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
      dueTimeInMs: 50,
      healthCareService: "1"
    });
    spyOn(component.formUpdate, 'emit');
    component.removeCity('999');
    expect(component.formUpdate.emit).toHaveBeenCalledWith({
      availableVaccines: 13,
      cities: [],
      dueTimeInMs: 50,
      healthCareService: "1"
    });
  });
});
