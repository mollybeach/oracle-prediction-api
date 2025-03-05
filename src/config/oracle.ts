// path: src/config/oracle.ts

import { ethers } from 'ethers';
import { ORACLE_CONTRACT_ADDRESS } from './env';
import { ORACLE_CONTRACT_ABI } from './env';


export const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
export const contract = new ethers.Contract(ORACLE_CONTRACT_ADDRESS, ORACLE_CONTRACT_ABI, provider);