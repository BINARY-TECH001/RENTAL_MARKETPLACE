import './newsLetter.css'

import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsLetter'>
        <div className="info">
            <h4> Join Our NewsLetter </h4>
            <p> Subscribe to get information about products and coupons </p>
        </div>
        <div className="input__container">
            <input type="email" placeholder='Enter Your Email Address'/>
            <a href='#' className="subscribeBtn">
                <span> Subscribe </span>
                {/* <i>icon</i> */}
            </a>
        </div>
    </div>
  )
}

export default NewsLetter
