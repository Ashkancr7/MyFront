import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";
import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useCart } from "../../context/CartContext";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = () => {
    const showToast = () => {
        toast.success('به سبد خرید اضافه شد!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: 'colored',
        });
    };
    const location = useLocation();
    const navigate = useNavigate();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [selectedSize, setSelectedSize] = useState(1);
    const [quantity, setQuantity] = useState(1);
    const [isWishlist, setIsWishlist] = useState(false);
    const { addToCart } = useCart();


    // داده‌های پیش‌فرض
    const defaultProduct = {
        title: "محصول پیش‌فرض",
        description: "این یک توضیح پیش‌فرض برای محصول است.",
        price: 999000,
        originalPrice: 1200000,
        image: [
            "https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/ff0f1ea57e78cd6e59c7b5181ab102691ad47ba0_1732969710.jpg",
            "https://dkstatics-public.digikala.com/digikala-products/21626d2c714c4c113719058c25d39893d29321fd_1702285135.jpg"
        ],
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    };

    const product = location.state?.product || defaultProduct;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % product.image.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
    };

    if (!product) {
        return (
            <div className="bg-gray-50 min-h-screen">
                <Navbar />
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h2 className="text-2xl font-bold mb-4">محصولی یافت نشد!</h2>
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        بازگشت به صفحه محصولات
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 min-h-screen">
            <Navbar />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* بخش گالری تصاویر */}
                    <div className="lg:w-1/2">
                        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden group">
                            {/* تصویر اصلی */}
                            <div className=" flex items-center justify-center w-full h-96 md:h-[500px]">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-64 h-64 object-contain transition-opacity duration-300"
                                    onError={(e) => {
                                        e.target.src = 'https://via.placeholder.com/800x600?text=تصویر+موجود+نیست';
                                    }}
                                />
                            </div>

                            {/* دکمه‌های تغییر تصویر */}
                            {product.image.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <FiChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                    >
                                        <FiChevronRight size={24} />
                                    </button>
                                </>
                            )}

                            {/* تصاویر کوچک */}
                            {/* {product.image.length > 1 && (
                                <div className="flex p-4 space-x-2 overflow-x-auto">
                                    {product.image.map((img, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentImageIndex(index)}
                                            className={`flex-shrink-0 w-16 h-16 rounded-md overflow-hidden border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-transparent'}`}
                                        >
                                            <img
                                                src={img}
                                                alt=""
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/200x200?text=تصویر+کوچک';
                                                }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            )} */}
                        </div>
                    </div>

                    {/* بخش اطلاعات محصول */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-full">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>

                            <div className="flex items-center mb-6">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'fill-none stroke-current'}`}
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-gray-500 text-sm">({product.reviews} نظر)</span>
                            </div>

                            <div className="mb-6">
                                <span className="text-2xl font-bold text-gray-900">
                                    {product.price.toLocaleString("fa-IR")} تومان
                                </span>
                                {product.originalPrice && (
                                    <span className="text-lg text-gray-400 line-through mr-2">
                                        {product.originalPrice.toLocaleString("fa-IR")}
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 mb-8">{product.description}</p>

                            {/* انتخاب رنگ */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-2">رنگ:</h3>
                                <div className="flex ">
                                    {product.colors.map((color, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? 'border-blue-500' : 'border-gray-200'}`}
                                            style={{
                                                backgroundColor: color === "سیاه" ? '#000' :
                                                    color === "سفید" ? '#fff' :
                                                        color === "قرمز" ? 'red' :
                                                            color === "آبی" ? 'blue' :
                                                                color === "زرد" ? 'yellow' :
                                                                    color === "سبز" ? 'green' :
                                                                        color === "نارنجی" ? 'orange' :
                                                                            color === "بنفش" ? 'purple' : ""
                                            }}
                                            title={color}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* انتخاب سایز */}
                            <div className="mb-6">
                                <h3 className="text-sm font-medium text-gray-900 mb-2">سایز:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setSelectedSize(size)}
                                            className={`px-4 py-2 rounded-md ${selectedSize === size ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* انتخاب تعداد */}
                            <div className="mb-8">
                                <h3 className="text-sm font-medium text-gray-900 mb-2">تعداد:</h3>
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setQuantity(q => Math.max(1, q - 1))}
                                        className="px-3 py-1 bg-gray-100 rounded-r-md hover:bg-gray-200"
                                    >
                                        -
                                    </button>
                                    <span className="px-4 py-1 bg-gray-50">{quantity}</span>
                                    <button
                                        onClick={() => setQuantity(q => q + 1)}
                                        className="px-3 py-1 bg-gray-100 rounded-l-md hover:bg-gray-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* دکمه‌های اقدام */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={() => {
                                        addToCart({
                                            ...product,
                                            quantity,
                                            selectedColor: selectedColor,
                                            selectedSize: selectedSize,
                                        });
                                        showToast()
                                    }}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-colors">
                                    <FiShoppingCart className="ml-2" />
                                    افزودن به سبد خرید
                                </button>
                                <button
                                    onClick={() => setIsWishlist(!isWishlist)}
                                    className={`p-3 rounded-lg border ${isWishlist ? 'bg-red-50 border-red-200 text-red-500' : 'bg-white border-gray-200 text-gray-500 hover:bg-gray-50'}`}
                                >
                                    <FiHeart className={isWishlist ? 'fill-current' : ''} />
                                </button>
                                <button className="p-3 rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50">
                                    <FiShare2 />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* تب‌های اطلاعات محصول */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="border-b border-gray-200">
                        <nav className="flex -mb-px">
                            <button className="py-4 px-6 border-b-2 border-blue-500 font-medium text-blue-600">
                                توضیحات محصول
                            </button>
                            <button className="py-4 px-6 font-medium text-gray-500 hover:text-gray-700">
                                نظرات ({product.reviews})
                            </button>
                            <button className="py-4 px-6 font-medium text-gray-500 hover:text-gray-700">
                                مشخصات فنی
                            </button>
                        </nav>
                    </div>
                    <div className="p-6">
                        <p className="text-gray-600">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ProductDetail;