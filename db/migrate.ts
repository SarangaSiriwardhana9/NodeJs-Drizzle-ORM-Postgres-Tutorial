import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { db, connectToDatabase } from './db.connect'; // Import connectToDatabase function

async function migrateData(){
    await connectToDatabase(); // Ensure database connection is established
    await migrate(db, { migrationsFolder: './drizzle' });
    process.exit(0);
}
migrateData().catch((err) => {
    console.error('Error migrating database', err);
    process.exit(0);
});
//test