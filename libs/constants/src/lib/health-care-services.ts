export const ALL_HEALTH_CARE_SERVICES = '4';

export const HEALTH_CARE_SERVICES_WITHOUT_ALL = {
  '0': 'כללית',
  '1': 'מאוחדת',
  '2': 'מכבי',
  '3': 'לאומית',
};

export const HEALTH_CARE_SERVICES = {
  ...HEALTH_CARE_SERVICES_WITHOUT_ALL,
  [ALL_HEALTH_CARE_SERVICES]: 'לכל הקופות',
};

const healthCareServicesKeys = Object.keys(HEALTH_CARE_SERVICES);
export type HEALTH_CARE_SERVICES_TYPE = typeof healthCareServicesKeys;