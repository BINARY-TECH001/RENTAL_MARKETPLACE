import './Nav.css'

import React from 'react'
import  { BiMenu } from 'react-icons/bi'

function Nav() {
  return (
    <nav className='Nav__containerWrapper'>
      <div className="container Nav__container">
      <div className="categories__container">
        <span>Browse Categories</span>
        <BiMenu className='icons'/>
      </div>
      <div className="link_container">
        <a href='#'> Home </a>
        <a href='#'> About </a>
        <a href='#'> Products </a>
        <a href='#'> Accounts </a>
      </div>
      </div>
    </nav>
  )
}

export default Nav
