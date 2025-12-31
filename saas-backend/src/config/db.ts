import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

pool
  .connect()
  .then(() => console.log("✅ PostgreSQL connected"))
  .catch((err) =>
    console.error("❌ PostgreSQL connection failed:", err)
  );

export default pool;
