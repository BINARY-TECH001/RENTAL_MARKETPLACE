import React from 'react'
import './Home.css'
import {  Benefit, Footer, HeaderSearch, HeaderTop, Nav, NewsLetter, Products, SideBarCategory } from '../../components'


function Home() {
  return (
    <>
      <HeaderTop />
      <HeaderSearch />
      <Nav />

      <div className="Home__body">
        <div className="container home__wrapper">
          <SideBarCategory />
          <Products />
        </div>
      </div>
        <div className="newsLetter__container">
         <div className="container">
          <NewsLetter />
         </div>
        </div>

        <div className="benefits__container">
          <div className="container">
            <Benefit />
        <div className="underline under2em" />
          </div>
        </div>


        <div className="footer__container">
          <div className="container">
          <Footer />

          </div>
        </div>
    </>
  )
}

export default Home
