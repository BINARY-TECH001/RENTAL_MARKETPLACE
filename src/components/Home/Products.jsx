import React from 'react'
import './products.css'
import img1 from '../../assets/images/banners/banner-7.jpg'
import ProductImg1 from '../../assets/images/products/product-1.jpg'
import ProductImg2 from '../../assets/images/products/product-2.jpg'
import Category from './HomeCategory/Category'
import Swiper from './HomeCaroousel/Swiper'
import Card from '../ProductCard/Card'


const swiperList = [
  {
      id: 1,
      image: img1,
      title: "Amazing deal",
      body: "Beautiful Houses for Rent "
  },
  {
      id: 2,
      image: img1,
      title: "Amazing deal",
      body: "Beautiful Shops for Rent"
  },
]

const productsList = [
  {
    id: 1,
    name: "MacBook Pro 2018 16Inch",
    price: "#2,000 000",
    review: "12",
    cat: "laptop",
    oldNew: "New",
    color: "green",
    image: ProductImg1,
  },
  {
    id: 2,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "New",
    color: "green",
    image: ProductImg2,
  },
]

const Products = () => {
  return (
    <div className='products__wrapper'>
      <div className="slide__wrapper">
      <Swiper slides={swiperList} />
      </div>
      <Category />
      <div className="featured__container">
        <div className="head">
          <h4> Feartured Rents </h4>
          <div className="underline" />
        </div>
        <Card item={productsList} />
      </div>
    </div>
  )
}

export default Products
