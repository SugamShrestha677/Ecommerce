import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Banner from '../Banner/Banner'
import Product from '../Products/Product'
import Cart from '../Cart/Cart'
import Wishlist from '../Wishlist/Wishlist'
import OrderSummary from '../orderSummary/OrderSummary'
import OrderPlace from '../OrderPlace/OrderPlace'

const Home = () => {

  const [searchTerm,setSearchTerm] = useState("");
  const [activePanel,setActivePanel]=useState(null);
  const [cart,setCart]=useState([]);
  const [orderSummary, setOrderSummary]=useState(false);
  const [orderPlaced, setOrderPlaced]=useState(false);
  const [wishlist,setWishlist]=useState([]);

  // Total Calculations
  const subTotal = cart.reduce((acc,item)=>acc + item.price  * item.quantity ,0)
  const totalItems = cart.reduce((acc,item)=>acc + item.quantity, 0)
  const shippingFee = totalItems * 2;
  const orderTotal = subTotal + shippingFee;


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

  // Quantity Increment
  const quantityIncrement = (product) => {
    setCart(cart.map(
      item=>item.id === product.id ?
      {...item,quantity:item.quantity + 1}:
      item
    ))
  }
  // Quantity Decrement
  const quantityDecrement = (product) => {
    setCart(cart.map(
      item=>item.id === product.id && item.quantity > 1 ?
      {...item,quantity:item.quantity - 1}:
      item
    ))
  }

  // Add to cart Function
  const addToCart= (product)=>{
    const alreadyAdded =  cart.find(item=> item.id === product.id);
    if (alreadyAdded) {
      alert("Item is already in the cart")
      return;
    }

    setCart([...cart, {...product,quantity:1}])
  }
// Wishlist funbction
  const addToWishlist = (product) =>{
    setWishlist([...wishlist,product])
  }

  const removeItems =(product)=>{
    setCart(cart.filter(item=>item.id !== product.id))
  }



  return (
    <div>
        <Navbar scroll = {handleScroll} setSearchTerm={setSearchTerm} handlePanel={handlePanel} totalItems={totalItems}/>
        
        <Banner/>

        <Product searchTerm={searchTerm} addToCart={addToCart} addToWishlist={addToWishlist}/>

        <Cart activePanel={activePanel}  handleClose={handleClose} cart={cart} removeItems={removeItems} quantityIncrement={quantityIncrement} quantityDecrement={quantityDecrement} subTotal={subTotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderSummary={setOrderSummary}/>

        <Wishlist activePanel={activePanel} handleClose={handleClose} wishlist={wishlist}/>

        {
          orderSummary && 
        <OrderSummary cart = {cart} subtotal={subTotal} shippingFee={shippingFee} orderTotal={orderTotal} setOrderPlaced={setOrderPlaced } setOrderSummary={setOrderSummary} setCart={setCart}/>
        }

        {
          orderPlaced &&
          <OrderPlace setOrderPlaced={setOrderPlaced}/>
        }

    </div>
  )
}

export default Home