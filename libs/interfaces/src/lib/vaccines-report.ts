import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE, TargetGroup } from '@vacgaps/constants';

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  updateTime?: number;
  branchName?: string;
  endTime?: string;
  targetGroups?: TargetGroup[];
  minimalAge?: number;
  reporter?: string;
  availableVaccines?: number;
  id: string;
  comingFeedbackCount: number;
}
