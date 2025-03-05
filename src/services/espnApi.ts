// path: src/services/espnApi.ts
import axios from 'axios';
import { API_KEY, ESPN_TEAM_API_URL, ESPN_EVENT_API_URL } from '../config/env';

export const fetchTeams = async () => {
    try {
        const url = `${ESPN_TEAM_API_URL}`;
        console.log('Fetching teams from:', url);
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching teams:', error);
        throw error; 
    }
};

export const fetchMatches = async () => {
    const response = await axios.get(ESPN_EVENT_API_URL);
    return response.data;
};
