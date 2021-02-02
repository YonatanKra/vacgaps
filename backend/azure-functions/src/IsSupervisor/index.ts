import { PassedAuthenticationResult, authenticate } from '../Services/Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { isSupervisor } from '../Services/is-supervisor';

const IsSupervisor = async function (context: Context, req: HttpRequest): Promise<void> {
  const authenticatedUser: PassedAuthenticationResult = await authenticate(
    req,
    context,
    /*allowNoCredentials=*/false,
    /*logUserId=*/true) as PassedAuthenticationResult;
  
  if (!(authenticatedUser instanceof PassedAuthenticationResult)) {
    context.log.info("IsSupervisor: User not authenticated");
    return;
  }

  const userId = authenticatedUser.userId;
  if (isSupervisor(userId)) {
    context.res = {
      status: 200,
      body: {isSupervisor:true},
    };
    context.log.info(`user ${userId} found in the supervisors list`);
  } else {
    context.res = {
      status: 200,
      body: {isSupervisor:false},
    };
    context.log.info(`user ${userId} wasn't found in the supervisors list`);
  }

  context.done();
};

export default IsSupervisor;
