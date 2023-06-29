DROP SCHEMA IF EXISTS "PetAdoption";

DROP TABLE IF EXISTS "City";
DROP TABLE IF EXISTS "State";
DROP TABLE IF EXISTS "Country";

DROP TABLE IF EXISTS "User";
DROP TABLE IF EXISTS "Pet";
DROP TABLE IF EXISTS "Breed";

CREATE SCHEMA "PetAdoption";

CREATE TABLE "Country"
(
    id           SERIAL PRIMARY KEY,
    country_name VARCHAR(255) NOT NULL
);

CREATE TABLE "State"
(
    id         SERIAL PRIMARY KEY,
    state_name VARCHAR(255) NOT NULL,
    country_id INT          NOT NULL,
    FOREIGN KEY (country_id) REFERENCES "Country" (id)
);

CREATE TABLE "City"
(
    id        SERIAL PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    state_id  INT          NOT NULL,
    FOREIGN KEY (state_id) REFERENCES "State" (id)
);

/* Dog information and users */

CREATE TABLE "Breed"
(
    id         SERIAL PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL
);

CREATE TABLE "Pet"
(
    id       SERIAL PRIMARY KEY,
    age      INT          NOT NULL,
    pet_name VARCHAR(255) NOT NULL,
    type     VARCHAR(255) NOT NULL,
    breed_id INT          NOT NULL,
    FOREIGN KEY (breed_id) REFERENCES "Breed" (id)
);

CREATE TABLE "User"
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password_hash TEXT NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    pet_id INT,
    FOREIGN KEY (pet_id) REFERENCES "Pet"(id)
);

SELECT * FROM "Breed";