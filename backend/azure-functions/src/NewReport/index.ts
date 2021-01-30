import { PassedAuthenticationResult, authenticate } from '../Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';

const newReport = async function (context: Context, req: HttpRequest): Promise<void> {
    const authenticatedUser: PassedAuthenticationResult = await authenticate(req, context, true) as PassedAuthenticationResult;
    if (!(authenticatedUser instanceof PassedAuthenticationResult)) return;

    // TODO: save the report to db

    context.res = {
        status: 200,
        body: ('report saved'),
    };

    context.done();
};

export default newReport;
