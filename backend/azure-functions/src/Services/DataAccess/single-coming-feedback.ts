import { VaccinesReportId } from "./vaccines-report";

export type SingleComingFeedback = {
    reportId: VaccinesReportId;
    userId: string;
    feedbackTime: Date;
}