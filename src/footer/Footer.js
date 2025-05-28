import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white shadow-xl" dir="rtl">
      <div className="max-w-screen-xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          {/* محصولات */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">محصولات</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">تمام محصولات</a></li>
              <li><a href="#" className="hover:text-white">مردانه</a></li>
              <li><a href="#" className="hover:text-white">زنانه</a></li>
              <li><a href="#" className="hover:text-white">بچگانه</a></li>
            </ul>
          </div>

          {/* خدمات ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">خدمات ما</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">ارسال سریع</a></li>
              <li><a href="#" className="hover:text-white">پرداخت امن</a></li>
              <li><a href="#" className="hover:text-white">بسته‌بندی شیک</a></li>
              <li><a href="#" className="hover:text-white">بازگشت کالا</a></li>
            </ul>
          </div>

          {/* ارتباط با ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">ارتباط با ما</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">اینستاگرام</a></li>
              <li><a href="#" className="hover:text-white">تلگرام</a></li>
              <li><a href="#" className="hover:text-white">آدرس</a></li>
              <li><a href="#" className="hover:text-white">درباره ما</a></li>
            </ul>
          </div>

          {/* اطلاعات تماس */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">اطلاعات تماس</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:09910616048" className="hover:text-white">09910616048</a></li>
              <li><a href="tel:09185338693" className="hover:text-white">09185338693</a></li>
              <li><span>سنندج، کردستان - فروشگاه ما</span></li>
              <li><a href="#" className="hover:text-white">اعتماد و اعتبار</a></li>
            </ul>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} فروشگاه ما. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
