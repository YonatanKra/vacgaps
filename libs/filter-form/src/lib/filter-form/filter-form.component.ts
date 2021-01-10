import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NotificationsFilter } from '@vacgaps/interfaces';

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

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {
    this.formSubmit.emit(this.filterFields.getRawValue());
  }
}
