import { Pool } from "pg";

const connectionString =
  "postgres://ulywfjwp:OiFnqfdEw6iSd2x4gmP2Bey0pgy92vFk@kesavan.db.elephantsql.com/ulywfjwp";

const db = new Pool({ connectionString });

export default db;
