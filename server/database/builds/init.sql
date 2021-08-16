BEGIN;

DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name varchar(100) not null,
    location varchar(100) not null
);

insert into users (name, location) values('Asmaa', 'Khanyunes');

COMMIT;