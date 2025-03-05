// path: scripts/fetchTeams.ts

import { mapTeams } from '../src/services/teamMapping';

const teams = await mapTeams();
console.log(teams);
