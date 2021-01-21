import * as Axios from 'axios';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { TokenCache, IsExpired } from './token-cache';
import getClientSecret from './client-secret';

const FACEBOOK_EXPIRATION_TIME_FACTOR = 1000;
const CLIENT_ID: string = '1279648522401260';

let appToken: string;
let appTokenExpiration: number = 0;
let userTokenCache: TokenCache = new TokenCache();

export async function authenticate(
        req: HttpRequest,
        context: Context,
        allowNoCredentials: boolean = false) : Promise<AuthenticationResult> {

    // TODO: log calls, returns and authResponse.data.data.error

    if (!req.body || !req.body.access_token) {
        if (allowNoCredentials) {
            console.log('NoCredentials');
            return NoAuthenticationResult.NoCredentials;
        }

        console.log('Failed due to no credentials');
        context.res.status = 401;
        context.done();
        return NoAuthenticationResult.Failed;
    }

    let userId: string | null = userTokenCache.getUserIdFromValidToken(req.body.access_token);
    if (userId != null) {
        console.log('Passed from cache');
        return new PassedAuthenticationResult(userId);
    }

    if (IsExpired(appTokenExpiration)) {
        console.log('Acquiring app token');
        const clientSecret: string = await getClientSecret();
        const appTokenResponse: Axios.AxiosResponse<any> = await Axios.default.get(
            'https://graph.facebook.com/oauth/access_token?client_id=' + CLIENT_ID + '&client_secret=' + clientSecret + '&grant_type=client_credentials'
        );

        if (appTokenResponse.status < 200 || appTokenResponse.status >= 300) {
            console.log('InternalError because app access token request failed')
            context.res.status = 500;
            context.done();
            return NoAuthenticationResult.InternalError;
        }

        appToken = appTokenResponse.data.access_token;
    }

    console.log('Validating user token');
    const authResponse: Axios.AxiosResponse<any> = await Axios.default.get(
        'https://graph.facebook.com/debug_token?input_token=' + req.body.access_token + '&access_token=' + appToken,
    );

    if (authResponse.status < 200 || authResponse.status >= 300) {
        console.log('InternalError because user access token verification request failed')
        context.res.status = 500;
        context.done();
        return NoAuthenticationResult.InternalError;
    }
    
    if (!authResponse.data?.data?.is_valid) {
        console.log('Failed because facebook responded that token not valid')
        context.res = {
            status: 401,
            body: 'Authentication failed',
        }
    
        context.done();
        return NoAuthenticationResult.Failed;
    }

    userId = authResponse.data.data.user_id;
    appTokenExpiration = authResponse.data.data.data_access_expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR;
    userTokenCache.addToken(req.body.access_token, authResponse.data.data.expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR, userId);

    console.log('Passed')
    return new PassedAuthenticationResult(userId);
}

export class PassedAuthenticationResult {
    constructor(public userId: string) { }
}

export enum NoAuthenticationResult {
    Failed,
    NoCredentials,
    InternalError
}

export type AuthenticationResult = PassedAuthenticationResult | NoAuthenticationResult;