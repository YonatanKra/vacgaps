function onFacebookSDKLoaded() {
    FB.Event.subscribe('auth.statusChange', function (response) {
        // listen to auth events somewhere else in the app
    });

    // check previous status. should logging in in the user automatically
    FB.getLoginStatus(updateLoginStatus);
}

function onLoginClicked() {
    // available scopes: https://developers.facebook.com/docs/permissions/reference/
    FB.login(updateLoginStatus, { scope: 'public_profile,email,user_age_range' });
}

function onLogoutClicked() {
    try {
        FB.logout(updateLoginStatus);
    } catch { }
}

function updateLoginStatus(status) {
    console.log("status changed:", status);
    const statusElement = document.getElementById("login-status");
    if (!statusElement) return;
    statusElement.innerHTML = status.status;
}

function loadFacebookSDK() {
    // snippet took from facebook docs
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
}

loadFacebookSDK();