import React, { useContext } from 'react'
import img from '../Assets/product_1.png'
import './styles/Card.css'
import { ShopContaxt } from '../ShopContaxt'

const Card = ({item}) => {
  const {addCart} = useContext(ShopContaxt);

  return (
    <div className='Card'>
        <img src={item.image} alt='image'/>
        <p>best way to purches the things correctly</p>
        <h3>Rs-100</h3>
        <h4><del>Rs-15o</del></h4>
        <button onClick={()=> addCart(item.id)}>add</button>
    </div>
  )
}

export default Card