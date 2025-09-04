import React, { useContext, useState } from 'react'
import img from '../Assets/product_1.png'
import './styles/Card.css'
import { ShopContaxt } from '../ShopContaxt'
import all_product from '../Assets/all_product'

const Card = ({item}) => {
  const {addToCart} = useContext(ShopContaxt);

  
  return (
    <div className='Card'>
        <img src={item.image} alt='image'/>
        <p>{item.name}</p>
        <h3>{item.new_price}</h3>
        <h4><del>{item.old_price}</del></h4>
        <button onClick={()=> addToCart(item.id)}>add</button>
    </div>
  )
}

export default Card