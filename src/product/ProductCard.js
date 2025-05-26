import React,{useState, useEffect, useContext} from "react";

import { FiFilter, FiHeart, FiShoppingCart, FiStar, FiX, FiChevronDown } from 'react-icons/fi';
import axios from "axios";

import { useCart } from "../context/CartContext";


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white shadow-2xl rounded-lg overflow-hidden w-48 text-right cursor-pointer hover:shadow-xl transition-all group mb-10">

      <div className="flex gap-2">
        {/* عکس اول */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-30 object-cover group-hover:hidden" // عکس اول هنگام هاور مخفی می‌شود
        />
        {/* عکس دوم */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-30 object-cover hidden group-hover:block" // عکس دوم فقط در هاور نمایش داده می‌شود
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="p-3 bg-gray-100 h-40 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {product.name} 
        </h3>
       
        <span className="text-gray-900 font-semibold text-sm text-center">
          {product.description.toLocaleString("fa-IR")}
        </span>

        <div className="flex justify-between items-center mt-3">
          {/* دکمه اضافه به سبد خرید */}
          <button 
            onClick={(e) => {
              e.stopPropagation();
               addToCart(product);
            }}
            className="text-gray-600 hover:text-blue-600"
          >
            <FiShoppingCart />
          </button>
          <span className="text-blue-600 font-bold text-sm">{product.price.toLocaleString("fa-IR")} تومان</span>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;