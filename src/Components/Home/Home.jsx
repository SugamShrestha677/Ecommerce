import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'

const Home = () => {

  const [searchTerm,setSearchTerm] = useState("");
  const [activePanel,setActivePanel]=useState(null);
  const [cart,setCart]=useState([]);

  const handleScroll = ()=>{
    const section = document.getElementById("product-section")

    if (section) {
      section.scrollIntoView({behavior:'smooth'});
    }
  }



  // Cart and Wishlist Show Panel function
  const handlePanel = (tabName)=>{
    setActivePanel(prev=>(
      prev === tabName ? null :tabName
    ))
  }

  // close panel function
  const handleClose = () =>{
    setActivePanel(null)
  }

  // Add to cart Function
  const addToCart= (product)=>{
    const alreadyAdded =  cart.find(item=> item.id === product.id);
    if (alreadyAdded) {
      alert("Item is already in the cart")
    }

    setCart([...cart, product])
  }

  return (
    <div>
        <Navbar scroll = {handleScroll} setSearchTerm={setSearchTerm} handlePanel={handlePanel}/>
        <Banner/>
        <Product searchTerm={searchTerm} addToCart={addToCart}/>

        <Cart activePanel={activePanel}  handleClose={handleClose} cart={cart}/>
        <Wishlist activePanel={activePanel} handleClose={handleClose}/>
    </div>
  )
}

export default Home