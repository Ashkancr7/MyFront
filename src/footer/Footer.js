import React from 'react';
import { FaInstagram, FaTelegramPlane, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* بخش اصلی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-right">
          {/* محصولات */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-400">محصولات</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">تمام محصولات</a></li>
              <li><a href="#" className="hover:text-white transition">مردانه</a></li>
              <li><a href="#" className="hover:text-white transition">زنانه</a></li>
              <li><a href="#" className="hover:text-white transition">بچگانه</a></li>
            </ul>
          </div>

          {/* خدمات */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-400">خدمات ما</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white transition">ارسال سریع</a></li>
              <li><a href="#" className="hover:text-white transition">پرداخت امن</a></li>
              <li><a href="#" className="hover:text-white transition">بسته‌بندی شیک</a></li>
              <li><a href="#" className="hover:text-white transition">بازگشت کالا</a></li>
            </ul>
          </div>

          {/* ارتباط با ما */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-400">ارتباط با ما</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition">
                <FaInstagram className="text-pink-500" />
                <a href="#">اینستاگرام</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition">
                <FaTelegramPlane className="text-blue-400" />
                <a href="#">تلگرام</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2 hover:text-white transition">
                <FaMapMarkerAlt className="text-green-400" />
                <span>سنندج، کردستان</span>
              </li>
              <li><a href="#" className="hover:text-white transition">درباره ما</a></li>
            </ul>
          </div>

          {/* تماس */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-pink-400">اطلاعات تماس</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhoneAlt className="text-green-400" />
                <a href="tel:09910616048" className="hover:text-white transition">09910616048</a>
              </li>
              <li className="flex items-center justify-center sm:justify-start gap-2">
                <FaPhoneAlt className="text-green-400" />
                <a href="tel:09185338693" className="hover:text-white transition">09185338693</a>
              </li>
              <li><a href="#" className="hover:text-white transition">اعتماد و اعتبار</a></li>
            </ul>
          </div>
        </div>

        {/* خط جداکننده */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} فروشگاه ما | طراحی با ❤️ توسط تیم ما
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
