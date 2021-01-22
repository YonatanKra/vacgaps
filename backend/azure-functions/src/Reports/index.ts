import * as FacebookAuth from '../Auth/facebook-auth';
import { ICollection } from '../Services/ICollection';
import { CollectionProvider } from '../Services/CollectionProvider';
import { getComingFeedbackCollection, SingleComingFeedback } from '../ComingFeedback/coming-feedback-collection';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import * as Axios from 'axios';
import { AggregationCursor } from 'mongodb';
import { report } from 'process';

type VaccinesReport = any;

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
    
    if (authResult === FacebookAuth.NoAuthenticationResult.NoCredentials) {
        let filteredReports: Partial<VaccinesReport>[];
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

    if (!(authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    let minTime = new Date(Date.now());
    minTime.setHours(minTime.getHours() - 1);

    const reportIds = reportsResponse.data.reports.map(report => report.id);
    let collection: ICollection<SingleComingFeedback> = await getComingFeedbackCollection();
    let aggregated: AggregationCursor<{reportId: string, count: number}> = await collection.aggregateDocuments<{reportId: string, count: number}>([
        { "$addFields": { "feedbackTime": { "$toDate": "$_id" }}},
        { "$match": { "$and": [
            { "feedbackTime": { "$gt": minTime }},
            { "reportId": { "$in": reportIds }}]}},
        { "$group": {
            "_id": { "reportId": "$reportId"},
            "count": { "$sum": 1 }
        }}]);
    
    let enrichedReports = await Promise.all(reportsResponse.data.reports.map(async report => {
        let countRecord = await aggregated.filter({reportId: report.id}).toArray();
        if (countRecord.length !== 1) {
            return report;
        }

        return {
            ...report,
            comingFeedbackCount: countRecord[0]
        };
    }));

    context.res = {
        status: 200,
        body: {reports:enrichedReports}.toString(),
    };

    context.done();
};

export default httpTrigger;
