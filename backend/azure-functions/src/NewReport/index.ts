import * as FacebookAuth from '../Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';

async function isAuthenticatedRequest(context: Context, req: HttpRequest): Promise<boolean> {
    const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(req, context, true);
    if (!(authResult === FacebookAuth.NoAuthenticationResult.NoCredentials ||
        authResult instanceof FacebookAuth.PassedAuthenticationResult)) {
        return;
    }

    if (authResult === FacebookAuth.NoAuthenticationResult.NoCredentials) {
        context.log.info('No credentials, return the list with minimal data');

        context.res = {
            status: 401,
            body: JSON.stringify('auth token is required')
        };

        context.done();
        return;
    }
}

const newReport = async function (context: Context, req: HttpRequest): Promise<void> {
    if (!(await isAuthenticatedRequest(context, req))) return;

    // TODO: save the report to db

    context.res = {
        status: 200,
        body: ('report saved'),
    };

    context.done();
};

export default newReport;
