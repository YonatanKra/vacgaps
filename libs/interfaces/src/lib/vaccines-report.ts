import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE, TargetGroup } from '@vacgaps/constants';

export interface VaccinesReport {
  branchName: string;
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  startTime?: string;
  endTime?: string;
  targetGroup: TargetGroup[];
  minimalAge?: number;
  updateTime: number;
  reporter: string;
  availableVaccines: number;
  id: string;
}
