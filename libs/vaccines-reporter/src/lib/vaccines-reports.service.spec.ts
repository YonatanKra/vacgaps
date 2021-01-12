import { TestBed } from '@angular/core/testing';

import { VaccinesReportsService } from './vaccines-reports.service';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('VaccinesReportsService', () => {
  let service: VaccinesReportsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaccinesReportsService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(VaccinesReportsService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should call http request`, function() {
    spyOn(httpClient, 'get').and.callThrough();
    const fakeUrl = 'https://vaccines.url/';
    service.getVaccinesReports(fakeUrl);

    expect(httpClient.get).toHaveBeenCalledWith(fakeUrl);
  });

  it(`should return an observable that resolves to a report`,  function() {
    const testData = {};
    const fakeUrl = 'https://vaccines.url/';
    const observable = service.getVaccinesReports(fakeUrl);

    observable.subscribe((data) => {
      expect(data).toEqual(testData);
    });

    const request = httpTestingController.expectOne(fakeUrl);
    request.flush(testData);
    httpTestingController.verify();
  });

  it(`should return the same observable if called a second time`, function() {
    const fakeUrl = 'https://vaccines.url/';
    const observable1 = service.getVaccinesReports(fakeUrl);
    const observable2 = service.getVaccinesReports(fakeUrl);
    expect(observable1).toEqual(observable2);
  });

  it(`should return different observables for different urls`, function() {
    const observable1 = service.getVaccinesReports('url1', 500);
    const observable2 = service.getVaccinesReports('url2', 500);
    const observable3 = service.getVaccinesReports('url1', 500);
    expect(observable1 !== observable2).toEqual(true);
    expect(observable1).toEqual(observable3);
  });
});
