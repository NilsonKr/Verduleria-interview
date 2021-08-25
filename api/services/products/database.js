const db = require("../../db");

function list(filter) {
  let query = "SELECT * FROM products ";

  if (filter.category) {
    query += `WHERE category = '${filter.category}'`;
  }

  return new Promise((resolve, reject) => {
    db.query(query, (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
}

function update(id, data) {
  return new Promise((resolve, reject) => {
    db.query("UPDATE products SET ? WHERE id=?", [data, id], (err, data) => {
      if (err) reject(err);

      resolve(data);
    });
  });
}

module.exports = { list, update };
