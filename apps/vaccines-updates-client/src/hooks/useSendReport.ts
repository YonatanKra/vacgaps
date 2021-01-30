import { VaccinesReport } from '@vacgaps/interfaces';
import { useFormData } from '../providers';
import { useCallback } from 'react';

export const useSendReport: () => (report: VaccinesReport) => Promise<void> = () => {
    const data = useFormData();
    return useCallback(async (report: VaccinesReport) => {

    }, []);
};
