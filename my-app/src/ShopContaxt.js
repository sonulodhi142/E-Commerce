import React, { createContext, useState } from "react";
import all_product from "./Assets/all_product";

export const ShopContaxt = createContext(null);

const ShopCantaxtProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const product = all_product.find((item) => item.id == id);
    setCart((prev) => [...prev, product]);
    console.log(cart);
  };

  const contaxtValue = { all_product, addToCart };

  return (
    <ShopContaxt.Provider value={contaxtValue}>
      {props.children}
    </ShopContaxt.Provider>
  );
};

export default ShopCantaxtProvider;
