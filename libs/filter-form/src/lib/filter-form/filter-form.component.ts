import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationsFilter } from '@vacgaps/interfaces';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'vacgaps-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent implements OnInit {
  filterFields = new FormGroup({
    'availableVaccines': new FormControl('', []),
    'cities': new FormControl([], []),
    'dueTimeInMs': new FormControl(NaN, []),
    'healthCareService': new FormControl(NaN, [])
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

  #cities: Map<string, string>;
  citiesSelectList: Map<string, string>;
  healthCareServices = new Map(Object.entries(HEALTH_CARE_SERVICES));
  citiesFilterTerm: string;

  constructor() { }

  ngOnInit(): void {
    if (!this.#cities) this.cityList = new Map(Object.entries(CITIES));
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
    this.citiesFilterTerm = '';
  }
}
