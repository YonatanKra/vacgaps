import { CITIES_TYPE, DISTRICTS, HEALTH_CARE_SERVICES_TYPE } from '@vacgaps/constants';

export interface NotificationsFilter {
  cities?: CITIES_TYPE[number][];
  districts?: string[];
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  availableVaccines?: number;
  dueTimeInMs?: number;
}
