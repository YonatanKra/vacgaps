import { FbAuthService } from './fb-auth.service';
import { DummyLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { TestBed } from '@angular/core/testing';
import { SocialAuthServiceConfigService } from '../../config/social-auth-service-config.service';

describe('FbAuthService', () => {
  let service: FbAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SocialAuthService,
        {
          provide: 'SocialAuthServiceConfig',
          useClass: SocialAuthServiceConfigService
        }
      ]
    });
    service = TestBed.inject(FbAuthService);
  });

  it(`should exist`, function() {
    expect(service).toBeTruthy();
  });

  describe(`signIn`, function() {
    it(`should return a promise that resolves with a user`, async function() {
      await new Promise(res => setTimeout(res, 0));
      const user = await service.signIn();
      expect(user).toEqual(DummyLoginProvider.DEFAULT_USER);
    });
  });

  describe('signOut', () => {
    it(`should resolve with undefined when signing out`, async function() {
      await new Promise(res => setTimeout(res, 0));
      await service.signIn();
      const user = await service.signOut();
      expect(user).toEqual(undefined);
    });
  });


  it(`should emit signed in and sign out events`, async function() {
    await new Promise(res => setTimeout(res, 0));
    const spy = jasmine.createSpy();
    service.authEvent.subscribe(spy);
    await service.signIn();
    await service.signOut();
    expect(spy.calls.count()).toEqual(2);
    expect(spy.calls.argsFor(0)[0]).toEqual(DummyLoginProvider.DEFAULT_USER);
    expect(spy.calls.argsFor(1)[0]).toEqual(null);
  });

  it(`should set logged in state according to auth results`, async function() {
    await new Promise(res => setTimeout(res, 0));
    expect(service.loggedIn).toEqual(false);
    await service.signIn();
    expect(service.loggedIn).toEqual(true);
    await service.signOut();
    expect(service.loggedIn).toEqual(false);
  });
});
