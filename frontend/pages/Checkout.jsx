import React, { useContext } from "react";
import { Context } from "../context/cart";
import useProductInfo from "../hooks/useProductInfo";

import "../styles/Checkout.css";

const Checkout = (props) => {
  const { cartItems, resetCart } = useContext(Context);
  const info = useProductInfo();

  const handleBuy = async () => {
    try {
      const purchases = cartItems.map((item) => {
        console.log(item);
        return window.fetch(`http://localhost:3000/products/${item.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            stock: item.stock,
          }),
        });
      });

      await Promise.all(purchases);

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
    </section>
  );
};

export default Checkout;
