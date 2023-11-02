import React from 'react'
import './products.css'
import img1 from '../../assets/images/banners/banner-7.jpg'
import ProductImg1 from '../../assets/images/products/product-1.jpg'
import ProductImg2 from '../../assets/images/products/product-2.jpg'
import ProductImg3 from '../../assets/images/products/product-3.jpg'
import ProductImg4 from '../../assets/images/products/product-4.jpg'
import ProductImg5 from '../../assets/images/products/product-5.jpg'
import ProductImg6 from '../../assets/images/products/product-6.jpg'

// Products Filter image
import productImage1 from '../../assets/images/products/product-10.jpg'
import productImage2 from '../../assets/images/products/product-11.jpg'
import productImage3 from '../../assets/images/products/product-12.jpg'
import productImage4 from '../../assets/images/products/product-13.jpg'
import productImage5 from '../../assets/images/products/product-14.jpg'
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
    cat: "Laptop",
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
    oldNew: "Top",
    color: "green",
    image: ProductImg2,
  },
  {
    id: 3,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "New",
    color: "green",
    image: ProductImg1,
  },
  {
    id: 4,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Out",
    color: "red",
    image: ProductImg3,
  },
  {
    id: 5,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "New",
    color: "green",
    image: ProductImg4,
  },
  {
    id: 6,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Out",
    color: "red",
    image: ProductImg5,
  },
  {
    id: 7,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Old",
    color: "green",
    image: ProductImg6,
  },
]


const productsFilterItems = [
  {
    id: 1,
    name: "MacBook Pro 2018 16Inch",
    price: "#2,000 000",
    review: "12",
    cat: "Laptop",
    oldNew: "New",
    color: "green",
    image: productImage1,
  },
  {
    id: 2,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Top",
    color: "green",
    image: productImage2,
  },
  {
    id: 3,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "New",
    color: "green",
    image: productImage3,
  },
  {
    id: 4,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Out",
    color: "red",
    image: productImage1,
  },
  {
    id: 5,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "New",
    color: "green",
    image: productImage4,
  },
  {
    id: 6,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Out",
    color: "red",
    image: productImage2,
  },
  {
    id: 7,
    name: "MacBook Pro 2018 16Inch",
    price: "#3,000 000",
    review: "12",
    cat: "Housing",
    oldNew: "Old",
    color: "green",
    image: productImage5,
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
          <h4> Featured Rents </h4>
          <div className="underline" />
        </div>
        <Card item={productsList} />
      </div>

      <div className="filterOptionProduct">
        <div className="title__container">
          <h5> 10 Products Found </h5>

          <div className="select">
            <span> Sort By: </span>
              <select name="item"> 
                <option value="Most Related"> Most Related </option>
                <option value="Most Rated"> Most Rated </option>
                <option value="Date"> Date </option>
              </select>
          </div>
        </div>

        <Card item={productsFilterItems} />
      </div>
    </div>
  )
}

export default Products
