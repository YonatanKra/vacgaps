import { PassedAuthenticationResult, authenticate } from '../Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { VaccinesReportAccessor } from '../DataAccess/vaccines-report-accessor';
import { getVaccinesReportAccessor } from '../DataAccess/accessors';
import { isSupervisor } from '../Services/is-supervisor';

const Report = async function (context: Context, req: HttpRequest): Promise<void> {
    const authenticatedUser: PassedAuthenticationResult = await authenticate(req, context, true) as PassedAuthenticationResult;
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
