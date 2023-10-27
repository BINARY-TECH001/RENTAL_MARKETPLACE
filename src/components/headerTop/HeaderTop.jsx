import React from 'react'
import { langList } from '../../constant'
import DropDown from '../dropDown/DropDown'
import './HeaderTop.css'

function HeaderTop() {
  return (
    <div>
      {/* Call start here*/}
      <div className="call">
        <i>Icon</i>
        <a href="tel:#"> Call: +234 9059 34366 02 </a>
      </div>
      {/* Call ends here */}

      {/* Login starts here */}
      <div className="login">
        <i>Icon</i>
        <span> Login </span>
      </div>
      {/* Login ends here */}

      {/* Currency starts here */}
      <div className="currency">
        <span> USD </span>
        <span> icon </span>

        <div className="displayOnHover">
          <a href="#"> Eur </a>
          <a href="#"> Usd </a>
        </div>
      </div>
      {/* currency ends here */}

      {/* Lang starts here */}
      <div className="lang">
        <span> ENG </span>
        <span> icon </span>
          {langList.map((lang) => (
              <DropDown list={lang} key={lang.id}/>
          ))}
      </div>
      {/* currency ends here */}


    </div>
  )
}

export default HeaderTop
