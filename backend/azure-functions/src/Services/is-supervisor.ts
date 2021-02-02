
const allowedUserIds: string[] = [
    '1044662142669968',
    '3596887527086158',
    '10158324461779221',
    '100002577668208',
];

export function isSupervisor(userId: string): boolean {
    return allowedUserIds.indexOf(userId) > -1;
}
