// path: src/services/matchMapping.ts

import { fetchMatches } from './espnApi';

export const mapMatches = async () => {
    const matches = await fetchMatches();
    return matches;
};


