import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router, UrlTree } from '@angular/router';
import { FbAuthService } from '../login-page/fb-login/fb-auth/fb-auth.service';

const MockFbAuthService = {

};

const MockRouter = {
  parseUrl(url: string): UrlTree {
    return new UrlTree();
  },
};
describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Router, useValue: MockRouter}, { provide: FbAuthService, useValue: MockFbAuthService}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
