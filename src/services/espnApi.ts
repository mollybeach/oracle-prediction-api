// path: src/services/espnApi.ts
import axios from 'axios';

const ESPN_API_URL = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';

export const fetchTeams = async () => {
    const response = await axios.get(ESPN_API_URL);
    return response.data;
};

// Additional functions to fetch events can be added here

