// path: scripts/fetchEvents.ts

import { fetchEvents, mapEventIds } from '../src/services/eventMapping';

const run = async () => {
    try {
        const events = await fetchEvents();
        const eventMapping = await mapEventIds(events);
        console.log('Event Mapping:', eventMapping);
    } catch (error) {
        console.error('Failed to fetch and map events:', error);
    }
};

run();
