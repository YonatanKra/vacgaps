import * as FacebookAuth from '../Auth/facebook-auth';
import { ICollection } from '../Services/ICollection';
import { CollectionProvider } from '../Services/CollectionProvider';
import { NoAuthenticationResult } from '../Auth/facebook-auth';
import { getComingFeedbackCollection, SingleComingFeedback } from '../ComingFeedback/coming-feedback-collection';
import { VaccinesReport } from '@vacgaps/interfaces';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import { AggregationCursor } from 'mongodb';
import { report } from 'process';

const httpTrigger = async function (
    context: Context,
    req: HttpRequest
): Promise<void> {
    // TODO: Extract data from DB instead
    const reportsResponse: Axios.AxiosResponse<{reports: VaccinesReport[]}> = await Axios.default.get<{reports: VaccinesReport[]}>(
        'https://www.getvacci.org.il/api/reports.json');

    if (reportsResponse.status < 200 || reportsResponse.status >= 300) {
        console.log('InternalError because failed to get reports: ' + reportsResponse.status)
        context.res.status = 500;
        context.done();
        return;
    }

    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(
        req, context, /*allowNoCredentials=*/true);
    
    if (authResult === NoAuthenticationResult.NoCredentials) {
        let filteredReports: Partial<VaccinesReports>[] = new Partial<VaccinesReport>[reportsResponse.data.reports.length];
        for (var i = 0; i < reportsResponse.data.reports.length; ++i) {
            filteredReports[i] = reportsResponse.data.reports.map(report => {
                report.city,
                report.healthCareService
            });
        }

        context.res = {
            status: 200,
            body: {reports:filteredReports}.toString(),
        };

        context.done();
        return;
    }

    if (!(authResult instanceof FacebookAuth.PassedAuthenticationResult) {
        return;
    }

    const reportIds = reportsResponse.data.reports.map(report => report.id);
    let collection: ICollection<SingleComingFeedback> = await getComingFeedbackCollection();
    let aggregated: AggregationCursor<{reportId: string, count: number}> = await collection.aggregateDocuments<{reportId: string, count: number}>([
        { "$match": { "$in": ["$reportId", reportIds ]} },
        { "$group": {
            "_id": { "reportId": "$reportId"},
            "count": { "$sum": 1 }
        }}]);
    
    let enrichedReports = reportsResponse.data.reports.map(report => {
        let countRecord = await aggregated.filter({reportId: report._id}).toArray();
        if (countRecord.length !== 1) {
            return report;
        }

        return {
            ...report,
            comingFeedbackCount: countRecord[0]
        };
    });

<<<<<<< Updated upstream:backend/azure-functions/Reports/index.ts
  context.res = {
    status: 200,
    body: authResult.toString(),
  };
=======
    context.res = {
        status: 200,
        body: {reports:enrichedReports}.toString(),
    };

    context.done();
>>>>>>> Stashed changes:backend/azure-functions/src/Reports/index.ts
};

export default httpTrigger;
