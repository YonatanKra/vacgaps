import { VaccinesReport, VaccinesReportId } from '@vacgaps/interfaces';
import { NewReport, useAuthentication, useFormData } from '../providers';
import { useCallback } from 'react';
import { sendReport } from '../services/vacgaps-api-client';

export const useSendReport: () => () => Promise<VaccinesReport> = () => {
    const formData = useFormData();
    const { token } = useAuthentication();

    return useCallback(async () => {
        if (!token) throw new Error('not authorized');

        const report: VaccinesReport = {
            city: formData.city,
            address: formData.address,
            healthCareService: formData.healthCareService,
            updateTime: formData.updateTime,
            branchName: formData.branchName,
            endTime: formData.endTime,
            targetGroups: formData.targetGroups,
            minimalAge: formData.minimalAge,
            reporter: formData.reporter,
            comments: formData.comments,
            hideReport: !!formData.hideReport,
            availableVaccines: formData.availableVaccines,
            id: formData.reportIdToEdit === NewReport ? undefined : (formData.reportIdToEdit as { reportId: VaccinesReportId }).reportId,
            comingFeedbackCount: formData.comingFeedbackCount,
        };

        await sendReport(report, token);
        
        return report;
    }, [formData, token]);
};
