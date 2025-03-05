// path: src/services/eventMapping.ts

import axios from 'axios';
import { ESPN_API_URL } from '../config/env';

export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${ESPN_API_URL}/events`);
        return response.data;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw error; 
    }
};

export const mapEventIds = (events: any) => {
    const eventMapping = {};
    events.forEach((event: any) => {
        const eventId = event.id;
        const eventName = event.name;
        (eventMapping as any)[eventName] = eventId;
    });
    return eventMapping;
};

