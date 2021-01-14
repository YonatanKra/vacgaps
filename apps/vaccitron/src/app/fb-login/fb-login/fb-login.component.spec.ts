import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLoginComponent } from './fb-login.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { Observable } from 'rxjs';

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

describe('FbLoginComponent', () => {
  let component: FbLoginComponent;
  let fixture: ComponentFixture<FbLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [{provide: SocialAuthService, useValue: MockSocialAuthService}],
      declarations: [ FbLoginComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
