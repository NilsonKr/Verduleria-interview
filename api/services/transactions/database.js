const db = require("../../db");

function getTransactions(id) {
  return new Promise((resolve, reject) => {
    db.query(
      "SELECT * FROM transactions JOIN products on products.id = transactions.product_id WHERE client_id=? ",
      [id],
      (err, results) => {
        if (err) reject(err);

        resolve(results);
      }
    );
  });
}

function createTransaction(data) {
  if (!data.clientId || !data.productId) {
    throw new Error("Required fields!");
  }

  return new Promise((resolve, reject) => {
    db.query(
      `INSERT INTO transactions (client_id, product_id) VALUES (${data.clientId},${data.productId}) `,
      (err, results) => {
        if (err) reject(err);

        resolve(results);
      }
    );
  });
}

module.exports = {
  getTransactions,
  createTransaction,
};
