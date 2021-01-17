import { Component, Input, OnInit } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';
import { registerLocaleData } from '@angular/common';
import localeIL from '@angular/common/locales/en-IL';
registerLocaleData(localeIL, 'il');

@Component({
  selector: 'vacgaps-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  @Input()
  reportsList: VaccinesReport[];

  constructor() {}

  ngOnInit(): void {}
}
