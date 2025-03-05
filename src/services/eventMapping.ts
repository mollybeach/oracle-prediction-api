// path: src/services/eventMapping.ts

import { fetchMatches } from './espnApi';

export const mapEvents = async () => {
    const matches = await fetchMatches();
    return matches;
};

