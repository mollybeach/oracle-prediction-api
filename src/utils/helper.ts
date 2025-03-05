// path: src/utils/helper.ts

export const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
};

export const getTeamId = (teamName: string) => {
    // Implement team ID mapping logic here
    return teamName;
};


