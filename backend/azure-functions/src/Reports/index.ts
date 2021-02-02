import * as FacebookAuth from '../Auth/facebook-auth';
import { EnvironmentSettings } from '../Settings/EnvironmentSettings';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import { getComingFeedbackAccessor, getVaccinesReportAccessor } from '../DataAccess/accessors';
import { VaccinesReports } from '../DataAccess/vaccines-report';

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

    let reportAccessor = getVaccinesReportAccessor(context);
    const isOnlyMinimalData: boolean = authResult === FacebookAuth.NoAuthenticationResult.NoCredentials;
    const reports: VaccinesReports = await reportAccessor.getVaccinesReports(isOnlyMinimalData);

    if (isOnlyMinimalData || reports.reports.length === 0) {
        if (isOnlyMinimalData) {
            context.log.info('No credentials, return the list with minimal data');
        }
        if (reports.reports.length === 0) {
            context.log.info('No reports found in the date range');
        }

        context.res = {
            status: 200,
            body: JSON.stringify(reports),
        };

        context.done();
        return;
    }

    context.log.info('Authenticated, collecting missing info from DB');

    const reportIds = reports.reports.map(report => report.id);
    let comingFeedbackAccessor = getComingFeedbackAccessor(context);
    const feedbackCounts = await comingFeedbackAccessor.getFeedbackCountsForReports(reportIds);
    
    let enrichedReports = reports.reports.map(report => {
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
