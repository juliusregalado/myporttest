DROP TABLE IF EXISTS usersTest;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT,
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON userTest (last_name);
