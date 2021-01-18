import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationsFilter } from '@vacgaps/interfaces';
import { DISTRICTS, CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'vacgaps-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss'],
})
export class FilterFormComponent implements OnInit {
  filterFields = new FormGroup({
    availableVaccines: new FormControl('', []),
    cities: new FormControl([], []),
    districts: new FormControl([], []),
    dueTimeInMs: new FormControl(NaN, []),
    healthCareService: new FormControl(NaN, []),
  });

  @Output()
  formSubmit = new EventEmitter<NotificationsFilter>();

  @Output()
  formUpdate = new EventEmitter<NotificationsFilter>();

  cities = new Map(Object.entries(CITIES).map(
    entry => [entry[0], entry[1].name]));

  districts = new Map(Array.from(DISTRICTS).map(
    entry => [entry, entry]));

  @ViewChild('citiesInput') citiesInput: ElementRef<HTMLInputElement>;

  @ViewChild('districtsInput') districtsInput: ElementRef<HTMLInputElement>;

  #cities: Map<string, string>;
  #districts: Map<string, string>;
  healthCareServices = new Map(Object.entries(HEALTH_CARE_SERVICES));
  
  constructor() {}

  ngOnInit(): void {
    this.filterFields.valueChanges.subscribe(() => {
      this.formUpdate.emit(this.filterFields.getRawValue());
    });
  }

  submitForm() {
    this.formSubmit.emit(this.filterFields.getRawValue());
  }

  citiesUpdated(selectedCities: any[]) {
    this.filterFields.controls.cities.setValue(selectedCities);

    // NOTE: Not sure it's required in case of added city (rather than removed)
    this.formUpdate.emit(this.filterFields.getRawValue());
  }

  districtsUpdated(selectedDistricts: any[]) {
    this.filterFields.controls.districts.setValue(selectedDistricts);

    // NOTE: Not sure it's required in case of added city (rather than removed)
    this.formUpdate.emit(this.filterFields.getRawValue());
  }
}
