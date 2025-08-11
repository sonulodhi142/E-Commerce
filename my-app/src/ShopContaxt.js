import React, { createContext, useState } from "react";
import all_product from "./Assets/all_product"

export const ShopContaxt = createContext(null);

const getDefaultCart = () =>{

    let Cart = {};
    for (let index = 0; index < all_product.length; index++){
        Cart[index] = 0;
    }
    return Cart;
}

const ShopCantaxtProvider = (props) =>{
    let [cartItems, setCartItem] = useState(getDefaultCart);
    
    const addCart = (itemId) =>{
        setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        alert("Your Product is Succesfully add to the Cart")
    }
    console.log(cartItems)


    const contaxtValue = {all_product, addCart, cartItems}

    return(
        <ShopContaxt.Provider value={contaxtValue}>
            {props.children}
        </ShopContaxt.Provider>
    )
}

export default ShopCantaxtProvider;