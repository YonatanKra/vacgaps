import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE } from '@vacgaps/constants';

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  availableVaccines?: number;
  dueTimeInMs?: number;
  targetGroup?: string;
}
