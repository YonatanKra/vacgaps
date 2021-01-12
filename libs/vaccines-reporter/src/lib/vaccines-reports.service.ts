import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaccinesReport } from '@vacgaps/interfaces';
import { interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinesReportsService {

  private vaccinesReports: { [key: string]: Observable<VaccinesReport[]> } = {};

  constructor(private httpClient: HttpClient) { }

  getVaccinesReports(url: string, pollingInterval: number = 5 * 60 * 1000): Observable<VaccinesReport[]> {
    return this.vaccinesReports[url] || (this.vaccinesReports[url] = this.request(url));
  }

  request(url): Observable<VaccinesReport[]> {
    return this.httpClient.get<VaccinesReport[]>(url);
  }
}
