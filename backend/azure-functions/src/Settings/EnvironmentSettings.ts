type Settings = {
    secrets: Secrets;
    exampleCollection: string;
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
    exampleCollection: "examples",
    vacGapsDatabase: process.env.vacgaps_database || "",
    mongoConnectionString: process.env.mongo_connection_string || "",
    allowSelfSignedMongoCert: JSON.parse(process.env.allow_self_signed_mongo_cert || "false"),
};

const settingsByKey = {
    'dev': devSettings,
};

const settings = settingsByKey[process.env.settingskey || 'dev'];

export { settings as EnvironmentSettings };