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
import { ReportsListAction } from '../../../../../libs/reports-list/src/lib/reports-list/reports-list.component';
import { MatSpinner } from '@angular/material/progress-spinner';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'error-dialog',
  template: `
    {{data}}
  `,
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

  public sendingImComingRequest = false;

  #onDestroy$ = new Subject<void>();

  get isLoggedIn(): boolean {
    return this.accountService?.loggedIn || true;
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
  ) {}

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
        const dialogRef = this.dialog.open(MatSpinner, {
          direction: 'rtl',
          autoFocus: false,
        });
        this.vaccinesReportsService
          .updateImComing(
            environment.apiUrl + environment.comingFeedback,
            {reportId: $event.payload.reportId}
            )
          .pipe(
            retry(3),
            catchError((error: HttpErrorResponse) => {
            dialogRef.close();
            this.dialog.open(ErrorDialog, {
              direction: 'rtl',
              autoFocus: false,
              data: 'תקלה באישור הבקשה. נא לנסות שנית.'
            });
            return throwError(error);
          }))
          .subscribe(response => {
            dialogRef.close();
          })

        ;
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
