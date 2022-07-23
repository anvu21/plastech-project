CREATE TABLE "team"(
    "id" SERIAL PRIMARY KEY,
    "team" VARCHAR(255) UNIQUE,
    "point" INTEGER NOT NULL
);