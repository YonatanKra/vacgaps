import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from '../account/account.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor(private accountService: AccountService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const account = this.accountService.userDetails;
    const isLoggedIn = account?.token;
    const isApiUrl = req.url.startsWith(environment.apiUrl);
    if (isLoggedIn && isApiUrl) {
      req = req.clone({
        headers: req.headers.set(
          'Authorization',
          `${this.accountService.userDetails.token}`
        ),
      });
    }
    return next.handle(req);
  }
}
