import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VaccinesReport } from '@vacgaps/interfaces';
import { registerLocaleData } from '@angular/common';
import localeIL from '@angular/common/locales/en-IL';
import { LoginModalComponent, loginButtonClickedEmitter } from '../login-modal/login-modal.component';	

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

  constructor(public loginDialog: MatDialog) {
    loginButtonClickedEmitter.loginButtonClickedEvent.subscribe(() => this.listActionEvent.emit({
      type: 'loginButtonClicked'
    }));
  }

  ngOnInit(): void {}

  openLoginDialog(): void {
    if (!this.expandableList) {
      const dialogRef = this.loginDialog.open(LoginModalComponent, {
        width: '350px',
        height: '200px',
        direction: 'rtl'
      });
    }
  }	
  
  handleComingFeedback(eventData: VaccinesReport) {
    if (!this.expandableList) {
      this.openLoginDialog();
      return;
    }

    this.listActionEvent.emit({
      type: 'comingFeedback',
      payload: eventData
    })
  }

  trackByFn(report) {
    return report.address;
  }
}
