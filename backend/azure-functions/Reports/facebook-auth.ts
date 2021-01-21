import * as Axios from 'axios';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { TokenCache, IsExpired } from './token-cache';

const FACEBOOK_EXPIRATION_TIME_FACTOR = 1000;
const CLIENT_ID: string = '1279648522401260';
const CLIENT_SECRET: string = ''; // TODO: Extract from code before pushing branch and put in keyvault

let appToken: string;
let appTokenExpiration: number = 0;
let userTokenCache: TokenCache = new TokenCache();

export async function authenticate(req: HttpRequest, context: Context) : Promise<AuthenticationResult> {
    if (!req.body || !req.body.access_token) {
        return AuthenticationResult.NoCredentials;
    }

    if (userTokenCache.isCachedValidToken(req.body.access_token)) {
        return AuthenticationResult.Passed;
    }

    // TODO: log calls and authResponse.data.data.error in all responses

    if (IsExpired(appTokenExpiration)) {
        console.log('Acquiring app token');
        const appTokenResponse: Axios.AxiosResponse<any> = await Axios.default.get(
            'https://graph.facebook.com/oauth/access_token?client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET + '&grant_type=client_credentials'
        );

        if (appTokenResponse.status < 200 || appTokenResponse.status >= 300) {
            context.res.status = 500;
            context.done();
        }

        appToken = appTokenResponse.data.access_token;
    }

    console.log('Validating user token');
    const authResponse: Axios.AxiosResponse<any> = await Axios.default.get(
        'https://graph.facebook.com/debug_token?input_token=' + req.body.access_token + '&access_token=' + appToken,
    );

    if (authResponse.status < 200 || authResponse.status >= 300) {
        context.res.status = 500;
        context.done();
    }
    
    if (!authResponse.data?.data?.is_valid) {
        context.res = {
            status: 401,
            body: 'Authentication failed',
        }
    
        context.done();
        return AuthenticationResult.Failed;
    }

    appTokenExpiration = authResponse.data.data.data_access_expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR;
    userTokenCache.addToken(req.body.access_token, authResponse.data.data.expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR);

    return AuthenticationResult.Passed;
}

export enum AuthenticationResult {
    Passed,
    Failed,
    NoCredentials,
}