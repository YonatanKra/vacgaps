export const environment = {
  production: true,
  // TODO #1: Try to remove "/api" in URL path. See:
  // https://stackoverflow.com/questions/62011829/how-remove-api-from-route-azure-functions-v3-host-json-routeprefix-empty
  // https://stackoverflow.com/questions/62442179/azure-function-using-di-cannot-remove-api-route-prefix
  // TODO #2: Use api.getvacci.org.il domain after loading certificate to Azure Function App's custom domain
  // vaccinesDataUrl: 'https://api.getvacci.org.il/api/Reports',
  vaccinesDataUrl: 'https://getvacci.azurewebsites.net/api/Reports',
  reportsQueryIntervalInMs: 5 * 60 * 1000,
  facebookAppId: '1279648522401260',
  // apiUrl: 'https://api.getvacci.org.il/api/',
  apiUrl: 'https://getvacci.azurewebsites.net/api/',
  comingFeedback: 'ComingFeedback',
};
