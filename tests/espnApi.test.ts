// path: tests/espnApi.test.ts

import { fetchTeams } from '../src/services/espnApi';

describe('ESPN API', () => {
    it('should fetch teams', async () => {
        const teams = await fetchTeams();
        expect(teams).toBeDefined();
        expect(teams.length).toBeGreaterThan(0);
    });
});

