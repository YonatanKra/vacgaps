import { CITIES_TYPE, HEALTH_CARE_SERVICE } from '@vacgaps/constants';

export interface NotificationsFilter {
  cities?: CITIES_TYPE[number][];
  healthCareService: HEALTH_CARE_SERVICE;
  availableVaccines?: number;
  dueTimeInMs?: number;
}
