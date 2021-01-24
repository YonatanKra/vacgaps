import * as FacebookAuth from '../Auth/facebook-auth';
import { getComingFeedbackContainer, SingleComingFeedback } from '../Containers/containers';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import * as knex from 'knex';

type VaccinesReport = any;

const httpTrigger = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    // TODO: Extract data from DB instead
    // const reportsResponse: Axios.AxiosResponse<{reports: VaccinesReport[]}> = await Axios.default.get<{reports: VaccinesReport[]}>(
    //     'https://www.getvacci.org.il/api/reports.json');
    const reportsResponse = { status: 200, data: { reports: [{
        reportId: '1',
        city: '4800',
        healthCareService: '1',
        anotherProp: 'hello',
    }] }};

    if (reportsResponse.status < 200 || reportsResponse.status >= 300) {
        console.log('InternalError because failed to get reports: ' + reportsResponse.status)
        context.res.status = 500;
        context.done();
        return;
    }

    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(
        req, context, /*allowNoCredentials=*/true);
    
    if (authResult === FacebookAuth.NoAuthenticationResult.NoCredentials) {
        let filteredReports: Partial<VaccinesReport>[] = reportsResponse.data.reports.map(report => {
            return {
                city: report.city,
                healthCareService: report.healthCareService
            };
        });

        context.res = {
            status: 200,
            body: JSON.stringify({reports:filteredReports}),
        };

        context.done();
        return;
    }

    if (!(authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    let minTime = new Date(Date.now());
    minTime.setHours(minTime.getHours() - 1);

    const reportIds = reportsResponse.data.reports.map(report => report.reportId);
    let container = getComingFeedbackContainer();
    // TODO: Use QueryBuilder like knex
    //const query: string = knex('c')
    //    .select('count(*) as count, reportId')
    //    .where('feedbackTime', '>', minTime)
    //    .whereIn('reportId', reportIds)
    //    .groupBy('reportId')
    //    .toQuery();
    const query: string =
        'SELECT COUNT(c.userId) AS count, c.reportId FROM c WHERE c.feedbackTime > \'' +
        minTime.toISOString() + '\' AND c.reportId IN (' +
        reportIds.map(reportId => '\'' + reportId + '\'').join(', ') + ') GROUP BY c.reportId';
    const aggregated = await container.items.query({query}).fetchAll();
    
    let enrichedReports = await Promise.all(reportsResponse.data.reports.map(async report => {
        let countRecordIndex = await aggregated.resources.findIndex(record => record.reportId === report.reportId);
        if (countRecordIndex < 0) {
            return report;
        }

        return {
            ...report,
            comingFeedbackCount: aggregated.resources[countRecordIndex].count,
        };
    }));

    context.res = {
        status: 200,
        body: JSON.stringify({reports:enrichedReports}),
    };

    context.done();
};

export default httpTrigger;
