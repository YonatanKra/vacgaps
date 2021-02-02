import * as https from 'https';
import { CosmosClient, CosmosClientOptions } from '@azure/cosmos';
import { ComingFeedbackAccessor } from './coming-feedback-accessor';
import { Context } from 'azure-functions-ts-essentials';
import { EnvironmentSettings } from '../EnvironmentSettings';
import { VaccinesReportAccessor } from './vaccines-report-accessor';

export type SingleComingFeedback = {
    userId: string;
    reportId: string;
};

let clientSettings: CosmosClientOptions = {
    endpoint: EnvironmentSettings.cosmosEndpoint,
    key: EnvironmentSettings.secrets.cosmosSecret,
};

if (!EnvironmentSettings.cosmosRejectUnauthorized) {
    console.log('Allowing self signed certificate');
    clientSettings.agent = new https.Agent({
        rejectUnauthorized: false
    });
}

const client = new CosmosClient(clientSettings);

const database = client.database(EnvironmentSettings.getVacciDatabase);

const comingFeedbackContainer = database.container('ComingFeedback');
const vaccinesReportContainer = database.container('VaccinesReport');

export function getComingFeedbackAccessor(context: Context): ComingFeedbackAccessor {
    return new ComingFeedbackAccessor(comingFeedbackContainer, context);
}

export function getVaccinesReportAccessor(context: Context): VaccinesReportAccessor {
    return new VaccinesReportAccessor(vaccinesReportContainer, context);
}