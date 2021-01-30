import { PassedAuthenticationResult, authenticate } from '../Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';

const allowedUserIds: string[] = [
  // TODO: add users
];

const IsSupervisor = async function (context: Context, req: HttpRequest): Promise<void> {
  const authenticatedUser: PassedAuthenticationResult = await authenticate(req, context, true) as PassedAuthenticationResult;
  if (!(authenticatedUser instanceof PassedAuthenticationResult)) return;

  if (allowedUserIds.indexOf(authenticatedUser.userId) > -1) {
    context.res = {
      status: 200,
      body: true,
    };
  } else {
    context.res = {
      status: 401,
      body: false,
    };
  }

  context.done();
};

export default IsSupervisor;
