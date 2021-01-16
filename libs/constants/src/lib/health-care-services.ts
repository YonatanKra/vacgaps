export const HEALTH_CARE_SERVICES = {
  0: 'כללית',
  1: 'מאוחדת',
  2: 'מכבי',
  3: 'לאומית',
};

const healthCareServicesKeys = Object.keys(HEALTH_CARE_SERVICES);
export type HEALTH_CARE_SERVICES_TYPE = typeof healthCareServicesKeys;
