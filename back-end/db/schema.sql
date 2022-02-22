DROP DATABASE IF EXISTS sugarhigh_dev;
CREATE DATABASE sugarhigh_dev;

\c sugarhigh_dev;

DROP TABLE IF EXISTS baked;

CREATE TABLE baked (
    id SERIAL PRIMARY KEY, 
    name TEXT NOT NULL, 
    description TEXT, 
    price INT, 
    rating SMALLINT, 
    CHECK (rating >=0 AND rating <=5), 
    featured_bestseller BOOLEAN, 
    image TEXT
);
