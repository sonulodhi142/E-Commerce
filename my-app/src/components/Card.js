import React from 'react'
import img from '../Assets/product_1.png'
import './styles/Card.css'

const Card = ({item}) => {
  return (
    <div className='Card'>
        <img src={item.image} alt='image'/>
        <p>best way to purches the things correctly</p>
        <h3>Rs-100</h3>
        <h4><del>Rs-15o</del></h4>
    </div>
  )
}

export default Card