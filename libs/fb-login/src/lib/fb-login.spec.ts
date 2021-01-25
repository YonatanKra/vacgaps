import { FbLogin, UserDetails } from './fb-login';
import { fbInitializer } from './fb-init/fb-initializer';

const MOCK_FB_AUTH_DETAILS = {
  accessToken: 'fake-access-token',
  userID: 'fake-fb-id',
  expiresIn: 5000,
};

const EXPECTED_USER_DETAILS: UserDetails = {
  extraInfo: '',
  facebookId: MOCK_FB_AUTH_DETAILS.userID,
  id: '',
  name: '',
  token: MOCK_FB_AUTH_DETAILS.accessToken,
  expiresIn: MOCK_FB_AUTH_DETAILS.expiresIn,
};

jest.mock('./fb-init/fb-initializer', () => ({
  fbInitializer: jest.fn(
    () => new Promise((res) => setTimeout(() => res(MOCK_FB_AUTH_DETAILS), 0))
  ),
}));

jest.useFakeTimers();
describe('fbLogin', () => {
  const config = {
    fbAppId: 'fake-id',
  };

  let fbLogin: FbLogin;
  beforeEach(function () {
    fbLogin = new FbLogin(config);
    (window as unknown)['FB'] = {
      login: jest.fn(function (fn) {
        fn({ authResponse: MOCK_FB_AUTH_DETAILS });
      }),
    };
  });

  it('should work', () => {
    expect(FbLogin).toBeTruthy();
  });

  describe(`login`, function () {
    it(`should return a promise that resolves after FB login with accessToken`, async function () {
      const loginPromise = fbLogin.login();
      expect(await loginPromise).toEqual(EXPECTED_USER_DETAILS);
    });

    it(`should return a promise that resolves after FB login with null if login failed`, async function () {
      (window as unknown)['FB'] = {
        login: jest.fn(function (fn) {
          fn({ authResponse: null });
        }),
      };
      const loginPromise = fbLogin.login();
      expect(await loginPromise).toEqual(null);
    });

    it(`should set userDetails `, async function () {
      await fbLogin.login();
      expect(fbLogin.userDetails).toEqual(EXPECTED_USER_DETAILS);
    });
  });

  describe(`init`, function () {
    it(`should initialize the FB sdk`, function () {
      expect(fbInitializer).toHaveBeenCalledWith(config.fbAppId);
    });

    it(`should set initState to true after initiatlization`, async function () {
      jest.runAllTimers();
      expect(await fbLogin.initState).toEqual(true);
    });

    it(`should set userDetails on successful login`, async function () {
      jest.runAllTimers();
      await fbLogin.initState;
      expect(fbLogin.userDetails.token).toEqual(
        MOCK_FB_AUTH_DETAILS.accessToken
      );
    });
  });

  it(`should set isLoggedIn according to userDetails`, function () {
    fbLogin.userDetails = null;
    expect(fbLogin.isLoggedIn).toEqual(false);
    fbLogin.userDetails = EXPECTED_USER_DETAILS;
    expect(fbLogin.isLoggedIn).toEqual(true);
  });
});
