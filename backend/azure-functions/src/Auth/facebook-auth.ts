import * as Axios from 'axios';
import { Context, HttpRequest } from 'azure-functions-ts-essentials';
import { TokenCache, IsExpired } from './token-cache';
import { EnvironmentSettings } from '../Settings/EnvironmentSettings';

const FACEBOOK_EXPIRATION_TIME_FACTOR = 1000;
const CLIENT_ID: string = '1279648522401260';
const FACEBOOK_AUTH_SCHEME_LOWERCASE = 'facebook';

let appToken: string;
let appTokenExpiration: number = 0;
let userTokenCache: TokenCache = new TokenCache();

export async function authenticate(
    req: HttpRequest,
    context: Context,
    allowNoCredentials: boolean = false,
    logUserId: boolean = false): Promise<AuthenticationResult> {

    // TODO: log calls, returns and authResponse.data.data.error

    const authHeader: string = req.headers['authorization'] || req.headers['Authorization'];
    if (!authHeader || authHeader == '') {
        if (allowNoCredentials) {
            context.log.info('NoCredentials');
            return NoAuthenticationResult.NoCredentials;
        }

        context.log.info('Failed due to no credentials');
        context.res.status = 401;
        context.done();
        return NoAuthenticationResult.Failed;
    }

    if (authHeader.substring(0, FACEBOOK_AUTH_SCHEME_LOWERCASE.length + 1).toLowerCase() != FACEBOOK_AUTH_SCHEME_LOWERCASE + ' ') {
        context.log.info('Authorization header format not supported');
        context.res.status = 401;
        context.done();
        return NoAuthenticationResult.Failed;
    }

    const userToken: string = authHeader.substring(FACEBOOK_AUTH_SCHEME_LOWERCASE.length + 1);

    let userId: string | null = userTokenCache.getUserIdFromValidToken(userToken);
    if (userId != null) {
        if (logUserId) {
            context.log.info('Authorization token found on cache for user ' + userId)
        } else {
            context.log.info('Authorization token found on cache');
        }
        return new PassedAuthenticationResult(userId);
    }

    if (IsExpired(appTokenExpiration)) {
        context.log.info('Acquiring Facebook app token');
        const clientSecret: string = EnvironmentSettings.secrets.facebookClientSecret;
        const appTokenResponse: Axios.AxiosResponse<any> = await Axios.default.get(
            'https://graph.facebook.com/oauth/access_token?client_id=' + CLIENT_ID + '&client_secret=' + clientSecret + '&grant_type=client_credentials'
        );

        if (appTokenResponse.status < 200 || appTokenResponse.status >= 300) {
            context.log.error('InternalError: Facebook app access token request failed')
            context.res.status = 500;
            context.done();
            return NoAuthenticationResult.InternalError;
        }

        appToken = appTokenResponse.data.access_token;
    }

    context.log.info('Validating user token');
    const authResponse: Axios.AxiosResponse<any> = await Axios.default.get(
        'https://graph.facebook.com/debug_token?input_token=' + userToken + '&access_token=' + appToken,
    );

    appTokenExpiration = authResponse.data.data.data_access_expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR;

    if (authResponse.status < 200 || authResponse.status >= 300) {
        context.log.error('InternalError: Facebook user access token verification request failed')
        context.res.status = 500;
        context.done();
        return NoAuthenticationResult.InternalError;
    }

    if (!authResponse.data?.data?.is_valid) {
        context.log.info('Authentication failed: facebook responded that token not valid')
        context.res = {
            status: 401,
            body: 'Authentication failed',
        }

        context.done();
        return NoAuthenticationResult.Failed;
    }

    userId = authResponse.data.data.user_id;
    userTokenCache.addToken(userToken, authResponse.data.data.expires_at * FACEBOOK_EXPIRATION_TIME_FACTOR, userId);

    if (logUserId) {
        context.log.info('Authentication passed for user ' + userId);
    } else {
        context.log.info('Authentication passed');
    }
    return new PassedAuthenticationResult(userId);
}

export class PassedAuthenticationResult {
    constructor(public userId: string) { }
}

export enum NoAuthenticationResult {
    Failed = 'Failed',
    NoCredentials = 'NoCredentials',
    InternalError = 'InternalError',
}

export type AuthenticationResult = PassedAuthenticationResult | NoAuthenticationResult;