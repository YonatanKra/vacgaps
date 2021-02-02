import { VaccinesReport } from '@vacgaps/interfaces';
import { useAuthentication, useFormData } from '../providers';
import { useCallback } from 'react';
import { sendReport } from '../services/vacgaps-api-client';

export const useSendReport: () => () => Promise<void> = () => {
    const formData = useFormData();
    const { token } = useAuthentication();

    return useCallback(() => {
        if (!token) throw {error: 'not authorized'};

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
            availableVaccines: formData.availableVaccines,
            id: formData.id,
            comingFeedbackCount: formData.comingFeedbackCount,
        };

        return sendReport(report, token);
    }, [formData, token]);
};
