// src/components/LaptopList.jsx
import React from "react";
import { Link } from "react-router-dom";
// ایمپورت دیتا از فایل جدید
import { laptops } from "../data"; // مطمئن شوید مسیر درست است

const LaptopCard = ({ laptop }) => {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-0 left-0 bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-br-lg z-10">
        موجود
      </div>

      <div className="w-full h-40 bg-gray-50 rounded-xl flex items-center justify-center mb-4 p-2 group-hover:bg-gray-100 transition-colors">
        <img
          src={laptop.image}
          alt={laptop.name}
          className="max-h-full object-contain drop-shadow-sm group-hover:scale-110 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col flex-grow">
        <h3 className="text-gray-800 font-bold text-sm sm:text-base line-clamp-1 mb-3" title={laptop.name}>
          {laptop.name}
        </h3>

        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
            {laptop.cpu}
          </span>
          <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
            {laptop.ram}
          </span>
           <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md border border-gray-200">
            {laptop.gpu}
          </span>
        </div>
      </div>

      <div className="mt-auto border-t border-gray-100 pt-3">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-500 text-xs">قیمت:</span>
          {/* نمایش قیمت بدون تومان چون دیتای جدید واحد ندارد یا واحدش متفاوت است */}
          <span className="text-emerald-600 font-extrabold text-sm sm:text-base">
            {laptop.price}
          </span>
        </div>
        
        <Link
          to={`/laptop/${laptop.id}`}
          className="block w-full bg-blue-600 text-white text-center py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-blue-700 active:bg-blue-800 shadow-blue-200 shadow-lg"
        >
          مشاهده و خرید
        </Link>
      </div>
    </div>
  );
};

export default function LaptopList() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            <span className="block text-blue-600 text-lg font-semibold mb-2">فروشگاه لپ‌تاپ</span>
            لیست جدیدترین محصولات 💻
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            لیست بروز شده لپ‌تاپ‌ها با مشخصات دقیق و قیمت‌های جدید.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {laptops.map((laptop) => (
            <LaptopCard key={laptop.id} laptop={laptop} />
          ))}
        </div>
      </div>
    </div>
  );
}