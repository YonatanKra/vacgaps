import { CITIES_TYPE, HEALTH_CARE_SERVICE, TargetGroup } from '@vacgaps/constants';

export interface Time {
  hour: number;
  minutes: number;
}

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICE;
  startTime: Time;
  endTime: Time;
  targetGroup: TargetGroup[];
  minimalAge: number;
  updateTime: number;
  reporter: string;
  availableVaccines: number;
  id: string;
}
