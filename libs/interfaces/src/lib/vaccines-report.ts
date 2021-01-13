import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE } from '@vacgaps/constants';

interface Time {
  hour: number;
  minutes: number;
}
export interface VaccinesReport {
  branchName: string;
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  startTime?: Time;
  endTime?: Time;
  targetGroup?: number;
  minimalAge?: number;
  updateTime: number;
  reporter: string;
  availableVaccines?: number;
}

const x: VaccinesReport = { address: '', branchName: '', city: '', healthCareService: '', reporter: '', updateTime: 0 };
