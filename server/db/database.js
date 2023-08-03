// The sole purpose of this module is to establish a connection to your
// Postgres database by creating a Sequelize instance (called `db`).
// You shouldn't need to make any modifications here.
const { Sequelize } = require("sequelize");
const pkg = require("../../package.json");

let db;

if (process.env.NODE_ENV === "production") {
  // On Heroku, use the provided DATABASE_URL environment variable
  db = new Sequelize(process.env.DATABASE_URL, {
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  });
} else {
  // In development, use the local database URL
  db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
    logging: false,
  });
}

// Rest of the Sequelize configuration and model definitions go here

module.exports = db;
