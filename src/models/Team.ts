// path: src/models/Team.ts

import mongoose from 'mongoose';

const teamSchema = new mongoose.Schema({
    name: String,
    abbreviation: String,
    displayName: String,
    color: String,
    altColor: String,
    logos: [{
        href: String,
        width: Number,
        height: Number
    }],
    links: [{
        rel: String,
        href: String
    }]
});

const Team = mongoose.model('Team', teamSchema);

export default Team;