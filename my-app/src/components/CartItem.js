import React, { useContext } from 'react'
import { ShopContaxt } from '../ShopContaxt'
import all_product from '../Assets/all_product';

const CartItem = () => {

    const {cartItems} = useContext(ShopContaxt);
  return (
    <div>
        <h1>hello</h1>
        {
            all_product.map((e)=> {
                if(cartItems[e.id]>0){
                    return <div>
                        <img src={e.image} alt="" />
                    </div>
                }
            })
        }
    </div>
  )
}

export default CartItem