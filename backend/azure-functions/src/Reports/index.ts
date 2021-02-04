import * as FacebookAuth from '../Services/Auth/facebook-auth';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import { getComingFeedbackAccessor, getVaccinesReportAccessor } from '../Services/DataAccess/accessors';
import { isSupervisor } from '../Services/is-supervisor';
import { ReportsDataToReturn } from '../Services/DataAccess/vaccines-report-accessor';
import { VaccinesReports } from '../Services/DataAccess/vaccines-report';

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
    const reportsDataToReturn: ReportsDataToReturn =
        authResult === FacebookAuth.NoAuthenticationResult.NoCredentials ? ReportsDataToReturn.Minimal :
        (context.req.query.returnhiddenreports && isSupervisor((authResult as FacebookAuth.PassedAuthenticationResult).userId)) ? ReportsDataToReturn.DetailsAndHiddenReports :
        ReportsDataToReturn.Details;
    
    context.log.info('reportsDataToReturn: ' + reportsDataToReturn);
    const reports: VaccinesReports = await reportAccessor.getVaccinesReports(reportsDataToReturn);

    if (reportsDataToReturn == ReportsDataToReturn.Minimal || reports.reports.length === 0 || context.req.query.nocomingfeedback) {
        if (reports.reports.length === 0) {
            context.log.info('No reports found in the date range');
        }
        if (context.req.query.nocomingfeedback) {
            context.log.info('NoComingFeedback requested')
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
            comingFeedbackCount: feedbackCounts.countByReportId[report.id.pKey + '/' + report.id.internalId] ?? 0,
        }});

    context.res = {
        status: 200,
        body: JSON.stringify({reports:enrichedReports}),
    };

    context.done();
};

export default httpTrigger;
