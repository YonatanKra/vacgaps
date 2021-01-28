import * as FacebookAuth from '../Auth/facebook-auth';
import { getComingFeedbackContainer } from '../Containers/containers';
import { SingleComingFeedback } from '../Containers/single-coming-feedback';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import { Container } from '@azure/cosmos';
import * as knex from 'knex';
import { getFeedbackExpirationTimeForSql } from './coming-feedback-expiration';

const httpTrigger = async function (context: Context, req: HttpRequest): Promise<void> {
    const reportId: string = req.body.reportId;
    if (!(reportId?.length)) {
        context.res = {
            status: 400,
            body: 'Bad request: missing reportId in body',
        };

        context.done();
        return;
    }

    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(req, context);
    if (!(authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    let container: Container = await getComingFeedbackContainer();

    // NOTE: still might be a race between two parallel insertions to DB, moreover issues due to defered consistency
    // of NOSQL DB. We're OK with this for now as we're interested in approximation.
    
    const query: string = 'SELECT * FROM c WHERE c.userId = \'' + authResult.userId + '\' AND c.reportId = \'' + reportId +
        '\' AND c.feedbackTime > \'' + getFeedbackExpirationTimeForSql() + '\'';
    //const query: string = knex('c').where({
    //    userId: authResult.userId,
    //    reportId: reportId,
    //}).toQuery();
    let iterator = container.items.query({query});
    const alreadyHasFeedback: boolean = await iterator.hasMoreResults() && (await iterator.fetchNext()).resources.length > 0;

    if (alreadyHasFeedback) {
        context.res = {
            status: 409,
            body: 'Feedback already accepted in the past',
        };
        
        context.done();
        return;
    }

    if (req.method == HttpMethod.Options) {
        context.log.info("OPTIONS request, not writing to DB");
    } else {
        const feedback: SingleComingFeedback = {
            userId: authResult.userId,
            reportId: reportId,
            feedbackTime: new Date(Date.now()),
        };

        await container.items.create(feedback);
    }

    context.res = {
        status: 200,
        body: 'Feedback recorded',
    };

    context.done();
};

export default httpTrigger;
