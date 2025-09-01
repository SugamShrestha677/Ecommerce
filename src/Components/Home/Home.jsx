import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'

const Home = () => {

  const [searchTerm,setSearchTerm] = useState("");

  const handleScroll = ()=>{
    const section = document.getElementById("product-section")

    if (section) {
      section.scrollIntoView({behavior:'smooth'});
    }
  }

  return (
    <div>
        <Navbar scroll = {handleScroll} setSearchTerm={setSearchTerm}/>
        <Banner/>
        <Product searchTerm={searchTerm}/>

        <Cart/>
    </div>
  )
}

export default Home