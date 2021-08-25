import React, { useState, useEffect } from "react";

export const productsContext = React.createContext({ products: [] });

const products = (props) => {
  const [items, setItems] = useState([]);
  const [sortedProducts] = useState([]);

  useEffect(() => {
    window
      .fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.log(err));
  }, []);

  const addToCart = (item) => {
    const newItems = [...items];

    const newitem = newItems.find((prod) => prod.id === item.id);
    newitem.stock -= 1;

    setItems(newItems);
  };

  return (
    <productsContext.Provider value={{ products: items, addToCart }}>
      {props.children}
    </productsContext.Provider>
  );
};

export default products;
