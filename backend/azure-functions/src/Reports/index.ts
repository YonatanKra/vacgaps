import * as FacebookAuth from '../Auth/facebook-auth';
import { EnvironmentSettings } from '../Settings/EnvironmentSettings';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import { getComingFeedbackAccessor } from '../DataAccess/accessors';

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
    let comingFeedbackAccessor = getComingFeedbackAccessor(context);
    const feedbackCounts = await comingFeedbackAccessor.getFeedbackCountsForReports(reportIds);
    
    let enrichedReports = reportsResponse.data.reports.map(report => {
        return {
            ...report,
            comingFeedbackCount: feedbackCounts.countByReportId[report.id] ?? 0,
        }});

    context.res = {
        status: 200,
        body: JSON.stringify({reports:enrichedReports}),
    };

    context.done();
};

export default httpTrigger;
