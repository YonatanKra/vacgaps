- This is just a test to make sure we are able to do our plan.
- How to actually implement ?
## Backend:
Make http requests to facebook Graph Api as described [here](./backend/README.md)

---

## Frontend:
- install this [types package](https://www.npmjs.com/package/@types/facebook-js-sdk)
- add the official snippet to the client-side 
```
   (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.onload = onFacebookSDKLoaded;
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = function () {
        FB.init({
            appId: '416321649791285', // vacgaps app
            cookie: true,
            xfbml: true,
            version: 'v9.0',
            status: true,
            oauth: true,
        });

        FB.AppEvents.logPageView(); // not sure about this line
    };
```
- make calls to the global `FB` handler as in the `index.js` example.
