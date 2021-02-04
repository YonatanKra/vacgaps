export type VaccinesReportId = {
    pKey: string;
    internalId: string;
}

export type VaccinesReport = {
    city: string; // enum
    address: string;
    healthCareService: string;  // enum
    updateTime?: number;
    branchName?: string;
    endTime?: string;
    targetGroups?: string[]; // enum
    minimalAge?: number;
    reporter?: string;
    availableVaccines?: number;
    comments?: string;
    hideReport?: boolean;
    id: VaccinesReportId;
    comingFeedbackCount: number;
  }

  export type VaccinesReports = {
      reports: VaccinesReport[];
  }