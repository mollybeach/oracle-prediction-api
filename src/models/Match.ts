// path: src/models/Match.ts

import mongoose from 'mongoose';

const matchSchema = new mongoose.Schema({
    eventId: String,
    team1Id: String,
    team2Id: String,
    date: Date,
    venue: String,
    status: String,
    result: String,
    links: [{
        rel: String,
        href: String
    }]
});

const Match = mongoose.model('Match', matchSchema);

export default Match;