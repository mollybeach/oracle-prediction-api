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
    
    if (events.items && events.items.length > 0) {
        events.items.forEach((eventRef: any) => {
            const eventId = eventRef.$ref.split('/').pop().split('?')[0];
            const eventName = eventRef.name || `Event ${eventId}`;
            if (eventId && eventName) {
                (eventMapping as any)[eventName] = eventId;
            } else {
                console.warn('Event ID or Name is undefined:', eventRef);
            }
        });
    } else {
        console.warn('No events found in the response.');
    }
    
    return eventMapping;
};

