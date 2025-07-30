import React from 'react'
import HomeCrousal from './HomeCrousal'
import './styles/home.css'
import Card from './Card'
import Popular from './Popular'
import Catagory from './Catagory'

const Home = () => {
  return (
    <div className='body'>
      <Catagory dataType='women'/>
      <HomeCrousal/>
      <Popular/>
    </div>
  )
}

export default Home