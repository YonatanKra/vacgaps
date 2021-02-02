import * as FacebookAuth from '../Services/Auth/facebook-auth';
import { getComingFeedbackAccessor } from '../Services/DataAccess/accessors';
import { SingleComingFeedback } from '../Services/DataAccess/single-coming-feedback';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';

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

    let accessor = getComingFeedbackAccessor(context);

    const alreadyHasFeedback: boolean = await accessor.hasNonExpiredFeedback(authResult.userId, reportId);

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

        await accessor.create(feedback);
    }

    context.res = {
        status: 200,
        body: 'Feedback recorded',
    };

    context.done();
};

export default httpTrigger;
