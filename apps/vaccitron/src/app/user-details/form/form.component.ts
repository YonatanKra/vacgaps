import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const AgeRanges = new Map(Object.entries({
  0: "16-25",
  1: "26-35",
  2: "36-45",
  3: "46-55",
  4: "מעל 55"
}));

const cities = new Map(Object.entries({
  0: "Tel Aviv",
  1: "Modiin",
  2: "Haifa",
  3: "Eilat"
}));

export class UserDetails {
  extraPerson: boolean;
  mobility: boolean;
  city: number;
  name: string;
  age: number;
  riskFactor: number;
}

@Component({
  selector: 'vacgaps-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userDetailsForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    riskFactor: new FormControl(0, [Validators.required]),
    city: new FormControl('', [Validators.required]),
    mobility: new FormControl(false, [Validators.required]),
    extraPerson: new FormControl(false)
  });
  @Output()
  formData = new EventEmitter<UserDetails>();

  ageRanges = AgeRanges;

  #cities: Map<string, string>;

  @Input()
  set cityList(cities: Map<string, string>) {
    this.#cities = cities;
    this.filterCities(this.userDetailsForm.controls.city.value);
  }

  citiesSelectList: Map<string, string>;

  constructor() {
  }

  ngOnInit(): void {
    if (!this.#cities) this.cityList = cities;
  }

  submitForm() {
    this.formData.emit(this.userDetailsForm.getRawValue());
  }

  filterCities(term: string) {
    this.citiesSelectList = new Map(this.#cities);
    if (term === '') return;
    for (const [key, value] of this.citiesSelectList.entries()) {
      if (value.toLowerCase().indexOf(term.toLowerCase()) === -1)
        this.citiesSelectList.delete(key);
    }
  }
}
