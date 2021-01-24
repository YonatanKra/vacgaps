import { TestBed } from '@angular/core/testing';

import { AccountService } from './account.service';

import { FbLogin } from '@vacgaps/fb-login';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const MOCK_USER_DETAILS = {
  id: '',
  facebookId: 'fake-fb-id',
  name: '',
  expiresIn: 5000,
  token: 'fake-fb-token'
};

describe('AccountService', () => {
  let service: AccountService,
    loginSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(AccountService);
    loginSpy = spyOn(FbLogin.prototype, 'login').and.callFake(() => {
      return Promise.resolve(MOCK_USER_DETAILS)
    });

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(`login`, function() {
    it(`should login to facebook and authenticate with the access token`, async function() {
      const promise = service.login();
      expect(await promise).toEqual(MOCK_USER_DETAILS);
    });

    it(`should save user details`, async function() {
      const promise = service.login();
      await promise;
      expect(service.userDetails).toEqual(MOCK_USER_DETAILS);
    });
  });

  describe(`session timer`, function() {
    it(`should reauthenticate when timer's up`, function() {

    });
  });


});
