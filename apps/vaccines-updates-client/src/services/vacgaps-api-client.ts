import { VaccinesReport } from '@vacgaps/interfaces';
import axios from 'axios';
import { environment } from '../environments/environment';

const httpClient = axios.create({
    baseURL: environment.vacGapsApiUrl,
});

const getFacebookAuthTokenHeader: (token: string) => { headers: { Authorization: string } } = token => ({
    headers: { 'Authorization': `facebook ${token}` }
});

export async function sendReport(report: VaccinesReport, facebookAccessToken: string): Promise<void> {
    await httpClient.post('/NewReport', report, {
        ...getFacebookAuthTokenHeader(facebookAccessToken)
    });
}

export async function isSupervisor(facebookAccessToken: string): Promise<boolean> {
    try {
        const response = await httpClient.get('/isSupervisor', {
            ...getFacebookAuthTokenHeader(facebookAccessToken)
        });

        return response.status === 200 && response.data === 'true';
    }
    catch {
        return false;
    }
}