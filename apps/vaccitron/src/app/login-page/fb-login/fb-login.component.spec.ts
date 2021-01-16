import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbLoginComponent } from './fb-login.component';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { ReplaySubject } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import Spy = jasmine.Spy;
import { Location } from '@angular/common';

const MockSocialAuthService = {
  _initState: undefined,
  _user: undefined,
  autoLogin: undefined,
  initialize: undefined,
  initialized: undefined,
  providers: undefined,
  authState: new ReplaySubject<SocialUser>(null),
  initState: new ReplaySubject<SocialUser>(null),
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

@Component({
  template: `<router-outlet></router-outlet>`
})
export class AppComponent {
}
const routes = [
  { path: 'login-page', component: FbLoginComponent},
  { path: '', component: AppComponent }
]
describe('FbLoginComponent', () => {
  let component: FbLoginComponent;
  let fixture: ComponentFixture<FbLoginComponent>;
  let location: Location;
  let routerSpy: Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [{provide: SocialAuthService, useValue: MockSocialAuthService}], //TODO::use the fb auth service instead
      declarations: [ FbLoginComponent, AppComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.inject(Location);
    routerSpy = spyOn(location, 'go');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should redirect to '' if auth user is not null`, function() {

    MockSocialAuthService.authState.next(null);
    const callsToRouterAfterNonAuthUpdate = routerSpy.calls.count();
    MockSocialAuthService.authState.next({} as unknown as SocialUser);
    const callsToRouterAfterPositiveAuthUpdate = routerSpy.calls.count();

    expect(callsToRouterAfterNonAuthUpdate).toEqual(0);
    expect(callsToRouterAfterPositiveAuthUpdate).toEqual(1);
    expect(routerSpy).toHaveBeenCalledWith('/');
  });

  it(`should remove the subscription after destroy`, function() {
    const callTimes = Math.round(Math.random()*10 + 1);
    for (let i = 0; i < callTimes; i++) MockSocialAuthService.authState.next({} as unknown as SocialUser);
    const callsToRouterAfterMultipleUpdates = routerSpy.calls.count();

    component.ngOnDestroy();
    for (let i = 0; i < callTimes; i++) MockSocialAuthService.authState.next({} as unknown as SocialUser);
    const callsToRouterAfterMultipleUpdatesAndDestroy = routerSpy.calls.count();
    expect(callsToRouterAfterMultipleUpdates).toEqual(callTimes);
    expect(callsToRouterAfterMultipleUpdatesAndDestroy).toEqual(callTimes);
  });
});
