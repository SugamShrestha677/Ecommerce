import React from "react";
import { useState } from "react";
import ProductList from "./Product"
import { GoHeartFill } from "react-icons/go";
const Product = () => {
  const categories = [
    "All",
    "Mens",
    "Womens",
    "Kids",
    "New Arrivals",
    "On Sale",
  ];
  const [activeTab, setActiveTab] = useState("All");
  const renderedProducts = ProductList.map(product=>{
    return (
      // Card
      <div>
        <div>
          <button>
            <GoHeartFill/>
          </button>
        </div>
      </div>
    )
  })

  return (
    <section className="max-w-[1300px] px-10 mx-auto py-10">
      {/* Tabs */}
      <div className="flex gap-3 justify-center items-center mt-8">
        {categories.map((category) => {
          return (
            <button
              key={category}
              className={` px-8 py-2 rounded-full hover:cursor-pointer text-lg ${
                activeTab === category
                  ? "bg-blue-600 text-white"
                  : "bg-zinc-100 text-zinc-800"
              }`}
              onClick={() => setActiveTab(category)}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Product Listing */}
      <div>
        {}
        
      </div>
    </section>
  );
};

export default Product;
