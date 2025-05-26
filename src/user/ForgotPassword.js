import React, { useState, useEffect } from "react";
import { FiArrowLeft, FiX,FiCheck } from "react-icons/fi";
import logo from '../../src/assets/logo.png';
import shopImage from '../../src/assets/shop-interior.jpg';
import Navbar from "../Navbar";

function ForgotPassword() {
  const [formData, setFormData] = useState({
    phone: "",
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    
    if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = "شماره موبایل معتبر نیست!";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSendCode = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // شبیه‌سازی ارسال کد تایید
        await new Promise(resolve => setTimeout(resolve, 1500));
        const generatedCode = Math.floor(1000 + Math.random() * 9000);
        setVerificationCode(generatedCode.toString());
        setIsCodeSent(true);
        alert(`کد تایید به شماره ${formData.phone} ارسال شد.`);
      } catch (error) {
        console.error("خطا در ارسال کد:", error);
        alert("خطایی در ارسال کد رخ داده است. لطفاً دوباره تلاش کنید.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // منطق بازنشانی رمز عبور
    alert("رمز عبور با موفقیت بازنشانی شد!");
  };

  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* بخش تصویر */}
      <div className={`${isMobile ? 'h-48' : 'md:w-1/2'} relative overflow-hidden`}>
        <img
          src={shopImage}
          alt="نمای داخلی فروشگاه"
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4 md:p-8">
          {isMobile ? (
            <div className="flex items-center justify-between w-full">
              <button
                className="text-white p-2 rounded-full hover:bg-black/20"
                onClick={() => window.history.back()}
              >
                <FiArrowLeft size={20} />
              </button>
              <div className="flex items-center">
                <img src={logo} alt="لوگو" className="w-8 h-8 mr-2" />
                <h1 className="text-xl font-bold text-white">فروشگاه ما</h1>
              </div>
              <div className="w-8"></div>
            </div>
          ) : (
            <div className="text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">بازنشانی رمز عبور</h2>
              <p className="text-lg opacity-90">امنیت حساب کاربری شما</p>
            </div>
          )}
        </div>
      </div>

      {/* بخش فرم */}
      <div className={`flex-1 flex items-center justify-center p-4 sm:p-8 ${isMobile ? '' : 'md:w-1/2'}`}>
        <div className="w-full max-w-md">
          {!isMobile && (
            <div className="flex items-center justify-center mb-6">
              <img src={logo} alt="لوگو" className="w-10 h-10 mr-3" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                فروشگاه مدرن
              </h1>
            </div>
          )}

          <div className="bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 text-gray-800">
              {isMobile ? "فراموشی رمز عبور" : "بازنشانی رمز عبور"}
            </h2>

            {!isCodeSent ? (
              <form onSubmit={handleSendCode} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    شماره همراه
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      className={`w-full p-2.5 text-sm rounded-lg border ${
                        errors.phone ? "border-red-500" : "border-gray-300"
                      } bg-gray-50`}
                      placeholder="09123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                    {formData.phone && (
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                        {/^09\d{9}$/.test(formData.phone) ? (
                          <FiCheck className="text-green-500" size={18} />
                        ) : (
                          <FiX className="text-red-500" size={18} />
                        )}
                      </span>
                    )}
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      در حال ارسال...
                    </span>
                  ) : "دریافت کد تایید"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    کد تایید
                  </label>
                  <input
                    type="text"
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50"
                    placeholder="کد ارسال شده را وارد کنید"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    رمز عبور جدید
                  </label>
                  <input
                    type="password"
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50"
                    placeholder="رمز عبور جدید"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    تکرار رمز عبور جدید
                  </label>
                  <input
                    type="password"
                    className="w-full p-2.5 text-sm rounded-lg border border-gray-300 bg-gray-50"
                    placeholder="تکرار رمز عبور جدید"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
                >
                  بازنشانی رمز عبور
                </button>
              </form>
            )}

            <p className="text-sm text-center mt-4 text-gray-500">
              <a href="/login" className="text-blue-600 hover:underline">
                بازگشت به صفحه ورود
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ForgotPassword;