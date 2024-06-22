import express from 'express';
import { db, connectToDatabase } from './db/db.connect';

const app = express();

const startServer = async () => {
  await connectToDatabase(); // Ensure database connection is established
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
};

startServer();
