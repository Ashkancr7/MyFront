import React, { useState, useEffect, useContext } from "react";

import { FiFilter, FiHeart, FiShoppingCart, FiStar, FiX, FiChevronDown } from 'react-icons/fi';
import axios from "axios";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="relative shadow-2xl rounded-lg overflow-hidden w-full h-64 max-w-[180px] text-right cursor-pointer hover:shadow-xl transition-all group mb-6 sm:mb-10">

      <div className="relative w-full h-[180px]">
        <img
          src={product.image}
          alt={product.name}
          title={product.name}
          className="w-full h-full object-cover group-hover:hidden"

        />
        <img
          src={product.hoverImage || product.image}
          alt={product.name}
          title={product.name}
          className="w-full h-full object-cover hidden group-hover:block absolute top-0 left-0"

        />
      </div>

      <div className="p-3  h-auto sm:h-28 flex flex-col">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 text-center">
          {product.name}
        </h3>

        <span className="text-gray-700 text-[10px] sm:text-xs md:text-sm text-center break-words">
          {product.description.toLocaleString("fa-IR")}
        </span>

        <div className="flex justify-center items-center mt-2 gap-2">
           <Link 
                  key={product.id} 
                  to="/product" 
                  state={{ product }} // ارسال اطلاعات محصول از طریق state
                >
          <button
            // onClick={(e) => {
            //   e.stopPropagation();
            //   addToCart(product);
            // }}
            className="text-gray-600 ml-10 hover:text-blue-600 text-base sm:text-lg"
            title="افزودن به سبد خرید"
          >
            <FiShoppingCart />
          </button>
          </Link>
          <span className="text-blue-600 font-bold text-[10px] sm:text-xs md:text-sm">
            {product.price ? `${product.price.toLocaleString("fa-IR")} تومان` : "ناموجود"}
          </span>
        </div>
      </div>
    </div>


  );
};

export default ProductCard;