import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

const CITIES_LIST = new Map(Object.entries({
  0: '0',
  1: '1'
}));

@Component({
  selector: 'test-component',
  template: `<vacgaps-form (formData)="handleFormUpdate($event)"
                            [cityList]="cities"></vacgaps-form>`,
})
export class TestComponent {
  cities = CITIES_LIST;

  handleFormUpdate(data) {

  }
}
describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatAutocompleteModule],
      declarations: [ FormComponent, TestComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a reactive form object`, function() {
    const formFieldNames = [
      'name', 'age', 'riskFactor', 'city', 'mobility', 'extraPerson'
    ].sort();
    expect( Object.keys(component.userDetailsForm.controls).sort()).toEqual(jasmine.arrayWithExactContents(formFieldNames));
  });

  it(`should submit the form data`, function() {
    const data = {
      name: 'some name',
      age: 38,
      riskFactor: 2,
      city: 472,
      mobility: true,
      extraPerson: true
    };
    component.userDetailsForm.setValue(data);
    spyOn(component.formData, 'emit');
    component.submitForm();
    expect(component.formData.emit).toHaveBeenCalledWith(data);
  });

  it(`should output the form data to parent component`, function() {
    const parentFixture = TestBed.createComponent(TestComponent);
    const parentComponent = parentFixture.componentInstance;
    const formComponent = parentFixture.debugElement.query(By.css('vacgaps-form')).componentInstance;
    const data = {
      name: 'some name',
      age: 38,
      riskFactor: 2,
      city: 472,
      mobility: true,
      extraPerson: true
    };
    formComponent.userDetailsForm.setValue(data);
    fixture.detectChanges();
    spyOn(parentComponent, 'handleFormUpdate');
    formComponent.submitForm();
    expect(parentComponent.handleFormUpdate).toHaveBeenCalledWith(data);
  });

  it(`should filter constants Map by string in the cities list`, function() {
    const map = new Map(Object.entries({
      0: 'test', 1: 'zest', 2: 'completelyDifferent', 3: 'TEST'
    }));
    component.cityList = map;
    fixture.detectChanges();
    const elementsBeforeFilter = component.citiesSelectList.size;

    component.filterCities('te');
    fixture.detectChanges();
    const elementsAfterFilter = component.citiesSelectList.size;

    expect(elementsBeforeFilter).toEqual(4);
    expect(elementsAfterFilter).toEqual(3);
  });

  it(`should receive cities list from parent via the cityList`, function() {
    const parentFixture = TestBed.createComponent(TestComponent);
    const formComponent = parentFixture.debugElement.query(By.css('vacgaps-form')).componentInstance;
    parentFixture.detectChanges();

    expect(formComponent.citiesSelectList.size).toEqual(CITIES_LIST.size);
    for (const [key, value] of CITIES_LIST.entries()) {
      expect(value).toEqual(formComponent.citiesSelectList.get(key));
    }
  });
});
