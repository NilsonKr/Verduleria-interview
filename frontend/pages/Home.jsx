import React, { useState, useEffect, useContext } from "react";
// import useItems from "../hooks/useItems";
import { Context } from "../context/products";

import Item from "../components/Item";

import Coconut from "../assets/coconut.svg";
import Cherry from "../assets/cherry.svg";

import "../styles/Home.css";

const Home = () => {
  const [items, setItems] = useState([]);
  const { cartItems, addItemToCart } = useContext(Context);

  const addToCart = (item) => {
    const newItems = [...items];

    const newitem = newItems.find((pro) => pro.id === item.id);
    newitem.stock -= 1;

    setItems(newItems);
    addItemToCart(newitem);
  };

  useEffect(() => {
    window
      .fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="home__container">
      <section className="home__head">
        <div className="home__icons">
          <img src={Coconut} alt="Kawaii Coconut" width="70px" height="70px" />
          <img src={Cherry} alt="Kawaii Cherry" width="70px" height="70px" />
        </div>
        <h2>Fruits La Tiendita</h2>
      </section>
      <section className="home__list">
        {items.map((product) => (
          <Item product={product} key={product.id} handleAdd={addToCart} />
        ))}
      </section>
    </main>
  );
};

export default Home;
