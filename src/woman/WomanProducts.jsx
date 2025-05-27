import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFilter, FiHeart, FiShoppingCart, FiStar, FiX, FiChevronDown } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';
import axios from 'axios';
import Navbar from '../Navbar';
import { useCart } from "../context/CartContext";
const WomanProducts = () => {
  const [products, setProducts] = useState([]);
  // const { addToCart } = useContext(CartContext);
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '', 
    priceRange: '',
    size: '',
    color: '',
    sortBy: 'newest'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // دریافت محصولات از API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // اگر از استیت loading استفاده می‌کنی
        const response = await axios.get('https://mystore-pbfe.onrender.com/api/products/category/زنانه');
        const products = response.data;
  
        setProducts(products);
        setFilteredProducts(products);
      } catch (error) {
        console.error('خطا در دریافت محصولات:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchProducts();
  }, []);
 
  // اعمال فیلترها
  useEffect(() => {
    let result = [...products];
    
    // فیلتر بر اساس دسته‌بندی
    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }
    
    // فیلتر بر اساس محدوده قیمت
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-');
      result = result.filter(p => {
        if (max === '+') return p.price >= Number(min);
        return p.price >= Number(min) && p.price <= Number(max);
      });
    }
    
    // فیلتر بر اساس سایز
    if (filters.size) {
      result = result.filter(p => p.size.includes(filters.size));
    }
    
    // فیلتر بر اساس رنگ
    if (filters.color) {
      result = result.filter(p => p.color === filters.color);
    }
    
    // مرتب‌سازی
    result.sort((a, b) => {
      switch(filters.sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'popular': return b.rating - a.rating;
        case 'best-seller': 
          return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
        default: return b.id - a.id; // newest first
      }
    });
    
    setFilteredProducts(result);
  }, [filters, products]);

  // مدیریت علاقه‌مندی‌ها
  const toggleWishlist = (productId, e) => {
    e.stopPropagation();
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };


  // رفتن به صفحه جزئیات محصول
  const goToProductDetail = (productId) => {
    navigate(`/products/${productId}`);
  };

  // ریست فیلترها
  const resetFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      size: '',
      color: '',
      sortBy: 'newest'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* هدر صفحه */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
      <Navbar />

        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">محصولات زنانه</h1>
          <nav className="flex items-center mt-2 text-sm text-gray-600">
            <a href="/" className="hover:text-blue-600">خانه</a>
            <span className="mx-2">/</span>
            <span className="text-blue-600">زنانه</span>
          </nav>
        </div>
      </header>

      {/* بخش اصلی */}
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* سایدبار فیلترها - دسکتاپ */}
          <aside className="hidden md:block w-72 bg-white p-5 rounded-lg shadow-sm h-fit sticky top-24">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg">فیلترها</h3>
              <button 
                onClick={resetFilters}
                className="text-blue-600 text-sm hover:text-blue-800"
              >
                حذف فیلترها
              </button>
            </div>
            
            <div className="space-y-6">
              {/* فیلتر دسته‌بندی */}
              <div>
                <h4 className="font-medium mb-3">دسته‌بندی</h4>
                <div className="space-y-2">
                  {['بلوز', 'مانتو', 'شلوار', 'دامن', 'تاپ', 'لباس مجلسی', 'ژاکت', 'اکسسوری'].map(cat => (
                    <label key={cat} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat}
                        onChange={() => setFilters({...filters, category: cat})}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* فیلتر قیمت */}
              <div>
                <h4 className="font-medium mb-3">محدوده قیمت (تومان)</h4>
                <select 
                  className="w-full p-2 border border-gray-300 rounded-md text-sm"
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                >
                  <option value="">همه قیمت‌ها</option>
                  <option value="0-100000">تا 100,000</option>
                  <option value="100000-200000">100,000 تا 200,000</option>
                  <option value="200000-300000">200,000 تا 300,000</option>
                  <option value="300000-500000">300,000 تا 500,000</option>
                  <option value="500000+">بالای 500,000</option>
                </select>
              </div>
              
              {/* فیلتر سایز */}
              <div>
                <h4 className="font-medium mb-3">سایز</h4>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', '36', '38', '40', '42'].map(size => (
                    <button
                      key={size}
                      onClick={() => setFilters({...filters, size: filters.size === size ? '' : size})}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        filters.size === size 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* فیلتر رنگ */}
              <div>
                <h4 className="font-medium mb-3">رنگ</h4>
                <div className="flex flex-wrap gap-2">
                  {['مشکی', 'صورتی', 'سفید', 'خاکستری', 'بژ', 'آبی', 'طرح دار'].map(color => (
                    <button
                      key={color}
                      onClick={() => setFilters({...filters, color: filters.color === color ? '' : color})}
                      className={`px-3 py-1 border rounded-md text-sm ${
                        filters.color === color 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* محتوای اصلی */}
          <section className="flex-1">
            {/* هدر فیلترها */}
            <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg md:hidden"
              >
                <FiFilter />
                <span>فیلترها</span>
              </button>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600 hidden md:block">
                  {filteredProducts.length} محصول یافت شد
                </span>
                <div className="relative">
                  <select 
                    className="appearance-none bg-white px-4 py-2 pr-8 border rounded-lg text-sm"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  >
                    <option value="newest">جدیدترین</option>
                    <option value="popular">پرفروش‌ترین</option>
                    <option value="best-seller">پیشنهاد ویژه</option>
                    <option value="price-low">قیمت (کم به زیاد)</option>
                    <option value="price-high">قیمت (زیاد به کم)</option>
                  </select>
                  <FiChevronDown className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>
            </div>

            {/* فیلترهای موبایل */}
            {showFilters && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden flex justify-end">
                <div className="bg-white h-full w-4/5 max-w-sm p-5 overflow-y-auto">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="font-bold text-lg">فیلترها</h3>
                    <button 
                      onClick={() => setShowFilters(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <FiX size={20} />
                    </button>
                  </div>
                  
                  {/* محتوای فیلترها */}
                  <div className="space-y-6">
                    {/* فیلتر دسته‌بندی */}
                    <div>
                      <h4 className="font-medium mb-3">دسته‌بندی</h4>
                      <div className="space-y-2">
                        {['بلوز', 'مانتو', 'شلوار', 'دامن', 'تاپ', 'لباس مجلسی', 'ژاکت', 'اکسسوری'].map(cat => (
                          <label key={cat} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name="category"
                              checked={filters.category === cat}
                              onChange={() => setFilters({...filters, category: cat})}
                              className="w-4 h-4 text-blue-600"
                            />
                            <span>{cat}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                    
                    {/* فیلتر قیمت */}
                    <div>
                      <h4 className="font-medium mb-3">محدوده قیمت (تومان)</h4>
                      <select 
                        className="w-full p-2 border border-gray-300 rounded-md text-sm"
                        value={filters.priceRange}
                        onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                      >
                        <option value="">همه قیمت‌ها</option>
                        <option value="0-100000">تا 100,000</option>
                        <option value="100000-200000">100,000 تا 200,000</option>
                        <option value="200000-300000">200,000 تا 300,000</option>
                        <option value="300000-500000">300,000 تا 500,000</option>
                        <option value="500000+">بالای 500,000</option>
                      </select>
                    </div>
                    
                    {/* فیلتر سایز */}
                    <div>
                      <h4 className="font-medium mb-3">سایز</h4>
                      <div className="flex flex-wrap gap-2">
                        {['S', 'M', 'L', 'XL', '36', '38', '40', '42'].map(size => (
                          <button
                            key={size}
                            onClick={() => setFilters({...filters, size: filters.size === size ? '' : size})}
                            className={`px-3 py-1 border rounded-md text-sm ${
                              filters.size === size 
                                ? 'bg-blue-600 text-white border-blue-600' 
                                : 'bg-white border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    {/* فیلتر رنگ */}
                    <div>
                      <h4 className="font-medium mb-3">رنگ</h4>
                      <div className="flex flex-wrap gap-2">
                        {['مشکی', 'صورتی', 'سفید', 'خاکستری', 'بژ', 'آبی', 'طرح دار'].map(color => (
                          <button
                            key={color}
                            onClick={() => setFilters({...filters, color: filters.color === color ? '' : color})}
                            className={`px-3 py-1 border rounded-md text-sm ${
                              filters.color === color 
                                ? 'bg-blue-600 text-white border-blue-600' 
                                : 'bg-white border-gray-300 hover:bg-gray-50'
                            }`}
                          >
                            {color}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setShowFilters(false)}
                    className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-medium"
                  >
                    نمایش نتایج
                  </button>
                </div>
              </div>
            )}

            {/* لیست محصولات */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                {[...Array(8)].map((_, i) => (
                  <ProductSkeleton key={i} />
                ))}
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg p-8 text-center shadow-sm">
                <h3 className="text-lg font-medium text-gray-700 mb-2">محصولی یافت نشد</h3>
                <p className="text-gray-500 mb-4">می‌توانید فیلترهای خود را تغییر دهید</p>
                <button 
                  onClick={resetFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  حذف همه فیلترها
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id}
                    product={product}
                    isWishlisted={wishlist.includes(product.id)}
                    onWishlistToggle={toggleWishlist}
                    onAddToCart={addToCart}
                    onClick={goToProductDetail}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>
    </div>
  );
};

// کامپوننت کارت محصول (بدون تغییر)
const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition"
      onClick={() => onClick(product.id)}
    >
      <div className="relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover"
        />
        <button 
          onClick={(e) => onWishlistToggle(product.id, e)} 
          className="absolute top-2 left-2 text-xl text-red-500"
        >
          {isWishlisted ? <FaHeart /> : <FiHeart />}
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-800 truncate">{product.name}</h3>
        <div className="text-gray-600 text-xs mt-1">{product.category}</div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-blue-600 font-bold text-sm">{product.price.toLocaleString("fa-IR")} تومان</span>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="text-gray-600 hover:text-blue-600"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};


// کامپوننت اسکلت بارگذاری (بدون تغییر)
const ProductSkeleton = () => (
  <div className="bg-white rounded-lg shadow-sm animate-pulse">
    <div className="h-56 bg-gray-200"></div>
    <div className="p-4 space-y-2">
      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  </div>
);


export default WomanProducts;