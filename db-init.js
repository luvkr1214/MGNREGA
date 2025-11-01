const db = require("./db");

db.prepare("DROP TABLE IF EXISTS cached_districts").run();

db.prepare(`
  CREATE TABLE IF NOT EXISTS cached_districts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    state TEXT,
    district TEXT,
    month TEXT,
    payload TEXT,
    last_fetched INTEGER
  )
`).run();

console.log("✅ Database reset done!");
