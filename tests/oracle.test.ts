// path: tests/oracle.test.ts

import { updateOracle } from '../src/services/oracleHandler';

describe('Oracle', () => {
    it('should update the oracle', async () => {
        const eventId = '123';
        const result = 'Team A wins';
        const tx = await updateOracle(eventId, result);
        expect(tx).toBeDefined();
    });
});

