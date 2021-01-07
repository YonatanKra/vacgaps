import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() {
  }

  ngOnInit(): void {
  }

  submitForm() {
    this.formData.emit(this.userDetailsForm.getRawValue());
  }
}
