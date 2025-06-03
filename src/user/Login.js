// src/user/Login.js
import React, { useState, useEffect, useContext } from "react";
import { FiEye, FiEyeOff, FiCheck, FiX, FiArrowLeft } from "react-icons/fi";
import logo from '../../src/assets/logo.png';
import shopImage from '../../src/assets/shop-interior.jpg';
import Navbar from "../Navbar";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);
function Login() {
  const [formData, setFormData] = useState({ phone: "", password: "" });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

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
    if (formData.password.length < 8) {
      newErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError(null);

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await axios.post("https://mystore-pbfe.onrender.com/api/auth/login", formData);

        const { token, user } = response.data;

        console.log('token', token);


        // ذخیره توکن در localStorage
        localStorage.setItem("token", token);

        // به‌روزرسانی context
        // setUser(user);

        // رفتن به صفحه اصلی
        const result = await Swal.fire({
          title: 'ورود موفق!',
          text: `به فروشگاه Somekan خوش آمدید`,
          icon: 'success',
          showConfirmButton: true,
          confirmButtonColor: '#4CAF50',
          confirmButtonText: 'ادامه',
          background: '#f9f9f9',
          width: isMobile ? '90%' : '10%',
          customClass: {
            popup: 'my-swal-popup-mobile',
          },
          color: '#333',
          // timer: 4000,
          // timerProgressBar: true,
        });
        if (result.isConfirmed) {
          // navigate('/'); // انتقال به صفحه اصلی
          window.location.href = "/"
        }
        // navigate("/");

      } catch (error) {
        console.error("خطا در ورود:", error);
        setLoginError("شماره موبایل یا رمز عبور اشتباه است.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
        {/* تصویر */}
        <div className={`${isMobile ? 'h-48' : 'md:w-1/2'} relative overflow-hidden`}>
          <img src={shopImage} alt="نمای داخلی فروشگاه" className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4 md:p-8">
            {isMobile ? (
              <div className="flex items-center justify-between w-full">
                <button className="text-white p-2 rounded-full hover:bg-black/20" onClick={() => window.history.back()}>
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
                <h2 className="text-2xl md:text-3xl font-bold mb-2">خوش آمدید</h2>
                <p className="text-lg opacity-90">تجربه خریدی متفاوت و لذت‌بخش</p>
              </div>
            )}
          </div>
        </div>

        {/* فرم */}
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
                {isMobile ? "ورود به حساب" : "ورود به حساب کاربری"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* شماره موبایل */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">شماره همراه</label>
                  <div className="relative">
                    <input
                      type="tel"
                      className={`w-full p-2.5 text-sm rounded-lg border ${errors.phone ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                      placeholder="09123456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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

                {/* رمز عبور */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">رمز عبور</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`w-full p-2.5 text-sm rounded-lg border ${errors.password ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password}</p>}
                </div>

                {/* ارور لاگین */}
                {loginError && <p className="text-sm text-red-600 text-center mt-2">{loginError}</p>}

                {/* دکمه ورود */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2.5 px-4 rounded-lg text-sm sm:text-base font-medium hover:opacity-90 transition-opacity disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                      </svg>
                      در حال ورود...
                    </span>
                  ) : "ورود"}
                </button>
              </form>

              <p className="text-sm text-center mt-4 text-gray-500">
                حساب کاربری ندارید؟{" "}
                <a href="/sign" className="text-blue-600 hover:underline">
                  ثبت‌نام کنید
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
