import * as FacebookAuth from '../Auth/facebook-auth';
import { getComingFeedbackContainer } from '../Containers/containers';
import { EnvironmentSettings } from '../Settings/EnvironmentSettings';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import * as knex from 'knex';
import { getFeedbackExpirationTimeForSql } from '../ComingFeedback/coming-feedback-expiration';

type VaccinesReport = any;

const httpTrigger = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(
        req, context, /*allowNoCredentials=*/true);
    
    if (!(authResult === FacebookAuth.NoAuthenticationResult.NoCredentials ||
          authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    if (req.method == HttpMethod.Options) {
        context.log.info("OPTIONS request, not fetching list from server");
        context.res = {
            status: 200,
            body: []
        };
        context.done();
        return;
    }

    // TODO: Extract data from DB instead
    const reportsResponse: Axios.AxiosResponse<{reports: VaccinesReport[]}> = await Axios.default.get<{reports: VaccinesReport[]}>(
         EnvironmentSettings.reportListUrl);

    if (reportsResponse.status < 200 || reportsResponse.status >= 300) {
        context.log.error('InternalError because failed to get reports: ' + reportsResponse.status)
        context.res.status = 500;
        context.done();
        return;
    }

    if (authResult === FacebookAuth.NoAuthenticationResult.NoCredentials) {
        context.log.info('No credentials, return the list with minimal data');
        let filteredReports: Partial<VaccinesReport>[] = reportsResponse.data.reports.map(report => {
            return {
                city: report.city,
                healthCareService: report.healthCareService,
                id: report.id,
            };
        });

        context.res = {
            status: 200,
            body: JSON.stringify({reports:filteredReports}),
        };

        context.done();
        return;
    }

    context.log.info('Authenticated, collecting missing info from DB');

    const reportIds = reportsResponse.data.reports.map(report => report.id);
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
        getFeedbackExpirationTimeForSql() + '\' AND c.reportId IN (' +
        reportIds.map(reportId => '\'' + reportId + '\'').join(', ') + ') GROUP BY c.reportId';
    context.log.info('DB query: ' + query);
    const aggregated = await container.items.query({query}).fetchAll();
    context.log.info('Found ' + aggregated.resources.length + ' results in ComingFeedback query for reports');
    
    const recordById: Map<string, VaccinesReport> = new Map(aggregated.resources.map(record => [record.reportId, record]));
    let enrichedReports = reportsResponse.data.reports.map(report =>
        !recordById.has(report.id) ? report : {
            ...report,
            comingFeedbackCount: recordById.get(report.id).count,
        });

    context.res = {
        status: 200,
        body: JSON.stringify({reports:enrichedReports}),
    };

    context.done();
};

export default httpTrigger;
