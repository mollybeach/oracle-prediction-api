// path: src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Oracle NFL Integration API is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// path: src/config/env.ts
import dotenv from 'dotenv';
dotenv.config();

export const config = {
    ESPN_API_URL: "https://site.api.espn.com/apis/site/v2/sports/football/nfl",
    ORACLE_CONTRACT_ADDRESS: process.env.ORACLE_CONTRACT_ADDRESS || '',
    PORT: process.env.PORT || 5000
};