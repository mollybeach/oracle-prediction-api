// path: scripts/fetchEvents.ts

import { mapEvents } from '../src/services/eventMapping';

const events = await mapEvents();
console.log(events);
