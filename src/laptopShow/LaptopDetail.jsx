// src/components/LaptopDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
// ایمپورت دیتا از فایل مشترک
import { laptops } from "../data"; 

export default function LaptopDetail() {
  const { id } = useParams();
  const laptop = laptops.find((l) => l.id === parseInt(id));

  if (!laptop) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">محصول مورد نظر یافت نشد! 🧐</h2>
        <Link to="/" className="text-blue-600 hover:text-blue-800 underline">
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  // اضافه کردن مشخصات جدید (صفحه نمایش و وزن) به لیست نمایش
  const specs = [
    { label: "پردازنده (CPU)", value: laptop.cpu, icon: "💻" },
    { label: "حافظه رم (RAM)", value: laptop.ram, icon: "🛠" },
    { label: "حافظه داخلی", value: laptop.storage, icon: "💾" },
    { label: "کارت گرافیک", value: laptop.gpu, icon: "🎮" },
    { label: "صفحه نمایش", value: laptop.display, icon: "🖥️" }, // جدید
    { label: "باتری", value: laptop.battery, icon: "🔋" },
    { label: "وزن", value: laptop.weight, icon: "⚖️" }, // جدید
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span className="ml-2 text-lg">🡪</span>
            <span>بازگشت به لیست محصولات</span>
          </Link>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">
          
          <div className="bg-gray-100 p-8 flex items-center justify-center relative group">
            <div className="absolute w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse"></div>
            <img
              src={laptop.image}
              alt={laptop.name}
              className="w-full max-w-md object-contain z-10 transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl"
            />
          </div>

          <div className="p-6 sm:p-10 flex flex-col justify-center">
            
            <div className="mb-6 border-b border-gray-100 pb-6">
                <span className="text-blue-600 text-sm font-bold bg-blue-50 px-3 py-1 rounded-full mb-3 inline-block">
                    موجود در انبار
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
                    {laptop.name}
                </h1>
                <p className="text-gray-500 mt-4 leading-relaxed text-sm sm:text-base">
                    {laptop.desc}
                </p>
            </div>

            <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4">مشخصات فنی</h3>
                {/* تغییر گرید به 2 ستون برای خوانایی بهتر مشخصات زیاد */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {specs.map((spec, index) => (
                        <div key={index} className="bg-gray-50 border border-gray-100 p-3 rounded-xl hover:border-blue-200 transition-colors flex items-center gap-3">
                            <div className="text-xl bg-white p-2 rounded-lg shadow-sm">{spec.icon}</div>
                            <div className="overflow-hidden">
                                <div className="text-xs text-gray-400">{spec.label}</div>
                                <div className="text-sm font-semibold text-gray-700 truncate" title={spec.value}>
                                    {spec.value}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-auto bg-gray-50 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col">
                    <span className="text-gray-500 text-xs mb-1">قیمت نهایی:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                        {laptop.price}
                    </span>
                </div>
                
                <button className="w-full sm:w-auto flex-1 bg-blue-600 text-white text-lg font-bold px-8 py-3 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all active:scale-95 flex items-center justify-center gap-2">
                    <span>افزودن به سبد خرید</span>
                </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}