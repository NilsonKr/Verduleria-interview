import { useState } from "react";

const useItems = (initialItems) => {
  const [items, setItems] = useState(initialItems);

  return [items, setItems];
};

export default useItems;
