type Settings = {
    secrets: Secrets;
    getVacciDatabase: string;
    cosmosEndpoint: string;
    cosmosRejectUnauthorized: boolean, // allows self-signed certificate, required for local emulator
    reportListUrl: string,

    vacGapsDatabase?: string;
    mongoConnectionString?: string;
    allowSelfSignedMongoCert?: boolean;
}

class Secrets {
    constructor(private envVariablePrefix: string) {}

    public get facebookClientSecret(): string {
        return process.env['FacebookClientSecret'];
    }

    public get cosmosSecret(): string {
        return process.env[this.envVariablePrefix + 'CosmosSecret'];
    }
}

const devSettings: Settings = {
    secrets: new Secrets('dev'),
    cosmosEndpoint: 'https://localhost:8081',
    getVacciDatabase: 'getvacci-dev',
    cosmosRejectUnauthorized: false,
    reportListUrl: 'https://www.getvacci.org.il/api/reports.json',
};

const ppeSettings: Settings = {
    secrets: new Secrets('ppe'),
    cosmosEndpoint: 'https://vacgaps-db.documents.azure.com:443/',
    getVacciDatabase: 'getvacci-ppe',
    cosmosRejectUnauthorized: true,
    reportListUrl: 'https://getvacci-ppe.azureedge.net/api/reports.json',
};

const prodSettings: Settings = {
    secrets: new Secrets('prod'),
    cosmosEndpoint: 'https://vacgaps-db.documents.azure.com:443/',
    getVacciDatabase: 'getvacci-prod',
    cosmosRejectUnauthorized: true,
    reportListUrl: 'https://www.getvacci.org.il/api/reports.json',
};

const settingsByKey = {
    'dev': devSettings,
    'ppe': ppeSettings,
    'prod': prodSettings,
};

const settings = settingsByKey[process.env.settingskey || 'dev'];

export { settings as EnvironmentSettings };