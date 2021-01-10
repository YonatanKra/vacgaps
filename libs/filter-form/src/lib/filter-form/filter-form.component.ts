import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }

}
