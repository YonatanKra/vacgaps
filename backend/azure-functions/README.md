## prerequisites to run locally:

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
