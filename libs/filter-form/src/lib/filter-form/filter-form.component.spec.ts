import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterFormComponent } from './filter-form.component';
import { HEALTH_CARE_SERVICES_TYPE } from '@vacgaps/constants';

describe('FilterFormComponent', () => {
  let component: FilterFormComponent;
  let fixture: ComponentFixture<FilterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a reactive form object`, function() {
    const formFieldNames = [
      'cities', 'healthCareService', 'availableVaccines', 'dueTimeInMs',
    ].sort();
    expect( Object.keys(component.filterFields.controls).sort()).toEqual(jasmine.arrayWithExactContents(formFieldNames));
  });
});
