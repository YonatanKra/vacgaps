import { PassedAuthenticationResult, authenticate } from '../Services/Auth/facebook-auth';
import { Context, HttpMethod, HttpRequest } from 'azure-functions-ts-essentials';
import { VaccinesReportAccessor } from '../Services/DataAccess/vaccines-report-accessor';
import { getVaccinesReportAccessor } from '../Services/DataAccess/accessors';
import { isSupervisor } from '../Services/is-supervisor';

const Report = async function (context: Context, req: HttpRequest): Promise<void> {
    const authenticatedUser: PassedAuthenticationResult = await authenticate(
        req,
        context,
        /*allowNoCredentials=*/true,
        /*logUserId=*/req.method === HttpMethod.Put) as PassedAuthenticationResult;
    if (!(authenticatedUser instanceof PassedAuthenticationResult)) {
        context.log.info("Report: Unauthenticated call");
        return;
    }

    if (!isSupervisor(authenticatedUser.userId)) {
        context.log.info("Report: User is not in authenticated user list");
        return;
    }

    let vaccinesReportAccessor: VaccinesReportAccessor = getVaccinesReportAccessor(context);
    vaccinesReportAccessor.create(req.body);

    context.res = {
        status: 200,
        body: ('report saved'),
    };

    context.done();
};

export default Report;