import { CITIES_TYPE } from '@vacgaps/constants';

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: number;
  availableVaccines?: number;
  dueTimeInMs?: number;
  targetGroup?: number;
}
