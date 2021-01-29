// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // TODO: Use these values when yarn nx serve will support also BE.
  // Currently just uncomment manually when want to debug e2e
  vaccinesDataUrl: 'http://localhost:7071/api/Reports',
  apiUrl: 'http://localhost:7071/api',
  comingFeedback: '/ComingFeedback',
  // vaccinesDataUrl: '../../assets/demo-data.json',
  // apiUrl: '../../assets',
  // comingFeedback: '/ComingFeedback.json',
  reportsQueryIntervalInMs: 5000,
  facebookAppId: '1279648522401260',
};
