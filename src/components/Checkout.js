import React, { useState, useEffect, useMemo } from 'react';
import { FiShoppingCart, FiArrowLeft, FiCreditCard, FiTruck, FiCheckCircle, FiInfo } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import provinces_cities from '../data/provinces_cities.json'

import provinces from '../data/provinces.json'

const Checkout = () => {
  const [activeTab, setActiveTab] = useState('delivery');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  // list of cities
  const [selectedStateId, setSelectedStateId] = useState(null);
  const [filteredCities, setFilteredCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [postCode, setPostCode] = useState('');
  const [province, setProvince] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem('checkoutUserData');
    if (savedData) {
      const userData = JSON.parse(savedData);
      setName(userData.name || '');
      setLname(userData.lname || '');
      setPhone(userData.phone || '');
      setEmail(userData.email || '');
      setSelectedStateId(userData.selectedStateId || '');
      setSelectedCity(userData.selectedCity || '');
      setAddress(userData.address || '');
      setPostCode(userData.postCode || '');

      // Filter cities based on saved state
      if (userData.selectedStateId) {
        const cities = provinces_cities.filter(
          city => city.province_id === parseInt(userData.selectedStateId)
        );
        setFilteredCities(cities);
      }
    }
  }, []);

  // Save data to localStorage on change


  useEffect(() => {
    // بررسی وجود حداقل یک مقدار غیر خالی برای ذخیره
    const shouldSave = name || lname || phone || email || selectedStateId || selectedCity || address || postCode;

    if (shouldSave) {
      const userData = {
        name,
        lname,
        phone,
        email,
        selectedStateId,
        selectedCity,
        address,
        postCode,
      };
      localStorage.setItem('checkoutUserData', JSON.stringify(userData));
    }
  }, [name, lname, phone, email, selectedStateId, selectedCity, address, postCode]);

  const isFormValid =
    name.trim() &&
    lname.trim() &&
    selectedStateId &&
    selectedCity &&
    address.trim() &&
    postCode.trim() &&
    phone.trim();
  // const navigate = useNavigate();

  // برگرداندن سبد از localStorage
  useEffect(() => {
    const cartJSON = localStorage.getItem('cart');
    if (cartJSON) {
      setCartItems(JSON.parse(cartJSON));
    }
  }, []);

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item._id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {

    console.log('id', id);

    const updatedCart = cartItems.map(item => {
      if (item._id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };


  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedStateId(stateId);
    console.log('id', stateId)
    // console.log(provinces_cities);
    const relatedCities = provinces_cities.filter((city) => city.provinceId === stateId);
    // setProvince(relatedCities);
    setFilteredCities(relatedCities);

    const selectedProvince = provinces_cities.find(city => city.provinceId === stateId);
    if (selectedProvince) {
      setProvince(selectedProvince.provinceName); // این state رو تعریف کن
      console.log('نام استان انتخاب شده:', selectedProvince.provinceName);
    }

  };

  // تابع حذف یک آیتم
  const removeItem = (id) => {
    const updated = cartItems.filter(item => item._id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  // تابع پاک کردن کل سبد
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cart');
  };

  // محاسبه جمع‌ها
  const subtotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);

  const shipping = cartItems.length > 0 ? 50000 : 0;
  const discount = couponApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  // مدیریت کد تخفیف
  const applyCoupon = () => {
    if (couponCode.trim().toUpperCase() === 'DISCOUNT10' && !couponApplied) {
      setCouponApplied(true);
      setCouponDiscount(subtotal * 0.1);
    }
  };

  const removeCoupon = () => {
    setCouponApplied(false);
    setCouponDiscount(0);
    setCouponCode('');
  };

  // const handlePayment = () => {
  //   // منطق هدایت به درگاه پرداخت
  //   console.log('Redirecting to payment gateway...');

  //   // پس از پرداخت موفق:
  //   clearCart();
  //   navigate('/thank-you');
  // };
  const handlePayment = async () => {
    const amount = total; // اینو می‌تونی از ورودی کاربر هم بگیری

    try {
      const res = await fetch('https://mystore-pbfe.onrender.com/api/payment/pay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount,
          items: cartItems.map(item => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          address: {
            receiverName: name + ' ' + lname,
            receiverPhone: phone,
            provinceId: selectedStateId,
            provinceName: province,
            cityName: selectedCity,
            address,
            postCode,
          },
          couponCode: couponApplied ? couponCode : null,
          shippingCost: shipping,
          discountAmount: discount,
        })

      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('خطا در دریافت لینک پرداخت');
      }
    } catch (err) {
      console.log('خطای ارتباط با سرور: ' + err.message);
    }
  };


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <Navbar />
      <div className="max-w-6xl mx-auto">
        {/* مسیر خرید */}
        <div className="flex items-center mb-8">
          <div className="flex items-center text-gray-500">
            <FiShoppingCart className="text-blue-600 text-2xl mr-2" />
            <span className="mx-2">/</span>
            <span className={activeTab === 'delivery' ? 'text-blue-600 font-medium' : ''}>اطلاعات تحویل</span>
            <span className="mx-2">/</span>
            <span className={activeTab === 'payment' ? 'text-blue-600 font-medium' : ''}>پرداخت</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* فرم اصلی */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              {/* تب‌ها */}
              <div className="flex border-b border-gray-200 mb-6">
                <button
                  onClick={() => setActiveTab('delivery')}
                  className={`py-3 px-4 font-medium text-sm flex items-center ${activeTab === 'delivery' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                >
                  <FiTruck className="ml-2" />
                  اطلاعات تحویل
                </button>
                <button
                  onClick={() => setActiveTab('payment')}
                  className={`py-3 px-4 font-medium text-sm flex items-center ${activeTab === 'payment' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'}`}
                  disabled={activeTab === 'delivery'}
                >
                  <FiCreditCard className="ml-2" />
                  پرداخت
                </button>
              </div>

              {/* فرم اطلاعات تحویل */}
              {activeTab === 'delivery' && (
                <div className="space-y-4">
                  <h2 className="text-lg font-medium text-gray-900">اطلاعات گیرنده</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block  text-sm font-medium text-gray-700 mb-1">نام <span className="text-red-500">*</span></label>
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        id="firstName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="نام شما"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">نام خانوادگی <span className="text-red-500">*</span></label>
                      <input
                        value={lname}
                        onChange={(e) => setLname(e.target.value)}
                        type="text"
                        id="lastName"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        placeholder="نام خانوادگی شما"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">شماره تماس <span className="text-red-500">*</span></label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="09xxxxxxxxx"
                      required
                      pattern="09[0-9]{9}"
                    />
                  </div>

                  <div>

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">ایمیل (اختیاری)</label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">استان <span className="text-red-500">*</span></label>
                      <select
                        value={selectedStateId}
                        onChange={handleStateChange}
                        id="province"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">انتخاب استان</option>
                        {provinces.map((state) => (
                          <option key={state.provinceId} value={state.provinceId}>
                            {state.provinceName}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">شهر <span className="text-red-500">*</span></label>
                      <select disabled={!filteredCities.length}
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        id="city"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                        required

                      >


                        <option value="">انتخاب شهر</option>
                        {filteredCities.map((city) => (
                          <option key={city.cityId} value={city.cityName}>
                            {city.cityName}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">آدرس کامل <span className="text-red-500">*</span></label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      id="address"
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="خیابان، پلاک، واحد"
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">کد پستی <span className="text-red-500">*</span></label>
                    <input
                      value={postCode}
                      onChange={(e) => setPostCode(e.target.value)}
                      type="text"
                      id="postalCode"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="xxxxxxxxxx"
                      required
                      pattern="[0-9]{10}"
                      inputMode='numeric'
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <button
                      onClick={() => window.history.back()}
                      className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      بازگشت
                    </button>
                    <button
                      disabled={!isFormValid}
                      //console.log(name,lname,address,email,phone,selectedCity,"ostan"+province,postCode)
                      onClick={() => setActiveTab('payment')
                      }
                      className={`px-6 py-2 rounded-lg font-medium flex items-center justify-center transition-colors ${isFormValid ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}

                    >
                      تایید اطلاعات
                      <FiArrowLeft className="mr-2" />
                    </button>
                  </div>
                </div>
              )}

              {/* بخش پرداخت */}
              {activeTab === 'payment' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">پرداخت آنلاین</h2>
                    <button
                      onClick={() => setActiveTab('delivery')}
                      className="text-blue-600 text-sm flex items-center"
                    >
                      ویرایش اطلاعات
                      <FiArrowLeft className="ml-1" />
                    </button>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                    <FiCreditCard className="mx-auto text-blue-500 text-4xl mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">پرداخت امن از طریق درگاه بانکی</h3>
                    <p className="text-gray-600 mb-4">پس از تأیید سفارش، به صفحه پرداخت بانک منتقل خواهید شد</p>
                    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">مبلغ قابل پرداخت:</span>
                        <span className="text-lg font-bold">{total.toLocaleString('FA-IR')} تومان</span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-start">
                      <input
                        id="terms"
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => setAgreeTerms(e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="terms" className="mr-2 block text-sm text-gray-700">
                        با قوانین و شرایط استفاده موافقم <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between pt-2">
                    <button
                      onClick={() => setActiveTab('delivery')}
                      className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      بازگشت
                    </button>
                    <button
                      onClick={handlePayment}
                      disabled={!agreeTerms}
                      className={`px-6 py-2 rounded-lg font-medium flex items-center justify-center transition-colors ${agreeTerms ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                    >
                      انتقال به درگاه پرداخت
                      <FiArrowLeft className="mr-2" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* خلاصه سبد خرید */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-medium text-gray-900 mb-4">خلاصه سفارش</h2>

              <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                    {/* تصویر محصول */}
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=No+Image'; }}
                      />
                    </div>
                    {/* اطلاعات محصول */}
                    <div className="mr-4 flex-1">
                      <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">تعداد: {item.quantity}</p>
                      <p className="text-sm text-gray-500 mt-1">قیمت: {item.price.toLocaleString('fa-ir')} تومان</p>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => decreaseQuantity(item._id)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >−</button>
                        <span className="mx-2">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item._id)}
                          className="px-2 py-1 bg-gray-200 rounded"
                        >+</button>
                      </div>

                    </div>
                    {/* دکمه حذف */}
                    <button
                      onClick={() => removeItem(item._id)}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>
                ))}
                {cartItems.length === 0 && (
                  <p className="text-center text-gray-500">هیچ‌کالایی در سبد نیست.</p>
                )}
              </div>


              {/* کد تخفیف */}
              <div className="mb-4">
                {couponApplied ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex justify-between items-center">
                    <div className="text-green-700 text-sm">
                      <span className="font-medium">کد تخفیف اعمال شد (10%)</span>
                      <p className="text-xs mt-1">-{couponDiscount.toLocaleString('FA-IR')} تومان</p>
                    </div>
                    <button onClick={removeCoupon} className="text-red-500 text-xs hover:text-red-700">حذف</button>
                  </div>
                ) : (
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-r-lg focus:ring-blue-500 focus:border-blue-500"
                      placeholder="کد تخفیف"
                    />
                    <button onClick={applyCoupon} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-l-lg transition-colors">
                      اعمال
                    </button>
                  </div>
                )}
              </div>

              {/* جمع‌بندی نهایی */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>جمع کل:</span>
                  <span>{subtotal.toLocaleString('FA-IR')} تومان</span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>تخفیف:</span>
                    <span>-{couponDiscount.toLocaleString('FA-IR')} تومان</span>
                  </div>
                )}
                <div className="flex justify-between text-sm text-gray-600">
                  <span>هزینه ارسال:</span>
                  <span>{shipping.toLocaleString('FA-IR')} تومان</span>
                </div>
                <div className="flex justify-between text-base font-medium text-gray-900 pt-2 border-t border-gray-200 mt-2">
                  <span>مبلغ قابل پرداخت:</span>
                  <span>{total.toLocaleString('FA-IR')} تومان</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-start text-sm text-gray-500">
                  <FiInfo className="flex-shrink-0 mt-1 ml-2 text-gray-400" />
                  <p>کالاهای موجود در انبار طی 1-2 روز کاری ارسال می‌شوند.</p>
                </div>
                <button
                  onClick={clearCart}
                  className="mt-4 w-full px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"
                >
                  حذف همه‌ی اقلام
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

