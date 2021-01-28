export function getFeedbackExpirationTimeForSql() {
    let minTime = new Date(Date.now());
    minTime.setHours(minTime.getHours() - 1);
    return minTime.toISOString();
}