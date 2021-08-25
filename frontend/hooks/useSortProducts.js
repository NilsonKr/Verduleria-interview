import { useState, useContext, useEffect } from "react";
import { productsContext } from "../context/products";

const useSortProducts = () => {
  const { products } = useContext(productsContext);
  const [items, setItems] = useState(products);

  const sortProductsByCategory = (category) => {
    if (category === "all") {
      setItems(products);
      return;
    }

    const newProducts = products.filter((prod) => prod.category === category);

    setItems(newProducts);
  };

  useEffect(() => {
    if (!items.length) {
      setItems(products);
    }
  }, [products]);

  return [items, sortProductsByCategory];
};

export default useSortProducts;
