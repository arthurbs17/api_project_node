CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS application_user(
    uuid uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    "password" VARCHAR(20) NOT NULL,

);

INSERT INTO application_user
    (username, "password")
VALUES
    ('admin', crypt('admin', 'my_salt'));
