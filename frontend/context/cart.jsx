import React, { useReducer } from "react";

export const Context = React.createContext({ cartItems: [] });

function shopingCart(state, action) {
  switch (action.type) {
    case "addItem":
      return [...state, action.payload];
    case "updateItem":
      return action.payload;
    case "removeItem":
      return [...state];
    case "reset":
      return [];
  }
}

const cartProducts = (props) => {
  const [cartItems, setCartItems] = useReducer(shopingCart, []);

  //Add or Update Item Method
  const addItemToCart = (item) => {
    const indexOfItem = cartItems.findIndex(
      (cartItem) => item.id === cartItem.id
    );
    const newItem = { ...cartItems[indexOfItem] };

    if (indexOfItem >= 0) {
      const newItems = [...cartItems];

      //Increase quantity And replace in items array
      newItem.quantity = newItem.quantity + 1;
      newItem.totalPrice = newItem.quantity * newItem.precio;
      newItem.stock = item.stock;
      newItems[indexOfItem] = newItem;

      setCartItems({ type: "updateItem", payload: newItems });
    } else {
      const newItem = { ...item, quantity: 1, totalPrice: item.precio };

      setCartItems({ type: "addItem", payload: newItem });
    }
  };

  const resetCart = () => {
    setCartItems({ type: "reset" });
  };

  return (
    <Context.Provider value={{ cartItems, addItemToCart, resetCart }}>
      {props.children}
    </Context.Provider>
  );
};

export default cartProducts;
