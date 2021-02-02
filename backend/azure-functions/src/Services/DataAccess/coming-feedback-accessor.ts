import { Container } from '@azure/cosmos';
import * as knex from 'knex';
import { SingleComingFeedback } from './single-coming-feedback';
import { ComingFeedbackCounts } from './coming-feedback-counts';
import { Context } from 'azure-functions-ts-essentials';

export class ComingFeedbackAccessor {
    constructor(private comingFeedbackContainer: Container, private context: Context) {}

    async hasNonExpiredFeedback(userId: string, reportId: string): Promise<boolean> {
        // TODO: Use QueryBuilder like knex
        //const query: string = knex('c').where({
        //    userId: authResult.userId,
        //    reportId: reportId,
        //}).toQuery();

        const query: string = 'SELECT * FROM c WHERE c.userId = \'' + userId + '\' AND c.reportId = \'' + reportId +
            '\' AND c.feedbackTime > \'' + this.getFeedbackExpirationTimeForSql() + '\'';
        this.context.log.info('hasNonExpiredFeedback DB query: ' + query);

        let iterator = this.comingFeedbackContainer.items.query({query});
        const alreadyHasFeedback: boolean = await iterator.hasMoreResults() && (await iterator.fetchNext()).resources.length > 0;
        return alreadyHasFeedback;
    }

    async create(feedback: SingleComingFeedback) {
        await this.comingFeedbackContainer.items.create(feedback);
    }

    async getFeedbackCountsForReports(reportIds: string[]): Promise<ComingFeedbackCounts> {
        // TODO: Use QueryBuilder like knex
        //const query: string = knex('c')
        //    .select('count(*) as count, reportId')
        //    .where('feedbackTime', '>', minTime)
        //    .whereIn('reportId', reportIds)
        //    .groupBy('reportId')
        //    .toQuery();

        const query: string =
            'SELECT COUNT(c.userId) AS count, c.reportId FROM c WHERE c.feedbackTime > \'' +
            this.getFeedbackExpirationTimeForSql() + '\' AND c.reportId IN (' +
            reportIds.map(reportId => '\'' + reportId + '\'').join(', ') + ') GROUP BY c.reportId';
        this.context.log.info('getFeedbackCountsForReports DB query: ' + query);

        const aggregated = await this.comingFeedbackContainer.items.query({query}).fetchAll();
        return {countByReportId: Object.fromEntries(aggregated.resources.map(record => [record.reportId, record.count]))};
    }

    private getFeedbackExpirationTimeForSql() {
        let minTime = new Date(Date.now());
        minTime.setHours(minTime.getHours() - 1);
        return minTime.toISOString();
    }
}