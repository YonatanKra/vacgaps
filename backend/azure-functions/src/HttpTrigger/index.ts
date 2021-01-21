import { Context, HttpRequest } from 'azure-functions-ts-essentials';

const httpTrigger = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log('HTTP trigger function processed a request.');

  context.res = {
    status: 200,
    body: 'Hello vacgaps 1',
  };
};

export default httpTrigger;
