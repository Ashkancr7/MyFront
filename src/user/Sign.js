import React, { useState, useEffect } from "react";
import { FiEye, FiEyeOff, FiCheck, FiX, FiArrowLeft } from "react-icons/fi";
import logo from '../../src/assets/logo.png';
import shopImage from '../../src/assets/shop-interior.jpg';
import Navbar from "../Navbar";
import Swal from 'sweetalert2';

function Sign() {
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    address: "",
    acceptTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    if (!formData.firstName.trim()) {
      newErrors.firstName = "نام را وارد کنید!";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "نام خانوادگی را وارد کنید!";
    }

    if (!formData.address.trim()) {
      newErrors.address = "آدرس را وارد کنید!";
    }

    if (!/^09\d{9}$/.test(formData.phone)) {
      newErrors.phone = "شماره موبایل معتبر نیست!";
    }

    if (formData.password.length < 8) {
      newErrors.password = "رمز عبور باید حداقل ۸ کاراکتر باشد!";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "رمز عبور و تکرار آن مطابقت ندارند!";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "لطفاً شرایط را بپذیرید!";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://mystore-pbfe.onrender.com/api/auth/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            phone: formData.phone,
            password: formData.password,
            nam: formData.firstName,
            lname: formData.lastName,
            address: formData.address,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          const result = await Swal.fire({
            title: '✅ ثبت نام موفق!',
            text: `خوش آمدید`,
            icon: 'success',
            showConfirmButton: true,
            confirmButtonColor: '#4CAF50',
            confirmButtonText: 'صفحه ورود',
            background: '#f9f9f9',
            color: '#333',
          width: isMobile ? '50%' : '400px',

            // timer: 4000,
            // timerProgressBar: true,
          });
          if (result.isConfirmed) {
            window.location.href = "/login";
          }
         
        } else {
          alert(data.message || "خطا در ثبت‌نام!");
        }
      } catch (error) {
        console.error("خطا در ثبت‌نام:", error);
        alert("خطا در ارتباط با سرور!");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
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
                <h2 className="text-2xl md:text-3xl font-bold mb-2">به خانواده ما بپیوندید</h2>
                <p className="text-lg opacity-90">تجربه خریدی متفاوت و لذت‌بخش</p>
              </div>
            )}
          </div>
        </div>

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
                {isMobile ? "ثبت‌نام" : "ایجاد حساب کاربری"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* نام */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">نام</label>
                  <input
                    type="text"
                    className={`w-full p-2.5 text-sm rounded-lg border ${errors.firstName ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                    placeholder="نام "
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                  {errors.firstName && <p className="mt-1 text-xs text-red-500">{errors.firstName}</p>}
                </div>

                {/* نام خانوادگی */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">نام خانوادگی</label>
                  <input
                    type="text"
                    className={`w-full p-2.5 text-sm rounded-lg border ${errors.lastName ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                    placeholder="نام خانوادگی"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                  {errors.lastName && <p className="mt-1 text-xs text-red-500">{errors.lastName}</p>}
                </div>

                {/* آدرس */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">آدرس</label>
                  <textarea
                    className={`w-full p-2.5 text-sm rounded-lg border ${errors.address ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                    placeholder="آدرس کامل خود را وارد کنید"
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  />
                  {errors.address && <p className="mt-1 text-xs text-red-500">{errors.address}</p>}
                </div>

                {/* شماره همراه */}
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

                {/* تکرار رمز عبور */}
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-700">تکرار رمز عبور</label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      className={`w-full p-2.5 text-sm rounded-lg border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} bg-gray-50`}
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    />
                    <button
                      type="button"
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword}</p>}
                </div>

                {/* شرایط و قوانین */}
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                      className="w-4 h-4 rounded border border-gray-300 focus:ring-2 focus:ring-blue-300"
                    />
                  </div>
                  <label htmlFor="terms" className="mr-2 text-sm text-gray-500">
                    <a href="#" className="text-blue-600 hover:underline">
                      شرایط و قوانین
                    </a>{" "}
                    را می‌پذیرم
                  </label>
                </div>
                {errors.acceptTerms && <p className="mt-1 text-xs text-red-500">{errors.acceptTerms}</p>}

                {/* دکمه */}
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
                      در حال ثبت‌نام...
                    </span>
                  ) : "ثبت‌نام"}
                </button>
              </form>

              <p className="text-sm text-center mt-4 text-gray-500">
                حساب کاربری دارید؟{" "}
                <a href="/login" className="text-blue-600 hover:underline">
                  ورود به حساب
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
