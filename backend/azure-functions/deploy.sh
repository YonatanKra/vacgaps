cd dist
zip -r dist.zip *
# get secret from downloading the publish profile from:
# https://portal.azure.com/#@idanigrahotmail.onmicrosoft.com/resource/subscriptions/8d9dd7e5-2464-4c47-a649-7676fc13da66/resourcegroups/vacgaps/providers/Microsoft.Web/sites/vacgaps/appServices
# copy the value named "userPWD"
export secret=
curl -X POST -u \$vacgaps:$secret --data-binary @dist.zip https://vacgaps.scm.azurewebsites.net/api/zipdeploy
