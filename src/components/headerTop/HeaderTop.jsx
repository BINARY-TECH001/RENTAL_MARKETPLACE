import React from 'react'
import { langList } from '../../constant'
import DropDown from '../dropDown/DropDown'
import { FiPhone } from 'react-icons/fi'
import { LiaUser } from 'react-icons/lia'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import './HeaderTop.css'

function HeaderTop() {
  return (
    <div className='headerTop__container'>
      {/* Call start here*/}
      <div className="call">
        <FiPhone className='icon' />
        <a href="tel:#"> Call: +234 9059 34366 02 </a>
      </div>

    <div className="otherInfo">
    <div className="login">
        <LiaUser className='icon' />
        <span> Login </span>
      </div>

      <div className="currency">
        <span> USD </span>
        <MdOutlineKeyboardArrowDown className='icon' />

        <div className="displayOnHover">
          <a href="#"> Eur </a>
          <a href="#"> Usd </a>
        </div>
      </div>
      <div className="lang">
        <span> ENG </span>
        <MdOutlineKeyboardArrowDown />
          {langList.map((lang) => (
              <DropDown list={lang} key={lang.id}/>
          ))}
      </div>
    </div>
    </div>
  )
}

export default HeaderTop
