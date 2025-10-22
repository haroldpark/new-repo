// TODO: Configure PostgreSQL database connection
// import { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
// import * as schema from './schema';
// import dotenv from 'dotenv';

// dotenv.config();

// if (!process.env.POSTGRES_URL) {
//   throw new Error('POSTGRES_URL environment variable is not set');
// }

// export const client = postgres(process.env.POSTGRES_URL);
// export const db = drizzle(client, { schema });

// Mock exports for development without database
export const client = null as any;
export const db = null as any;
