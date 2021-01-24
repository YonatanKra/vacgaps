type Settings = {
    secrets: Secrets;
    getVacciDatabase: string;
    cosmosEndpoint: string;
    cosmosRejectUnauthorized: boolean, // allows self-signed certificate, required for local emulator

    vacGapsDatabase: string;
    mongoConnectionString: string;
    allowSelfSignedMongoCert: boolean;
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

    vacGapsDatabase: process.env.vacgaps_database || "",
    mongoConnectionString: process.env.mongo_connection_string || "",
    allowSelfSignedMongoCert: JSON.parse(process.env.allow_self_signed_mongo_cert || "false"),
};

const settingsByKey = {
    'dev': devSettings,
};

const settings = settingsByKey[process.env.settingskey || 'dev'];

export { settings as EnvironmentSettings };