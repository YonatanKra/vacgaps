import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceFilterComponent } from './place-filter.component';
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
@Component({
  selector: 'vacgaps-test-component',
  template: `<vacgaps-filter-form
    (formSubmit)="handleFormUpdate($event)"
    (formUpdate)="handleFormValueUpdate($event)"
    [placeList]="places"
  ></vacgaps-filter-form>`,
})
class TestComponent {
  places = CITIES_LIST;

  handleFormUpdate(data) {}

  handleFormValueUpdate($event: NotificationsFilter) {}
}
describe('PlaceFilterComponent', () => {
  let component: PlaceFilterComponent;
  let fixture: ComponentFixture<PlaceFilterComponent>;

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
      declarations: [PlaceFilterComponent, TestComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should filter constants Map by string in the places list`, function () {
    const map = new Map(
      Object.entries({
        0: 'test',
        1: 'zest',
        2: 'completelyDifferent',
        3: 'TEST',
      })
    );
    component.placeList = map;
    fixture.detectChanges();
    const elementsBeforeFilter = component.placesSelectList.size;

    component.filterPlaces('te');
    fixture.detectChanges();
    const elementsAfterFilter = component.placesSelectList.size;

    expect(elementsBeforeFilter).toEqual(4);
    expect(elementsAfterFilter).toEqual(3);
  });

  describe(`addPlace`, function () {
    it(`should add place to selectedPlaces list`, function () {
      const placeDoesntExistBeforeAddition = !component.selectedPlaces.has(
        '999'
      );
      component.addPlace(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      const placeExistsAfterAddition = component.selectedPlaces.has('999');
      expect(placeDoesntExistBeforeAddition).toEqual(true);
      expect(placeExistsAfterAddition).toEqual(true);
    });

    it(`should clear the autocomplete input`, function () {
      component.placesFilterTerm = 'some string';
      component.addPlace(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      expect(component.placesFilterTerm).toEqual('');
    });

    it(`should add the selected places list to the form control`, function () {
      const placesListInFormBeforeAddition = [...component.selectedPlaces];
      component.addPlace(({
        option: { value: '999' },
      } as unknown) as MatAutocompleteSelectedEvent);
      component.addPlace(({
        option: { value: '0' },
      } as unknown) as MatAutocompleteSelectedEvent);
      const placesListInFormAfterAddition = [...component.selectedPlaces];
      expect(placesListInFormBeforeAddition).toEqual(
        jasmine.arrayWithExactContents([])
      );
      expect(placesListInFormAfterAddition).toEqual(
        jasmine.arrayWithExactContents(['999', '0'])
      );
    });
  });

  describe(`Integration tests`, function () {
    let parentFixture: ComponentFixture<TestComponent>,
      parentComponent: TestComponent,
      formComponent: PlaceFilterComponent;
    beforeEach(function () {
      parentFixture = TestBed.createComponent(TestComponent);
      parentComponent = parentFixture.componentInstance;
      formComponent = parentFixture.debugElement.query(
        By.css('vacgaps-filter-form')
      ).componentInstance;
      parentFixture.detectChanges();
    });

    it(`should receive places list from parent via the placeList`, function () {
      expect(formComponent.placesSelectList.size).toEqual(CITIES_LIST.size);
      for (const [key, value] of CITIES_LIST.entries()) {
        expect(value).toEqual(formComponent.placesSelectList.get(key));
      }
    });

    it(`should output the form data to parent component on form update`, function () {
      const data: any[] = ['100', '200'];
      spyOn(component.placesUpdated, 'emit');
      formComponent.addPlace(data[0]);
      expect(component.placesUpdated.emit).toHaveBeenCalledWith([data[0]]);
      formComponent.addPlace(data[1]);
      expect(component.placesUpdated.emit).toHaveBeenCalledWith(data);
    });
  });
});
