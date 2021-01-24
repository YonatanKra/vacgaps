import { TestBed } from '@angular/core/testing';

import { TokenInterceptorService } from './token-interceptor.service';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';
import { environment } from '../../environments/environment';

describe('TokenInterceptorService', () => {
  let service: TokenInterceptorService;
  const accountServiceMock = {
    userDetails: {
      token: 'fake-fb-token'
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: AccountService, useValue: accountServiceMock}, HttpHandler]
    });
    service = TestBed.inject(TokenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`should add the access_token to the request body`, function() {
    let resultReq;
    const reportId = '123';
    const request = new HttpRequest("PUT", environment.apiUrl, {reportId});
    const next = {
      handle: () => {}
    } as unknown as HttpHandler;

    spyOn(next, 'handle').and.callFake((req) => {
      resultReq = req;
      return {} as unknown as Observable<HttpEvent<any>>
    });

    service.intercept(request, next);
    expect(resultReq.headers.get('Authorization')).toEqual('Facebook ' + accountServiceMock.userDetails.token);
  });
});
