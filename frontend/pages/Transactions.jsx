import React, { useState, useEffect } from "react";

import "../styles/Transactions.css";

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    window
      .fetch("https://verduleria-api-nilsonkr.vercel.app/transactions/1")
      .then((res) => res.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(transactions);

  return (
    <section className="transactions__container">
      <div className="transactions__list">
        {transactions.map((tran) => (
          <article className="transaction--item" key={tran.id}>
            <h2>{tran.name}</h2>
            <em>{tran.precio}</em>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Transactions;
