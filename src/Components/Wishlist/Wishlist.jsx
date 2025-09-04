import React from "react";

const Wishlist = ({ activePanel, handleClose, wishlist, addToCart, clearWishlist }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 left-auto z-40 w-[400px] border-1 border-zinc-300 py-7 transform transition-transform duration-300 ${
        activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Heading */}
      <div className="px-10 ">
        <h3 className="text-3xl font-bold text-zinc-800 text-center ">
          Your Wishlist
        </h3>
      </div>

      {/* Cart Items */}
      <div className="flex-1 flex flex-col gap-2">
        {wishlist.length === 0 ? (
          <p className="text-zinc-800 text-center">Your wishlist is empty</p>
        ) : (
          wishlist.map((product, index) => {
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
                    <p className="text-sm text-zinc-500">Added: {product.addedDate}</p>
                  </div>

                  <div className="flex justify-between ">
                    <div>
                      {product.onSale && (
                        <span className="text-zinc-500 font-semibold text-lg line-through mr-4">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="text-red-600 font-semibold text-lg">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="bg-blue-600 text-white text-base px-4 py-2 rounded-full active:bg-blue-700 cursor-pointer min-w-[120px] text-center" onClick={()=>addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Buttons */}
      <div className="flex gap-x-2">
        <button
          className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700 "
          onClick={handleClose}
        >
          Close
        </button>
        <button className="bg-blue-600 text-white flex-1 h-[7vh] cursor-pointer active:bg-blue-700" onClick={clearWishlist}>
          Clear All
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
