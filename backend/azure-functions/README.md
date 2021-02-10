## prerequisites to run locally:

Cosmos DB emulator: https://docs.microsoft.com/en-us/azure/cosmos-db/local-emulator

#### MAC

```
brew tap azure/functions
brew install azure-functions-core-tools
```

#### Windows:

- download [azure functions cli for window](https://go.microsoft.com/fwlink/?linkid=2135274)

- also requires dotnet to be installed on.

---

## run:

### Run Cosmos DB emulator
- Installation link in prerequisites section
- Use default endpoint https://localhost:8081

### Prepare secrets

- Facebook app secret from: https://developers.facebook.com/apps/1279648522401260/settings/basic/?business_id=229352928771577
- Cosmos DB secret from the emulator UI: https://localhost:8081/_explorer/index.html
- Set environment variables with the extracted values: FacebookClientSecret, devCosmosSecret

### Actual run
- make sure to run it under the backend\azure-functions folder

```
yarn
yarn build
yarn start
```

or

```
npm install
npm build
npm start
```

or simply hit `F5` if running on vs code

## deploy

Until automating the process:
```
yarn build
```
Copy node_modules into azure-functions/dist/ and then zip all azure-functions/dist/* into dist.zip
(TODO: We can have a package.json file in the zip, then we will be able to go to console in the portal and run npm install).
In Azure CLI:
```
Connect-AzAccount -Tenant "f084d812-1342-4d86-8bf1-f03ff8ac22c1" -SubscriptionId "8d9dd7e5-2464-4c47-a649-7676fc13da66"
az functionapp deployment source config-zip -g vacgaps -n getvacci --src .\dist.zip
```
If you get an error about MFA, use
```
az login --tenant f084d812-1342-4d86-8bf1-f03ff8ac22c1
```
And try again.
Within Azure portal - go to Configuration tab, and add the following settings:
FacebookClientSecret: take from https://developers.facebook.com/apps/1279648522401260/settings/basic/?business_id=229352928771577
ppeCosmosSecret: take from https://portal.azure.com/#@idanigrahotmail.onmicrosoft.com/resource/subscriptions/8d9dd7e5-2464-4c47-a649-7676fc13da66/resourceGroups/vacgaps/providers/Microsoft.DocumentDB/databaseAccounts/vacgaps-db/keys
settingskey: ppe

## deploy (old)

```
yarn build:production
yarn deploy
```

or

```
npm run build:production
npm run deploy
```

link to the function resource: https://portal.azure.com/#@idanigrahotmail.onmicrosoft.com/resource/subscriptions/8d9dd7e5-2464-4c47-a649-7676fc13da66/resourcegroups/vacgaps/providers/Microsoft.Web/sites/vacgaps/appServices
