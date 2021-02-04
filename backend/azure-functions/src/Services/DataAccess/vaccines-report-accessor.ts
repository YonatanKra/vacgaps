import { Container } from '@azure/cosmos';
import { VaccinesReport, VaccinesReportId, VaccinesReports } from './vaccines-report';
import { Context } from 'azure-functions-ts-essentials';

export enum ReportsDataToReturn {
    Minimal = 'Minimal',
    Details = 'Details',
    DetailsAndHiddenReports = 'DetailsAndHiddenReports',
}

export class VaccinesReportAccessor {
    constructor(private reportContainer: Container, private context: Context) {}

    async create(report: VaccinesReport): Promise<{id: VaccinesReportId}> {
        const dbItem = {
            ...report,
            id: undefined,
            partitionKey: report.city + '_' + report.address, // Arbitrary for now
        };
        const response = await this.reportContainer.items.create(dbItem);
        return {id: {
            pKey: dbItem.partitionKey,
            internalId: response.item.id
        }};
    }

    async replace(report: VaccinesReport) {
        const dbItem = {
            ...report,
            id: report.id.internalId,
            partitionKey: report.id.pKey,
        };
        await this.reportContainer.item(report.id.internalId, report.id.pKey).replace(dbItem);
    }

    async getVaccinesReports(reportsDataToReturn: ReportsDataToReturn): Promise<VaccinesReports> {
        const fields: string = reportsDataToReturn === ReportsDataToReturn.Minimal ? 'id, city, healthCareService' : '*';
        const nonHiddenCondition = reportsDataToReturn === ReportsDataToReturn.DetailsAndHiddenReports ? '' : ' AND NOT c.hideReport';
        const query: string =
            'SELECT ' + fields + ' FROM c WHERE c.endTime > \'' + this.getStartOfDayForSql() + '\'' + nonHiddenCondition;
        this.context.log.info('getVaccinesReports DB query: ' + query);

        const reports = await this.reportContainer.items.query({query}).fetchAll();
        return {reports: reports.resources.map(report => {
            return {
                ...report,
                partitionKey: undefined,
                id: {
                    pKey: report.partitionKey,
                    internalId: report.id,
                }
            };
        })};
    }

    private getStartOfDayForSql() {
        let minTime = new Date(Date.now());
        minTime.setHours(-3); // Capture timezone diff against GMT
        minTime.setMinutes(0);
        minTime.setSeconds(0);
        return minTime.toISOString();
    }
}