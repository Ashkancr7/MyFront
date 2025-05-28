import React from "react"; 
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const DiscuntProductCard = ({ product }) => {
  return (
    <div className="relative bg-white shadow-2xl rounded-lg overflow-hidden w-full max-w-[200px] text-right cursor-pointer hover:shadow-xl transition-all group mb-6 sm:mb-10">
      <Link 
        key={product.id} 
        to="/product" 
        state={{ product }} // ارسال اطلاعات محصول از طریق state
      >
        {/* درصد تخفیف */}
        <div className=" flex items-center justify-center leading-none rounded-b-lg bg-[#f7de06] w-7 h-8 top-0 right-1 text-xs font-bold shadow-lg ">
        {`%${Number(product.discount).toLocaleString("fa-IR")}`}
      </div>

        {/* تصاویر */}
        <div className="relative w-full h-[180px]">
          {/* عکس اول */}
          <img
            src={product.image[0]}
            alt={product.title}
            className="w-full h-full object-cover group-hover:hidden"
          />
          {/* عکس دوم (در هاور) */}
          <img
            src={product.image[1]}
            alt={product.title}
            className="w-full h-full object-cover hidden group-hover:block absolute top-0 left-0"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="p-3 bg-gray-100 h-40 flex flex-col justify-between">
          <h3 className="text-sm sm:text-base font-semibold text-gray-800 text-center line-clamp-2">
            {product.title}
          </h3>
          <span className="text-gray-900 font-semibold text-center line-through text-sm">
            {Number(product.originalPrice).toLocaleString("fa-IR")}
          </span>
          <span className="text-gray-900 font-semibold text-center text-sm">
            {Number(product.price).toLocaleString("fa-IR")}
          </span>
        </div>
      </Link>
    </div>
  );
};

export default DiscuntProductCard;
