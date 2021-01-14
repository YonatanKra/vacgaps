import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { Observable } from 'rxjs';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Router, UrlTree } from '@angular/router';

const MockSocialAuthService = {
  _authState: undefined,
  _initState: undefined,
  _user: undefined,
  autoLogin: undefined,
  initialize: undefined,
  initialized: undefined,
  providers: undefined,
  get authState(): Observable<SocialUser> {
    return new Observable<SocialUser>();
  },
  get initState(): Observable<boolean> {
    return new Observable<boolean>();
  },
  refreshAuthToken(providerId: string): Promise<void> {
    return Promise.resolve(undefined);
  },
  signIn(providerId: string, signInOptions?: any): Promise<SocialUser> {
    return Promise.resolve(undefined);
  },
  signOut(revoke?: boolean): Promise<any> {
    return Promise.resolve(undefined);
  }
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
      providers: [{provide: Router, useValue: MockRouter}, { provide: SocialAuthService, useValue: MockSocialAuthService}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
