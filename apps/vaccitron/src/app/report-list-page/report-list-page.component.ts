import { Component, Inject, Input, OnDestroy, OnInit } from '@angular/core';
import { NotificationsFilter, VaccinesReport } from '@vacgaps/interfaces';
import { VaccinesReportsService } from '@vacgaps/vaccines-reporter';
import { interval, Observable, Subject, throwError } from 'rxjs';
import { CITIES } from '@vacgaps/constants';
import { environment } from '../../environments/environment';
import { catchError, retry, takeUntil } from 'rxjs/operators';
import { AccountService } from '../account/account.service';
import { LoginModalComponent } from '@vacgaps/login-modal';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ReportsListAction } from '@vacgaps/reports-list';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HttpErrorResponse } from '@angular/common/http';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

 // TODO: Prettify this code
@Component({
  selector: 'vacgaps-error-dialog',
  template: `
    <div>
      {{ data }}
    </div>
    <br>
    <div style="text-align: center;">
      <button
        color="primary"
        mat-button
        mat-raised-button
        [mat-dialog-close]="true"
      >
        אישור
      </button>
    </div>`,
})
export class ErrorDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}
}

@Component({
  selector: 'vacgaps-report-list-page',
  templateUrl: './report-list-page.component.html',
  styleUrls: ['./report-list-page.component.css'],
})
export class ReportListPageComponent implements OnInit, OnDestroy {
  @Input()
  reportsList: VaccinesReport[] = [];

  #onDestroy$ = new Subject<void>();

  get isLoggedIn(): boolean {
    return this.accountService?.loggedIn;
  }

  get filteredReportsList(): VaccinesReport[] {
    return this.filterList(this.#currentFilter);
  }

  #currentFilter: NotificationsFilter = { healthCareService: '' };

  updateFilter(newFilter: NotificationsFilter) {
    this.#currentFilter = newFilter;
  }

  constructor(
    private vaccinesReportsService: VaccinesReportsService,
    private dialog?: MatDialog,
    private accountService?: AccountService
  ) {
    this.accountService?.loggedInStatusChanged.subscribe($event => {
      if ($event.event === 'loggedInStatusChanged' && $event.payload.loggedIn) {
        this.getUpdate();
      }
    });
  }

  ngOnInit(): void {
    this.getUpdate();
    interval(environment.reportsQueryIntervalInMs)
      .pipe(takeUntil(this.#onDestroy$))
      .subscribe(() => this.getUpdate());
  }

  getUpdate() {
    this.vaccinesReportsService
      .getVaccinesReports(environment.vaccinesDataUrl)
      .subscribe((data) => {
        this.reportsList = data;
      });
  }

  filterList(notificationsFilter: NotificationsFilter): VaccinesReport[] {
    return this.reportsList?.filter((report) => {
      return (
        (!notificationsFilter.healthCareService ||
          report.healthCareService === notificationsFilter.healthCareService) &&
        (!notificationsFilter.cities?.length ||
          notificationsFilter.cities.includes(report.city)) &&
        (!notificationsFilter.districts?.length ||
          notificationsFilter.districts.includes(CITIES[report.city].district))
      );
      // TODO::add the time filter according to how it is supposed to be sent from the server (don't forget to update the interface)
    });
  }

  ngOnDestroy(): void {
    this.#onDestroy$.next();
  }

  reportsListActionEvent($event: ReportsListAction) {
    if (!this.isLoggedIn) return this.openLoginDialog();
    switch ($event.type) {
      case 'comingFeedback':
        const buttonElement = (event.target as HTMLElement).closest('button');
        buttonElement.classList.add('disabled');
        this.vaccinesReportsService
          .updateImComing(environment.apiUrl + environment.comingFeedback,
                          $event.payload.id)
          .pipe(
            catchError((error: HttpErrorResponse) => {
              buttonElement.classList.remove('disabled');
              const text = error.status === 409
                ? 'כבר אישרת הגעה למיקום זה לאחרונה' :
                'תקלה באישור הבקשה. נא לנסות שנית.';
              this.dialog.open(ErrorDialog, {
                direction: 'rtl',
                autoFocus: false,
                data: text,
              });
              return throwError(error);
            })
          )
          .subscribe((response) => {
            buttonElement.classList.remove('disabled');
          });
        break;
      default:
        break;
    }
  }

  openLoginDialog() {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '350px',
      height: '200px',
      direction: 'rtl',
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result === true) {
        await this.accountService.login();
      }
    });
  }
}
