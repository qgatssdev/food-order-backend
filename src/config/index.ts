import dotenv from 'dotenv';
dotenv.config();

export const MONGO_URI = process.env.MONGO_URI || '';
export const APP_SECRET = 'App_Secret';
