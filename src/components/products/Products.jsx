import React from 'react'
import './products.css'
import { sliderData } from '../../constant'
import Swiper from 'swiper'

const Products = () => {
  return (
    <div className='products__wrapper'>
      {/* {sliderData.map(slide => (
        <Swiper slides={slide} />
      ))} */}
      <Swiper />
    </div>
  )
}

export default Products
