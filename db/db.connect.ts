//db.connect.ts
import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "root",
  database: "tutorial-db",
});

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log("Connected to the databaseee");
  } catch (err) {
    console.error("Error connecting to the database", err);
    process.exit(1); // Exit the process with an error code
  }
};

const db = drizzle(client);
export { db, connectToDatabase };
