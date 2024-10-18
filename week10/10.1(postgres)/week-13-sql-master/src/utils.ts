import { Client } from 'pg';

export async function getClient() {
    const client = new Client("your postgres url");
    await client.connect();
    return client;
}