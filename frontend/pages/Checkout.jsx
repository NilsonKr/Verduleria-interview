import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/cart";
import useProductInfo from "../hooks/useProductInfo";
import postTransaction from "../utils/postTransaction";

import "../styles/Checkout.css";

const Checkout = (props) => {
  const { cartItems, resetCart } = useContext(Context);
  const info = useProductInfo();

  const handleBuy = async () => {
    try {
      const purchases = cartItems.map((item) => {
        return window.fetch(
          `https://verduleria-api-nilsonkr.vercel.app/products/${item.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              stock: item.stock,
            }),
          }
        );
      });

      const transactions = cartItems.map((prod) => {
        return postTransaction({ productId: prod.id, clientId: 1 });
      });

      await Promise.all(purchases);
      await Promise.all(transactions);

      resetCart();
      props.history.push("/");

      console.log("DONE!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="checkout__container">
      <article className="products">
        {cartItems.map((item) => (
          <div className="checkout--item" key={item.id}>
            <h3>{item.name}</h3>
            <em>Cantidad: {item.quantity}</em>
            <span>Precio: ${item.totalPrice}</span>
          </div>
        ))}
      </article>
      <div className="checkout--buy">
        <h2>
          Total Price <span>${info.totalPrice}</span>
        </h2>
        <button onClick={handleBuy}>Comprar</button>
      </div>
      <Link to="/history">Ver historial de transacciones</Link>
    </section>
  );
};

export default Checkout;
