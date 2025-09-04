import React from "react";
import Sweater from "../../assets/sweater.png";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
const Cart = ({ activePanel, handleClose, cart, removeItems, quantityIncrement, quantityDecrement, subTotal,shippingFee,orderTotal, setOrderSummary }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto z-40 w-[400px] border-1 border-zinc-300 py-7 transform transition-transform duration-300 ${
        activePanel === "cart" ? "translate-x-0" : "translate-x-full"
      } `}
    >
      {/* Heading */}
      <div className="px-10 ">
        <h3 className="text-3xl font-bold text-zinc-800 text-center ">
          Your Cart
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto flex flex-col gap-2 scroll">
        {cart.length === 0 ? (
          <p className="text-zinc-800 text-center">Your cart is empty.</p>
        ) : (
          cart.map((product, index) => {
            return (
              <div
                className={`flex items-center gap-3 px-3 py-1 border-y-1 border-zinc-300 ${
                  index % 2 === 0 ? "bg-blue-100" : "bg-white"
                }`}
              >
                {/* Image */}
                <div className="h-20 w-20  ">
                  <img
                    src={product.image}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between ">
                    <h4 className="font-semibold text-zinc-800 text-lg">
                      {product.name}
                    </h4>
                    <button
                      className="h-8 w-8 rounded-full bg-red-600 text-white flex justify-center items-center mr-[27px] cursor-pointer active:bg-red-700"
                      onClick={() => removeItems(product)}
                    >
                      <FaTrash />
                    </button>
                  </div>

                  <div className="flex justify-between ">
                    <div>
                      {product.onSale && (
                        <span className="text-zinc-500 font-semibold text-lg line-through mr-5">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex gap-2 ">
                      <button className="h-7 w-7 rounded-full bg-blue-600 text-white flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer" onClick={()=>quantityDecrement(product)}>
                        <FaMinus />
                      </button>
                      <span>{product.quantity}</span>
                      <button className="h-7 w-7 rounded-full bg-blue-600 text-white flex justify-center items-center text-[14px] active:bg-blue-700 cursor-pointer" onClick={()=>quantityIncrement(product)}>
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Cart Total */}

      <div className="px-10 border-y border-zinc-300">
        <div className="flex justify-between pt-2">
          <span className="text-zinc-800">Subtotal</span>
          <span className="text-zinc-800">${subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2">
          <span className="text-zinc-800">Shipping & Handlings</span>
          <span className="text-zinc-800">${shippingFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-t border-zinc-300">
          <span className="font-bold text-lg text-blue-600">Order Total</span>
          <span className="font-bold text-lg text-blue-600">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-x-2 px-10">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 "
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className={` text-white flex-1 h-[7vh]  ${
            cart.length === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 cursor-pointer active:bg-blue-700"
          } `}
          disabled={cart.length === 0}
          onClick={()=>setOrderSummary(true)}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
