import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const AgeRanges = new Map(Object.entries({
  0: "16-25",
  1: "26-35",
  2: "36-45",
  3: "46-55",
  4: "מעל 55"
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

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.formData.emit(this.userDetailsForm.getRawValue());
  }
}
