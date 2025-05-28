import React,{useState, useEffect, useContext} from "react";

import { FiFilter, FiHeart, FiShoppingCart, FiStar, FiX, FiChevronDown } from 'react-icons/fi';
import axios from "axios";

import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-full sm:w-[48%] md:w-60 text-right cursor-pointer hover:shadow-xl transition-all group mb-4">


    {/* عکس محصول */}
    <div className="relative w-full h-40">
      {/* عکس اول */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover group-hover:hidden absolute top-0 left-0"
      />
      {/* عکس دوم */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover hidden group-hover:block absolute top-0 left-0"
      />
    </div>
  
    {/* اطلاعات محصول */}
    <div className="p-3 bg-gray-100 h-40 flex flex-col justify-between">
      <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center">
        {product.name}
      </h3>
  
      <span className="text-gray-700 text-xs sm:text-sm text-center">
        {product.description.toLocaleString("fa-IR")}
      </span>
  
      <div className="flex justify-between items-center mt-2">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="text-gray-600 hover:text-blue-600 text-lg"
        >
          <FiShoppingCart />
        </button>
        <span className="text-blue-600 font-bold text-xs sm:text-sm">
          {product.price.toLocaleString("fa-IR")} تومان
        </span>
      </div>
    </div>
  </div>
  
  );
};

export default ProductCard;