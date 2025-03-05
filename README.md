# Oracle Prediction API

## Description
Oracle Prediction API is a backend service that fetches NFL team and match data from ESPN, maps the data to event IDs, and integrates it with a blockchain oracle for resolving smart contract-based competitions.

### Features
- Fetch real-time NFL team and event data from ESPN
- Map team names to team IDs for contract integration
- Store and retrieve match event IDs
- Connect to a blockchain oracle to resolve competitions
- Automate event resolution with smart contracts

## Installation
```sh
npm install
```

## Running the Project
```sh
npm run dev
```

## API Endpoints
- `GET /teams` - Fetches team mappings
- `GET /events` - Fetches NFL event IDs
- `POST /competition` - Creates a competition with oracle integration

## Configuration
Create a `.env` file and add API keys and database credentials.

## License
MIT

// path: src/index.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

## Project Structure
```
oracle-nfl-integration/
│── src/
│   ├── config/
│   │   ├── env.ts                # Environment variable handling
│   │   ├── constants.ts           # Constants like API URLs
│   │   ├── db.ts                  # Database connection setup (PostgreSQL, MongoDB, or Redis)
│   │   ├── oracle.ts              # Oracle smart contract interactions
│   │   ├── network.ts             # Blockchain network config
│   ├── services/
│   │   ├── espnApi.ts             # Fetch ESPN team and event data
│   │   ├── teamMapping.ts         # Process and store team -> ID mappings
│   │   ├── matchMapping.ts        # Process and store match (event) IDs
│   │   ├── oracleHandler.ts       # Interact with Oracle to update events
│   ├── routes/
│   │   ├── auth.ts                # Authentication routes (if needed)
│   │   ├── competitions.ts        # Routes for creating & managing competitions
│   │   ├── oracle.ts              # API endpoints for fetching oracle data
│   ├── middleware/
│   │   ├── authMiddleware.ts      # Authentication middleware
│   │   ├── errorHandler.ts        # Error handling middleware
│   ├── models/
│   │   ├── Team.ts                # Team schema/model (if using a database)
│   │   ├── Match.ts               # Match schema/model
│   ├── utils/
│   │   ├── logger.ts              # Logging utility
│   │   ├── helper.ts              # Generic helper functions
│   ├── index.ts                   # Main entry point
│
│── scripts/
│   ├── fetchTeams.ts              # One-time script to populate teams
│   ├── fetchEvents.ts             # One-time script to populate match events
│
│── tests/
│   ├── espnApi.test.ts            # Test ESPN API interactions
│   ├── oracle.test.ts             # Test Oracle integration
│
│── .env                           # Environment variables
│── .gitignore                     # Ignore sensitive files
│── package.json                    # Dependencies and scripts
│── README.md                      # Documentation
│── tsconfig.json                   # TypeScript configuration
```