import { fetchEvents, mapEventIds } from '../src/services/eventMapping';

describe('Event Mapping', () => {
    it('should fetch events and map their IDs', async () => {
        const events = await fetchEvents();
        const eventMapping = mapEventIds(events);
        expect(eventMapping).toBeDefined();
        expect(Object.keys(eventMapping).length).toBeGreaterThan(0); // Ensure there are events mapped
    });
}); 