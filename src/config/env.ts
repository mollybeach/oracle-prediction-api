// path: src/config/env.ts

import dotenv from 'dotenv';
import { ethers } from 'ethers';

dotenv.config();

export const ESPN_API_URL = 'https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams';
export const ORACLE_CONTRACT_ADDRESS = process.env.ORACLE_CONTRACT_ADDRESS || '';
export const ORACLE_CONTRACT_ABI = process.env.ORACLE_CONTRACT_ABI ? JSON.parse(process.env.ORACLE_CONTRACT_ABI) : '';
export const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
export const API_KEY = process.env.API_KEY || '';
export const provider = process.env.RPC_URL ? new ethers.JsonRpcProvider(process.env.RPC_URL) : undefined;

// const alchemyProvider = new ethers.AlchemyProvider("homestead", "YOUR_ALCHEMY_KEY");
// const etherscanProvider = new ethers.EtherscanProvider("homestead", "YOUR_ETHERSCAN_KEY");
// const defaultProvider = ethers.getDefaultProvider();