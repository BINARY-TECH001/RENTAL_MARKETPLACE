import React, { useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import { LiaUser } from 'react-icons/lia'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './HeaderTop.css'

function HeaderTop() {
  const [ dropDownVisible, setDropDownVisible ]= useState(false)
  
  const handleMouseEnterLang = () => {
    setDropDownVisible(true)
  }
  const handleMouseLeaveLang = () => {
    setDropDownVisible(false)
  }
  return (
    <div className='headerTop__wrapper headerTop__container'>
      <div className="headerTop__container container">
      <div className="call">
        <FiPhone className='iconCall' />
        <a href="tel:#"> Call: +234 9059 34366 02 </a>
      </div>

    <div className="otherInfo">
    <div className="login">
        <LiaUser className='icon' />
        <a href='#'> Login </a>
      </div>

      <div className="lang"
         onMouseEnter={handleMouseEnterLang}
         onMouseLeave={handleMouseLeaveLang}
      >
        <a href='#'> ENG </a>
        <MdOutlineKeyboardArrowDown className='icon' />
            {dropDownVisible && (
              <div className="langCon">
                <a href="#"> English </a>
                <a href="#"> French </a>
                <a href="#"> Spanish </a>
              </div>
            )}
      </div>
    </div>

      </div>
      
    </div>
  )
}

export default HeaderTop
