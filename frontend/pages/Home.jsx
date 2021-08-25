import React, { useState, useContext } from "react";
import { Context } from "../context/cart";
import { productsContext } from "../context/products";
import useSortProducts from "../hooks/useSortProducts";

import Item from "../components/Item";

import Coconut from "../assets/coconut.svg";
import Cherry from "../assets/cherry.svg";

import "../styles/Home.css";

const Home = () => {
  const [category, setCategory] = useState("all");
  const [sortProducts, orderProducts] = useSortProducts();
  const { addToCart } = useContext(productsContext);
  const { addItemToCart } = useContext(Context);

  const handleAddToCart = (item) => {
    addToCart(item);
    addItemToCart(item);
  };

  const selectCategory = (evt) => {
    const newCategory = evt.target.value;

    orderProducts(newCategory);
    setCategory(newCategory);
  };

  return (
    <main className="home__container">
      <section className="home__head">
        <div className="home__icons">
          <img src={Coconut} alt="Kawaii Coconut" width="70px" height="70px" />
          <img src={Cherry} alt="Kawaii Cherry" width="70px" height="70px" />
        </div>
        <h2>Fruits La Tiendita</h2>
      </section>
      <select
        className="home__category"
        value={category}
        onChange={selectCategory}
      >
        <option value="all">Todo</option>
        <option value="dulces">Dulces</option>
        <option value="semiacidas">SemiAcidas</option>
        <option value="acidas">Acidas</option>
        <option value="neutras">Neutras</option>
        <option value="verduras">Verduras</option>
      </select>
      <section className="home__list">
        {sortProducts.map((product) => (
          <Item
            product={product}
            key={product.id}
            handleAdd={handleAddToCart}
          />
        ))}
      </section>
    </main>
  );
};

export default Home;
