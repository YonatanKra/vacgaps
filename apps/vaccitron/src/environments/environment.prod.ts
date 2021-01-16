import { FacebookLoginProvider } from 'angularx-social-login';

export const environment = {
  production: true,
  vaccinesDataUrl: '/api/reports.json',
  reportsQueryIntervalInMs: 5 * 60 * 1000,
  loginProviderConfig: [{ id: FacebookLoginProvider.PROVIDER_ID, provider: new FacebookLoginProvider('1279648522401260') }],
  fbLoginProviderId: FacebookLoginProvider.PROVIDER_ID
};
