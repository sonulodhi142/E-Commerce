import React, { createContext, useState } from "react";
import all_product from "./Assets/all_product"

export const ShopContaxt = createContext(null);

const ShopCantaxtProvider = (props) =>{

    const [cartItems, setCartItem] = useState(null);
    

    const contaxtValue = {all_product}

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;