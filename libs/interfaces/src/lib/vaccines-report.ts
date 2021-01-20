import { CITIES_TYPE, HEALTH_CARE_SERVICE, TargetGroup } from '@vacgaps/constants';

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  startTime?: string;
  endTime?: string;
  targetGroup?: number;
  minimalAge?: number;
  updateTime: number;
  reporter: string;
  availableVaccines: number;
  id: string;
}
