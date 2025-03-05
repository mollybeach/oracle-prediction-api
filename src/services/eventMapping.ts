// path: src/services/eventMapping.ts
import axios from 'axios';
import { API_KEY, ESPN_EVENT_API_URL } from '../config/env';

export const fetchEvents = async () => {
    try {
        const url = ESPN_EVENT_API_URL;
        console.log('Fetching events from:', url);
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
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

