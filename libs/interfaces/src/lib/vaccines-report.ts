import { CITIES_TYPE, HEALTH_CARE_SERVICES_TYPE, TargetGroup } from '@vacgaps/constants';

export interface VaccinesReportId {
  pKey: string;
  internalId: string;
}

export interface VaccinesReport {
  city: CITIES_TYPE[number];
  address: string;
  healthCareService: HEALTH_CARE_SERVICES_TYPE[number];
  displayEndTime?: string;
  updateTime?: number;
  branchName?: string;
  serviceStartTime?: string;
  serviceEndTime?: string;
  targetGroups?: TargetGroup[];
  minimalAge?: number;
  reporter?: string;
  availableVaccines?: number;
  comments?: string;
  hideReport?: boolean;
  id: VaccinesReportId;
  comingFeedbackCount: number;
}
