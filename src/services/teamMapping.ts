// path: src/services/teamMapping.ts

import { fetchTeams } from './espnApi';

export const mapTeams = async () => {
    const response = await fetchTeams();
    console.log('Fetched Teams:', response);
    const teams = response.sports[0].leagues[0].teams.map((teamObj: any) => teamObj.team);
    return teams;
};

const mapTeamIds = (teams: any) => {
    const teamMapping = {};
    teams.forEach((team: any) => {
        const teamId = team.id;
        const teamName = team.name; 
        (teamMapping as any)[teamName] = teamId;
    });
    return teamMapping;
};

const run = async () => {
    const teams = await mapTeams();
    const teamMapping = mapTeamIds(teams);
    console.log('Team Mapping:', teamMapping);
};

run();

