import { fbInitializer } from './fb-initializer';

function removeScriptElement() {
  const scriptElement = document.querySelector('#facebook-jssdk');
  if (scriptElement) scriptElement.remove();
}
describe('FbAppInitializer', () => {
  const facebookAppId = 'fake-id';
  let fbAppInitializerPromise;

  beforeAll(() => {
    document.head.appendChild(document.createElement('script'));
  });

  afterEach(() => {
    removeScriptElement();
  });

  it('should create an instance', () => {
    expect(typeof fbInitializer).toEqual('function');
  });

  it(`should return a promise`, function () {
    expect(typeof fbInitializer(facebookAppId).then).toEqual('function');
  });

  describe(`fbAsyncInit`, function () {
    beforeEach(function () {
      window['FB'] = {
        init: jasmine.createSpy(),
        getLoginStatus: jasmine.createSpy(),
      } as any;
      fbAppInitializerPromise = fbInitializer(facebookAppId);
    });
    it(`should set the fbAsyncInit function on the window`, function () {
      expect(typeof window['fbAsyncInit']).toEqual('function');
    });

    it(`should init facebook with parameters`, function () {
      const expectedCallObject = {
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v8.0',
      };
      fbInitializer(facebookAppId);
      window['fbAsyncInit']();
      expect(window['FB'].init).toHaveBeenCalledWith(expectedCallObject as any);
    });

    it(`should get login status and resolve the initializer with the auth status`, async function () {
      const authResponse = {
        accessToken: 'fake-token',
      };
      (FB.getLoginStatus as jasmine.Spy).and.callFake((fn) => {
        fn({ authResponse });
      });
      const spy = jasmine.createSpy();
      fbAppInitializerPromise.then(spy);
      await window['fbAsyncInit']();
      expect(FB.getLoginStatus).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(authResponse as any);
    });
  });

  describe(`import FB sdk code`, function () {
    const languages = [
      {
        lang: 'he-IL',
        expected: 'he_IL',
      },
      {
        lang: 'en-UK',
        expected: 'en_UK',
      },
    ];
    it(`should set the script language code according to user's browser language`, function () {
      let language;
      Object.defineProperty(navigator, 'language', {
        get: function () {
          return language;
        },
      });
      languages.forEach(({ lang, expected }) => {
        language = lang;
        fbInitializer(facebookAppId);
        expect(
          document.querySelector(
            `[src="https://connect.facebook.net/${expected}/sdk.js"]`
          )
        ).toBeTruthy();
        removeScriptElement();
      });
    });
  });
});
