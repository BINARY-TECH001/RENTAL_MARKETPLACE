import React from 'react'
import './Home.css'
import { HeaderSearch, HeaderTop, Nav, Products, SideBarCategory } from '../../components'


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
    </>
  )
}

export default Home
