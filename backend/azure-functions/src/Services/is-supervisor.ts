
const allowedUserIds: string[] = [
    // TODO: add users
    '1044662142669968',
    '3596887527086158',
];

export function isSupervisor(userId: string): boolean {
    return allowedUserIds.indexOf(userId) > -1;
}
