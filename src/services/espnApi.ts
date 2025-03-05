// path: src/services/espnApi.ts
import axios from 'axios';
import { ESPN_API_URL } from '../config/env';

export const fetchTeams = async () => {
    const response = await axios.get(ESPN_API_URL);
    return response.data;
};

export const fetchMatches = async () => {
    const response = await axios.get(ESPN_API_URL);
    return response.data;
};
