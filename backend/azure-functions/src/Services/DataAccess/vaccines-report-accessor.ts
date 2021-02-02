import { Container } from '@azure/cosmos';
import { VaccinesReport, VaccinesReports } from './vaccines-report';
import { Context } from 'azure-functions-ts-essentials';

export class VaccinesReportAccessor {
    constructor(private reportContainer: Container, private context: Context) {}

    async create(report: VaccinesReport) {
        await this.reportContainer.items.create({
            id: undefined,
            ...report
        });
    }

    async getVaccinesReports(isOnlyMinimalData: boolean): Promise<VaccinesReports> {
        const fields: string = isOnlyMinimalData ? 'id, city, healthCareService' : '*';
        const query: string =
            'SELECT ' + fields + ' FROM c WHERE c.endTime > \'' + this.getStartOfDayForSql() + '\'';
        this.context.log.info('getVaccinesReports DB query: ' + query);

        const reports = await this.reportContainer.items.query({query}).fetchAll();
        return {reports: reports.resources};
    }

    private getStartOfDayForSql() {
        let minTime = new Date(Date.now());
        minTime.setHours(-3); // Capture timezone diff against GMT
        minTime.setMinutes(0);
        minTime.setSeconds(0);
        return minTime.toISOString();
    }
}