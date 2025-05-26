
import React from "react"; 
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";


const DiscuntProductCard = ({ product }) => {
  return (
    <div   className="relative bg-white shadow-2xl rounded-lg overflow-hidden w-48 text-right cursor-pointer hover:shadow-xl transition-all group mb-10">
        <Link 
          key={product.id} 
          to="/product" 
          state={{ product }} // ارسال اطلاعات محصول از طریق state
        >
      <div className="absolute flex items-center justify-center leading-none rounded-b-lg bg-[#f7de06] w-7 h-8 top-0 right-1 text-xs font-bold shadow-lg ">
        %{Number(product.discount).toLocaleString("fa-IR") }
      </div>

      <div className="flex gap-2 ">

        {/* عکس اول */}
        <img
          src={product.image[0]}
          alt={product.title}
          className="w-full h-25 object-cover group-hover:hidden" // عکس اول هنگام هاور مخفی می‌شود
        />
        {/* عکس دوم */}
        <img
          src={product.image[1]}
          alt={product.title}
          className="w-full h-25 object-cover hidden group-hover:block" // عکس دوم فقط در هاور نمایش داده می‌شود
        />
      </div>

      {/* اطلاعات محصول */}
      <div className="p-3 bg-gray-100 h-40 flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800 text-center">
          {product.title}
        </h3>
        <span className="text-gray-900 font-semibold text-center line-through">
          {Number(product.originalPrice).toLocaleString("fa-IR")}
        </span>
        <span className="text-gray-900 font-semibold text-center">
          {Number(product.price).toLocaleString("fa-IR")}
        </span>
      

        <div className="flex justify-between items-center mt-3">
          {/* دکمه اضافه به سبد خرید */}
          {/* <button className="flex items-center px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            <FaShoppingCart className="ml-2" />
            افزودن
          </button> */}
        </div>
      </div>
      </Link>
    </div>
  );
};

export default DiscuntProductCard;