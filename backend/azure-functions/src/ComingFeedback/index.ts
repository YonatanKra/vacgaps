import * as FacebookAuth from '../Auth/facebook-auth';
import { ICollection } from '../Services/ICollection';
import { SingleComingFeedback, getComingFeedbackCollection } from './coming-feedback-collection';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { CollectionProvider } from '../Services/CollectionProvider';

const httpTrigger = async function (context: Context, req: HttpRequest): Promise<void> {
    const reportId: string = req.query.reportId;
    if (!reportId || reportId.length === 0) {
        context.res = {
            status: 400,
            body: 'Bad request: missing reportId query parameter',
        };

        context.done();
        return;
    }

    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(req, context);
    if (!(authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    // NOTE: still might be a race between two parallel insertions to DB, moreover issues due to defered consistency
    // of NOSQL DB. We're OK with this for now as we're interested in approximation.
    let collection: ICollection<SingleComingFeedback> = await getComingFeedbackCollection();
    let feedback: SingleComingFeedback = await collection.findOne({
        userId: authResult.userId,
        reportId: reportId,
    });

    if (feedback) {
        context.res = {
            status: 409,
            body: 'Feedback already accepted in the past',
        };
    }

    feedback = {
        userId: authResult.userId,
        reportId: reportId
    };

    await collection.insertOne(feedback);

    context.res = {
        status: 200,
        body: authResult.userId
    };

    context.done();
};

export default httpTrigger;
