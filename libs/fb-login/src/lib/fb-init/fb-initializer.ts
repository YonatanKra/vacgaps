export function fbInitializer(facebookAppId) {
  return new Promise((res) => {
    window['fbAsyncInit'] = function() {
      FB.init({
        appId: facebookAppId,
        cookie: true,
        xfbml: true,
        version: 'v8.0'
      });

      FB.getLoginStatus(({ authResponse }) => {
        res(authResponse);
      });
    };

    (function(d, s, id) {
      const fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      const js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = `https://connect.facebook.net/${navigator.language.replace(
        '-',
        '_'
      )}/sdk.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
  });
}
