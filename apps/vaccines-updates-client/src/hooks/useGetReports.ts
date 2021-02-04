import { VaccinesReport } from '@vacgaps/interfaces';
import { useAuthentication } from '../providers';
import { useCallback } from 'react';
import { getReports } from '../services/vacgaps-api-client';

export const useGetReports: () => () => Promise<{reports:VaccinesReport[]}> = () => {
    const { token } = useAuthentication();

    return useCallback(() => {
        if (!token) throw new Error('not authorized');
        return getReports(token);
    }, [token]);
};
