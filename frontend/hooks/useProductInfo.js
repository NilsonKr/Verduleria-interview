import { useContext } from "react";
import { Context } from "../context/cart";

const useProductInfo = () => {
  const { cartItems } = useContext(Context);

  const itemsInfo = cartItems.reduce(
    (acc, current) => {
      const newAcc = { ...acc };

      newAcc.quantity = newAcc.quantity + current.quantity;
      newAcc.totalPrice = newAcc.totalPrice + current.totalPrice;

      return newAcc;
    },
    { quantity: 0, totalPrice: 0 }
  );

  return itemsInfo;
};

export default useProductInfo;
