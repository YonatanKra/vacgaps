// TODO: workspace.json today replaces the environment with the prod version.
// Need to have also build mode for ppe environment, in which this file will be replaced.
export const environment = {
  production: true,
  vaccinesDataUrl: 'https://getvacci-ppe.azurewebsites.net/api/Reports',
  reportsQueryIntervalInMs: 5 * 60 * 1000,
  facebookAppId: '1279648522401260',
  apiUrl: 'https://getvacci-ppe.azurewebsites.net/api/',
  comingFeedback: 'ComingFeedback',
};
