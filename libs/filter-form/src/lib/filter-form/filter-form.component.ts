import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationsFilter } from '@vacgaps/interfaces';
import { CITIES, DISTRICTS, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
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

  selectedCities = new Set([]);

  selectedDistricts = new Set([]);

  @Input()
  set cityList(citiesList: Map<string, string>) {
    this.#cities = citiesList;
    this.filterCities('');
  }
  get cityList() {
    return this.#cities;
  }

  set districtList(districtsList: Map<string, string>) {
    this.#districts = districtsList;
    this.filterDistricts('');
  }
  get districtList() {
    return this.#districts;
  }

  @ViewChild('citiesInput') citiesInput: ElementRef<HTMLInputElement>;

  @ViewChild('districtsInput') districtsInput: ElementRef<HTMLInputElement>;

  #cities: Map<string, string>;
  #districts: Map<string, string>;
  citiesSelectList: Map<string, string>;
  districtsSelectList: Map<string, string>;
  healthCareServices = new Map(Object.entries(HEALTH_CARE_SERVICES));
  citiesFilterTerm: string;
  citiesFilterChange = new Subject<string>();
  districtsFilterTerm: string;
  districtsFilterChange = new Subject<string>();
  
  constructor() {}

  ngOnInit(): void {
    if (!this.#cities) {
      this.cityList = new Map(Object.entries(CITIES).map(
        entry => [entry[0], entry[1].name]));
    }

    if (!this.#districts) {
      this.districtList = new Map(Array.from(DISTRICTS).map(
        entry => [entry, entry]));
    }

    this.citiesFilterChange
      .pipe(debounceTime(100))
      .subscribe(term => this.filterCities(term));

    this.districtsFilterChange
        .pipe(debounceTime(100))
        .subscribe(term => this.filterDistricts(term));

    this.filterFields.valueChanges.subscribe(() => {
      this.formUpdate.emit(this.filterFields.getRawValue());
    });
  }

  submitForm() {
    this.formSubmit.emit(this.filterFields.getRawValue());
  }

  filterCities(term: string) {
    this.citiesSelectList = new Map(this.#cities);
    if (term === '') return;
    for (const [key, value] of this.citiesSelectList.entries()) {
      if (value.toLowerCase().indexOf(term.toLowerCase()) === -1)
        this.citiesSelectList.delete(key);
    }
  }

  filterDistricts(term: string) {
    this.districtsSelectList = new Map(this.#districts);
    if (term === '') return;
    for (const [district, _] of this.districtsSelectList) {
      if (district.toLowerCase().indexOf(term.toLowerCase()) === -1)
      this.districtsSelectList.delete(district);
    }
  }

  addCity($event: MatAutocompleteSelectedEvent) {
    this.selectedCities.add($event.option.value);
    this.filterFields.controls.cities.setValue([...this.selectedCities]);
    this.citiesInput.nativeElement.value = this.citiesFilterTerm = '';
  }

  addDistrict($event: MatAutocompleteSelectedEvent) {
    this.selectedDistricts.add($event.option.value);
    this.filterFields.controls.districts.setValue([...this.selectedDistricts]);
    this.districtsInput.nativeElement.value = this.districtsFilterTerm = '';
  }

  removeCity(city: string) {
    this.selectedCities.delete(city)
    this.filterFields.controls.cities.setValue([...this.selectedCities]);
    this.formUpdate.emit(this.filterFields.getRawValue());
  }

  removeDistrict(city: string) {
    this.selectedDistricts.delete(city)
    this.filterFields.controls.districts.setValue([...this.selectedDistricts]);
    this.formUpdate.emit(this.filterFields.getRawValue());
  }
}
