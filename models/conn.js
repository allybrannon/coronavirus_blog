require("dotenv").config();

const pgp = require("pg-promise")({
  query: function(e) {
    console.log("QUERY", e.query);
  }
});

const options = {
  host: "localhost",
  database: "coronavirus_blog"
};

const db = pgp(options);

module.exports = db;
