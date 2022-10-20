
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "aircraft" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "user_id" INT
);

ALTER TABLE "user"
ADD "picture" VARCHAR (250);

CREATE TABLE "item" (
    "id" SERIAL PRIMARY KEY,
    "description" VARCHAR (150) NOT NULL,
    "category" VARCHAR (50),
    "aircraft_id" INT
);

INSERT INTO "item" ("description", "category", "aircraft_id")
VALUES ('Fuel Shutoff Valve: Open', 'before_engine', '1'), ('Brakes: Test & Set', 'before_engine', '1'); 


-- Before Engine Start Data for Cessna 152
INSERT INTO "item" ("description", "category", "aircraft_id")
VALUES ('Mixture: Rich', 'before_engine', '1'), ('Carburetor heat: COLD (in)', 'before_engine', '1'), ('Throttle: OPEN 1/2in', 'before_engine', '1'),
('Master Switch: ON', 'before_engine', '1'), ('Ignition: Start', 'before_engine', '1'), ('Throttle: Adjust for 1000 RPM', 'before_engine', '1'),
('NAV Lights: ON as Required', 'before_engine', '1');

-- Taxi (Cessna 152)
INSERT INTO "item" ("description", "category", "aircraft_id")
VALUES ('Parking Brake: SET', 'taxi', '1'), ('Fuel Shutoff Valvel: OPEN', 'taxi', '1'), ('Mixture: RICH (below 3000ft)', 'taxi', '1'),
('Strobe: ON', 'taxi', '1'), ('Parking Brake: RELEASE', 'taxi', '1');

-- Run-Up/Takeoff (Cessna 152)
INSERT INTO "item" ("description", "category", "aircraft_id")
VALUES
    ('Carburetor Heat: COLD (in)', 'run_up', '1'),
    ('Throttle: FULL', 'run_up', '1'),
    ('Elevator Control: LIFT NOSE WHEEL at 50kts', 'takeoff', '1');
