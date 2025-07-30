import React from 'react'
import './styles/Popular.css'
import data_product from '../Assets/data'
import Card from './Card'

const Popular = () => {
  return (
    <div>
        <h1>POPULAR</h1>
        <div>
            {
                data_product.map((item,index) => {
                    return <Card key={index} item={item}/>
                })
            }
        </div>
    </div>
  )
}

export default Popular