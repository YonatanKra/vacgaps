import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaccinesReports } from '@vacgaps/interfaces';
import { interval, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VaccinesReportsService {

  private vaccinesReports: { [key: string]: Observable<VaccinesReports> } = {};

  constructor(private httpClient: HttpClient) { }

  getVaccinesReports(url: string): Observable<VaccinesReports> {
    return this.vaccinesReports[url] || (this.vaccinesReports[url] = this.request(url));
  }

  request(url): Observable<VaccinesReports> {
    return this.httpClient.get<VaccinesReports>(url);
  }
}
