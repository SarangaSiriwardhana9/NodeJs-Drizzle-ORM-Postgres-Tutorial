import { pgTable, varchar, uuid } from 'drizzle-orm/pg-core';

const userSchema = pgTable("users", {
    id: uuid("id").primaryKey(),
    name: varchar("name").notNull(),
    bio: varchar("bio").notNull(),
});

export default userSchema; // Add default export here
