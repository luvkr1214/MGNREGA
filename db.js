const path = require("path");
const fs = require("fs");
const Database = require("better-sqlite3");

const dir = path.join(__dirname, "data");
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const dbPath = path.join(dir, "cache.db");
const db = new Database(dbPath);

// ✅ Use consistent table name
db.prepare(`
  CREATE TABLE IF NOT EXISTS cached_districts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    state TEXT,
    district TEXT,
    month TEXT,
    payload TEXT,
    last_fetched INTEGER,
    UNIQUE(state, district, month)
  )
`).run();

console.log("✅ SQLite database initialized at:", dbPath);
module.exports = db;
