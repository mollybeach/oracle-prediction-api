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
