# Drizzle ORM with PostgreSQL Tutorial NodeJS

A tutorial project demonstrating how to use Drizzle ORM with PostgreSQL for database migrations.

## Prerequisites

- Node.js
- PostgreSQL
- pgAdmin (optional, for database management)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/drizzle-postgres-tutorial.git
    cd drizzle-postgres-tutorial
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Configure the database connection in `drizzle.config.ts` and `db/db.connect.ts` with your PostgreSQL credentials.

## Running the Project

1. Start the PostgreSQL server and ensure it's running.

2. Start the Express server:
    ```sh
    npm start
    ```

    The server will start at `http://localhost:3000`.

## Database Migrations

1. Generate a new migration:
    ```sh
    npm run migration:generate
    ```

2. Apply the migration to the database:
    ```sh
    npm run migration:push
    ```

## Project Structure

- `index.ts`: Main entry point of the application.
- `drizzle.config.ts`: Configuration for Drizzle ORM.
- `db/db.connect.ts`: Database connection setup.
- `db/schema.ts`: Database schema definition.
- `migrate.ts`: Script to run database migrations.

## License

This project is licensed under the MIT License.
