\c testPet;


CREATE TABLE Country
(
    id           SERIAL PRIMARY KEY,
    country_name VARCHAR(255) NOT NULL
);

CREATE TABLE State
(
    id         SERIAL PRIMARY KEY,
    state_name VARCHAR(255) NOT NULL,
    country_id INT          NOT NULL,
    FOREIGN KEY (country_id) REFERENCES Country (id)
);

CREATE TABLE City
(
    id        SERIAL PRIMARY KEY,
    city_name VARCHAR(255) NOT NULL,
    state_id  INT          NOT NULL,
    FOREIGN KEY (state_id) REFERENCES State (id)
);

/* Dog information and users */

CREATE TABLE Breed
(
    id         SERIAL PRIMARY KEY,
    breed_name VARCHAR(255) NOT NULL
);

CREATE TABLE Pet
(
    id       SERIAL PRIMARY KEY,
    age      INT          NOT NULL,
    pet_name VARCHAR(255) NOT NULL,
    type     VARCHAR(255) NOT NULL,
    breed_id INT          NOT NULL,
    FOREIGN KEY (breed_id) REFERENCES Breed (id)
);

INSERT INTO Breed(breed_name) VALUES ('German Shepard');

SELECT * FROM Breed;