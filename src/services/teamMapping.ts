// path: src/services/teamMapping.ts

import { fetchTeams } from './espnApi';

export const mapTeams = async () => {
    const teams = await fetchTeams();
    return teams;
};

// Additional functions to map events can be added here


