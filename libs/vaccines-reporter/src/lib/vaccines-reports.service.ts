import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { VaccinesReport } from '@vacgaps/interfaces';
import { interval, Observable, Subject, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';

interface VaccinesReportResponse {
  reports: VaccinesReport[];
}

@Injectable({
  providedIn: 'root',
})
export class VaccinesReportsService {
  private vaccinesReports: { [key: string]: Observable<VaccinesReport[]> } = {};

  constructor(private httpClient: HttpClient) {}

  getVaccinesReports(url: string): Observable<VaccinesReport[]> {
    return (
      this.vaccinesReports[url] || (this.vaccinesReports[url] = this.get(url))
    );
  }

  updateImComing(url, reportId) {
    return this.httpClient
      .put(url, { reportId });
  }

  get(url): Observable<VaccinesReport[]> {
    return this.httpClient
      .get<VaccinesReportResponse>(url)
      .pipe(
        map((reportsObject: VaccinesReportResponse) => reportsObject.reports)
      );
  }
}
