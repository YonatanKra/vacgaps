import { Context, HttpRequest } from "azure-functions-ts-essentials";
import { EnvironmentSettings } from "../Settings/EnvironmentSettings";

type AzureFunction = (context: Context, req: HttpRequest) => Promise<void>;

// TODO: Use more standard middleware infra
export function cors(azureFunc: AzureFunction) : AzureFunction {
    return async function (context: Context, req: HttpRequest) {
        await azureFunc(context, req);
        const originalDone = context.done;
        context.done = function(err?: Error, propertyBag?: {[key: string]: any}) {
            let matchingUrls = EnvironmentSettings.allowCorsUrls.filter(url => req.headers.origin.startsWith(url));
            const allowedUrl = matchingUrls.length > 0 ? matchingUrls[0] : EnvironmentSettings.allowCorsUrls[0];
            context.res.headers['Access-Control-Allow-Origin'] = allowedUrl;
            context.done = originalDone;
            context.done(err, propertyBag);
        };
    }
}