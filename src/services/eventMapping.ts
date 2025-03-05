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

// Function to fetch event details by ID
const fetchEventDetails = async (eventId: string) => {
    try {
        const url = `http://sports.core.api.espn.com/v2/sports/football/leagues/nfl/events/${eventId}?lang=en&region=us`;
        const response = await axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching details for event ID ${eventId}:`, error);
        throw error; 
    }
};

export const mapEventIds = async (events: any) => {
    const eventMapping: { [key: string]: any } = {};
    
    if (events.items && events.items.length > 0) {
        // Collect all event IDs from the $ref strings
        const eventIds = events.items.map((eventRef: any) => eventRef.$ref.split('/').pop().split('?')[0]);

        // Fetch details for each event ID
        for (const eventId of eventIds) {
            const eventDetails = await fetchEventDetails(eventId);
            const eventName = eventDetails.name || `Event ${eventId}`;
            eventMapping[eventId] = {
                name: eventName,
                date: eventDetails.date,
                competitors: eventDetails.competitions[0].competitors,
                venue: eventDetails.venue || 'Unknown Venue'
            };
        }
    } else {
        console.warn('No events found in the response.');
    }
    
    return eventMapping;
};