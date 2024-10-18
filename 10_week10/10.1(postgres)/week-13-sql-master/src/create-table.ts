import { getClient } from "./utils";

async function createTable() {
    const createUserTableQuery = `
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;
//SERIAL: keep increasing sr no one by one
//PRIMARY KEY : USE TO uniquely identify a row in table
//UNIQUE: email must be unique
//NOT NULL : must have some value

    const client = await getClient();

    await client.query(createUserTableQuery);

    const createTodosQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL,
            description TEXT,
            user_id INTEGER REFERENCES users(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;
//VARCHAR(): it has limit to it but TEXT does not have any limit
//DEFAULT: it  will remain false until value isn,t changed explicitly
//BOOLEAN: used for bollen values
//user_id INTEGER REFERENCES users(id): use to establish relationship between users and todos using primary key of users table as a reference as concept of FOREIGN KEY
//INTEGER: datatype

    await client.query(createTodosQuery);

    console.log("Table created successfully!");
}



createTable();