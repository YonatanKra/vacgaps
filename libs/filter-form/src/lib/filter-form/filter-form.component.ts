import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationsFilter } from '@vacgaps/interfaces';
import { CITIES, HEALTH_CARE_SERVICE } from '@vacgaps/constants';
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
    dueTimeInMs: new FormControl(NaN, []),
    healthCareService: new FormControl(NaN, []),
  });

  @Output()
  formSubmit = new EventEmitter<NotificationsFilter>();

  @Output()
  formUpdate = new EventEmitter<NotificationsFilter>();

  selectedCities = new Set([]);

  @Input()
  set cityList(citiesList: Map<string, string>) {
    this.#cities = citiesList;
    this.filterCities('');
  }
  get cityList() {
    return this.#cities;
  }

  @ViewChild('citiesInput') citiesInput: ElementRef<HTMLInputElement>;

  #cities: Map<string, string>;
  citiesSelectList: Map<string, string>;
  healthCareServices = new Map(Object.entries(HEALTH_CARE_SERVICE));
  citiesFilterTerm: string;

  citiesFilterChange = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.#cities) this.cityList = new Map(Object.entries(CITIES));

    this.citiesFilterChange
      .pipe(debounceTime(100))
      .subscribe(term => this.filterCities(term));

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

  addCity($event: MatAutocompleteSelectedEvent) {
    this.selectedCities.add($event.option.value);
    this.filterFields.controls.cities.setValue([...this.selectedCities]);
    this.citiesInput.nativeElement.value = this.citiesFilterTerm = '';
  }

  removeCity(city: string) {
    this.selectedCities.delete(city)
    this.filterFields.controls.cities.setValue([...this.selectedCities]);
    this.formUpdate.emit(this.filterFields.getRawValue());
  }
}
