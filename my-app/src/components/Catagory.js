import React from 'react'
import all_product from '../Assets/all_product'
import Card from './Card'

const Catagory = ({dataType}) => {
  return (
    <div>
        {
          all_product.map((item , i) => {
            if(item.category == dataType){
                return <Card key={i} item={item} />
            }
          })  
        }
    </div>
  )
}

export default Catagory