import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'test-component',
  template: `<vacgaps-form (formData)="handleFormUpdate($event)"></vacgaps-form>`,
})
export class TestComponent {
  handleFormUpdate(data) {

  }
}
describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent, TestComponent ]
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
});
