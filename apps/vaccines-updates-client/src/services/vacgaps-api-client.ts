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
    await httpClient.put('/Report', report, {
        ...getFacebookAuthTokenHeader(facebookAccessToken)
    });
}

export async function getReports(facebookAccessToken: string, returnHiddenReports: boolean = true): Promise<{reports: VaccinesReport[]}> {
    try {
        const response = await httpClient.get('/Reports?' + (returnHiddenReports ? 'returnhiddenreports=1&' : '') + 'nocomingfeedback=1', {
            ...getFacebookAuthTokenHeader(facebookAccessToken)
        });

        return response.status === 200 && response.data;
    }
    catch {
        return {reports: []};
    }
}

export async function isSupervisor(facebookAccessToken: string): Promise<boolean> {
    try {
        const response = await httpClient.get('/isSupervisor', {
            ...getFacebookAuthTokenHeader(facebookAccessToken)
        });

        return response.status === 200 && response.data.isSupervisor;
    }
    catch {
        return false;
    }
}