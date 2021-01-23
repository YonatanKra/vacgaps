import * as FacebookAuth from '../Auth/facebook-auth';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';

const httpTrigger = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  const authResult: FacebookAuth.AuthenticationResult = await FacebookAuth.authenticate(req, context);

  if (authResult instanceof FacebookAuth.PassedAuthenticationResult) {
    context.res = {
      status: 200,
      body: authResult.userId,
    };
    context.done();
  }
};

export default httpTrigger;
