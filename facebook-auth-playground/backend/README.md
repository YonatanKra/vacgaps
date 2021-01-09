# Working with Facebook Auth at the backend
## References:
- [Web login](https://developers.facebook.com/docs/facebook-login/web)
- [Available permissions to ask for](https://developers.facebook.com/docs/permissions/reference)
- [Graph API](https://developers.facebook.com/docs/javascript/reference/FB.api)
---
## Get app access token
Used to variant actions
- GET request to `https://graph.facebook.com/oauth/access_token?client_id=416321649791285&client_secret=<client-secret-here>&grant_type=client_credentials`
- required query params:
    - client_id: our app id `416321649791285`.
    - client_secret: obtained from the app settings page at facebook dev portal.
- return type:
```
{
    "access_token": "the-token",
    "token_type": "bearer"
}
```
- NOTES:
    - we should find a way to save this one in cache to avoid fetch for each api request
- [docs reference](https://developers.facebook.com/docs/facebook-login/access-tokens/#apptokens)
---
## Verifying user token:
- GET request to `https://graph.facebook.com/debug_token?input_token=<user-access-token>&access_token=<app-access-token>`
- required query params:
    - input_token: the user access token for verifying
    - access_token: the app access token (from bullet 1)
- return type:
```
{
    "data": {
        "app_id": "416321649791285",
        "type": "USER",
        "application": "vacgaps",
        "data_access_expires_at": 1617973371,
        "expires_at": 1610204400,
        "is_valid": true,

        // scopes the user agreed to give us from what we asked for
        "scopes": [
            "email",
            "public_profile"
        ],
        "user_id": "the-user-id" // a number
    }
}
```
- if the token isn't valid, there will be an `error` object under `data`.
- we should verify the app_id with our app id.
- [docs reference](https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow#checktoken)
---
## Get user permissions:
- GET request to `https://graph.facebook.com/v9.0/<user-id>/permissions?access_token=<app-access-token>`
- required query params:
    - access_token: the app access token (from bullet 1)
- return type:
```
{
    "data": [
        {
            "permission": "email",
            "status": "granted"
        },
        {
            "permission": "public_profile",
            "status": "granted"
        },
        {
            "permission": "user_age_range",
            "status": "declined"
        }
    ]
}
```
---
## Remove permissions:
- incase we want to remove user from the app
- DELETE request to `https://graph.facebook.com/v9.0/<user-id>/permissions?access_token=<app-access-token>`
- required query params:
    - access_token: the app access token (from bullet 1)
- return type:
```
{
  "success": true
}
```