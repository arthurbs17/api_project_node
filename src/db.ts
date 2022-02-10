import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const DBURI = process.env.DB_URI;

const connectionString = DBURI;

const db = new Pool({ connectionString });

export default db;
