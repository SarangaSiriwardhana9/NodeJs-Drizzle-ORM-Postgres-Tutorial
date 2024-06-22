//index.ts
import express from 'express';
import { connectToDatabase } from './db/db.connect';

const app = express();
const port = 3000;

// Middleware or route handlers can go here

const startServer = async () => {
  try {
    await connectToDatabase(); // Ensure database connection is established
    console.log('Database connection established');
    
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  } catch (err) {
    console.error('Failed to establish database connection', err);
    process.exit(1); // Exit the process with an error code
  }
};

startServer();
