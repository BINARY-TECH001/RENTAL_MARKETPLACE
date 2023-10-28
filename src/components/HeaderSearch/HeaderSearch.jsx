import './headerSearch.css';
import { LiaSearchSolid } from 'react-icons/lia';
import { BiShuffle } from 'react-icons/bi';
import { FiHeart } from 'react-icons/fi';
import { LiaShoppingCartSolid } from 'react-icons/lia';
import React from 'react'

const HeaderSearch = () => {
  return (
    <div className='HeaderSearchwrapper'>
      <div className="container HeaderSearchContainer">
        <div className="logo__container">
            <h4> RentAll Market </h4>
        </div>

        <div className="search__container">
            <div className="filterCategory">
                <select>
                    <option value="All">All Department</option>
                    <option value="House">House</option>
                    <option value="Room">- Room</option>
                    <option value="Shop">- Shop</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Cameras">- Cameras</option>
                    <option value="Smart Tvs">- Smart Tvs</option>
                    <option value="Motors">Motors</option>
                    <option value="Cars & Trucks"> - Cars & Trucks</option>
                    <option value="Boats">- Boats</option>
                    <option value="Party"> Party Materials </option>
                    <option value="Tent"> - Canopy </option>
                    <option value="Table"> - Table </option>
                    <option value="Chair"> - Chair </option>
                </select>

            </div>
                <div className="icon__container"> 
                    <input type="text" placeholder='Search Products...' />
                    <div className="searchCon">
                    <LiaSearchSolid className='searchIcon' /> 
                    </div>
                </div>
        </div>

        <div className="cart__wishList">
            <BiShuffle className='icon' />
            <div className="heart__container">
                <FiHeart className='icon' />
                <spam className="num"> 2 </spam>
            </div>
            <div className="heart__container">
                <LiaShoppingCartSolid className='icon' />
                <span className="num"> 2 </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderSearch
