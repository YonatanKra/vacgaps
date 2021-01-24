import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { VaccinesReport } from '@vacgaps/interfaces';
import { registerLocaleData } from '@angular/common';
import localeIL from '@angular/common/locales/en-IL';

registerLocaleData(localeIL, 'il');

export interface ReportsListAction {
  type: string;
  payload?: any;
}

@Component({
  selector: 'vacgaps-reports-list',
  templateUrl: './reports-list.component.html',
  styleUrls: ['./reports-list.component.scss'],
})
export class ReportsListComponent implements OnInit {
  @Input()
  reportsList: VaccinesReport[];

  @Input()
  expandableList: boolean;

  @Output()
  listActionEvent = new EventEmitter<ReportsListAction>();

  constructor() {}

  ngOnInit(): void {}

  handleComingFeedback(eventData: VaccinesReport) {
    this.listActionEvent.emit({
      type: 'comingFeedback',
      payload: eventData
    })
  }

  trackByFn(report) {
    return report.address;
  }
}
