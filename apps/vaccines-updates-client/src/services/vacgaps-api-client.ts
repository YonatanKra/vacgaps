import { VaccinesReport } from '@vacgaps/interfaces';
import axios from 'axios';
import { environment } from '../environments/environment';

const httpClient = axios.create({
    url: environment.vacgapsApiUrl,
});

const getFacebookAuthTokenHeader: (token: string) => { Authorization: string } = token => ({
    'Authorization': `facebook ${token}`
});

export async function sendReport(report: VaccinesReport, facebookAccessToken: string): Promise<void> {
    await httpClient.post('/NewReport', report, {
        headers: {
            ...getFacebookAuthTokenHeader(facebookAccessToken)
        }
    })
}