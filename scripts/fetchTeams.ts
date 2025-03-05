// path: scripts/fetchTeams.ts

import { mapTeams } from '../src/services/teamMapping';

const run = async () => {
    try {
        const teams = await mapTeams();
        console.log('Teams:', teams);
    } catch (error) {
        console.error('Error fetching teams:', error);
    }
};

run();