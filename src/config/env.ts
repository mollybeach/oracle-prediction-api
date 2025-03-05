// path: src/config/env.ts

import dotenv from 'dotenv';

dotenv.config();

export const ORACLE_CONTRACT_ADDRESS = process.env.ORACLE_CONTRACT_ADDRESS || '';
export const ORACLE_CONTRACT_ABI = process.env.ORACLE_CONTRACT_ABI || '';
export const PORT = process.env.PORT || 5000;