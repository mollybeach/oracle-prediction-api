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

## Configuration
Create a `.env` file and add API keys and database credentials.


## Fetching and Mapping Events

To fetch NFL events and map their IDs, you can run the following script:

```sh
ts-node scripts/fetchEvents.ts
```

This script will retrieve the events from the ESPN API and log the mapping of event names to their corresponding IDs.

## TODOs for Oracle Integration
1. **Research UMA Protocol**:
   - Understand how UMA (Universal Market Access) works and how it can be integrated in the application.
   - Review UMA's documentation and examples to see how it handles oracle solutions.

2. **Define Oracle Requirements**:
   - Determine what data needs to be fetched from the oracle.
   - Identify the specific events or conditions that will trigger oracle interactions.

3. **Set Up Oracle Integration**:
   - Decide whether the oracle integration should live in this repository or be a separate one.
   - If separate, create a new repository for the oracle integration and set up the necessary project structure.

4. **Implement Oracle Logic**:
   - Write the logic to interact with the UMA protocol.
   - Ensure that the application can fetch and utilize data from the oracle effectively.

5. **Testing**:
   - Create tests to ensure that the oracle integration works as expected.
   - Test various scenarios to validate the reliability of the oracle data.

 ### UMA Protocol Integration Steps
- **Asserting Data**: Implement a function to assert data to the UMA Optimistic Oracle. This will involve creating a smart contract that can submit assertions about events (e.g., "Team A won the match").
  
- **Handling Disputes**: Set up logic to handle disputes. If a dispute arises, the assertion will be sent to the DVM for resolution. Ensure that your application can respond to the outcome of these disputes.

- **Economic Incentives**: Understand and implement the economic incentives for asserters and disputers. This includes bonding assertions and rewarding correct disputes.

- **Testing the Integration**: Use test networks (like Görli) to test the integration of the UMA protocol. Ensure that assertions can be made, disputed, and resolved correctly.


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