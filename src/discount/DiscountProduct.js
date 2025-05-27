import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiFilter, FiHeart, FiShoppingCart, FiStar, FiX, FiChevronDown } from 'react-icons/fi';
import { FaHeart } from 'react-icons/fa';

const DiscountProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    size: '',
    color: '',
    sortBy: 'discount-high'
  });
  const [showFilters, setShowFilters] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();

  // دریافت محصولات از API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // شبیه‌سازی دریافت داده از API
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // داده‌های نمونه برای محصولات حراجی
        const mockProducts = [
          {
            id: 1,
            name: 'پیراهن مردانه کلاسیک',
            price: 159000,
            originalPrice: 259000,
            discountPercent: 39,
            image: 'https://dkstatics-public.digikala.com/digikala-products/7b1e774827fd4dc4efea62fb1f25345cebb229af_1597527801.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.5,
            category: 'پیراهن',
            size: ['S', 'M', 'L', 'XL'],
            color: 'آبی',
            isNew: true,
            isBestSeller: true
          },
          {
            id: 2,
            name: 'شلوار جین زنانه',
            price: 215000,
            originalPrice: 315000,
            discountPercent: 32,
            image: 'https://dkstatics-public.digikala.com/digikala-products/1529c5aefb7da7e28eba5c734c2e25313a98a896_1705136517.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.2,
            category: 'شلوار',
            size: ['36', '38', '40'],
            color: 'مشکی',
            isSale: true
          },
          {
            id: 3,
            name: 'کفش ورزشی مردانه',
            price: 350000,
            originalPrice: 490000,
            discountPercent: 29,
            image: 'https://dkstatics-public.digikala.com/digikala-products/ba947cb2fd821e2a30720e7921c40859309ab552_1700917954.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.7,
            category: 'کفش',
            size: ['39', '40', '41', '42'],
            color: 'سفید'
          },
          {
            id: 4,
            name: 'مانتو زنانه',
            price: 450000,
            originalPrice: 620000,
            discountPercent: 27,
            image: 'https://dkstatics-public.digikala.com/digikala-products/b7e157f4ddd89d543fed9b44cdab8f75dca0e842_1730714557.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.8,
            category: 'مانتو',
            size: ['M', 'L', 'XL'],
            color: 'خاکستری',
            isBestSeller: true
          },
          {
            id: 5,
            name: 'ساعت مچی هوشمند',
            price: 1250000,
            originalPrice: 1890000,
            discountPercent: 34,
            image: 'https://dkstatics-public.digikala.com/digikala-products/a2cde0261eead5bd649b98d8262f8a7dcb41cef2_1740505047.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.3,
            category: 'اکسسوری',
            color: 'مشکی'
          },
          {
            id: 6,
            name: 'کیف لپ تاپ',
            price: 145000,
            originalPrice: 225000,
            discountPercent: 36,
            image: 'https://dkstatics-public.digikala.com/digikala-products/713344ffff4e113a83cfa18745ebd14ccd8e1fc6_1704963115.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.1,
            category: 'کیف',
            color: 'خاکستری',
            isSale: true
          },
          {
            id: 7,
            name: 'هودی مردانه',
            price: 185000,
            originalPrice: 265000,
            discountPercent: 30,
            image: 'https://dkstatics-public.digikala.com/digikala-products/117704200.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.4,
            category: 'هودی',
            size: ['S', 'M', 'L', 'XL'],
            color: 'مشکی'
          },
          {
            id: 8,
            name: 'عینک آفتابی',
            price: 195000,
            originalPrice: 295000,
            discountPercent: 34,
            image: 'https://dkstatics-public.digikala.com/digikala-products/cb0120acdd39387fb3f9b60ebaaf890b5a6b99a2_1720220272.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
            rating: 4.6,
            category: 'اکسسوری',
            color: 'قهوه‌ای',
            isNew: true
          }
        ];
        
        // فقط محصولات دارای تخفیف
        const saleProducts = mockProducts.filter(p => p.originalPrice > p.price);
        setProducts(saleProducts);
        setFilteredProducts(saleProducts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
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
      result = result.filter(p => p.size && p.size.includes(filters.size));
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
        case 'discount-high': 
          return (b.discountPercent || 0) - (a.discountPercent || 0);
        case 'discount-low':
          return (a.discountPercent || 0) - (b.discountPercent || 0);
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

  // افزودن به سبد خرید
  const addToCart = (productId, e) => {
    e.stopPropagation();
    console.log('Added to cart:', productId);
    // منطق افزودن به سبد خرید
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
      sortBy: 'discount-high'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* هدر صفحه */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">تخفیفات طلایی</h1>
          <div className="flex items-center justify-between mt-2">
            <nav className="flex items-center text-sm text-gray-600">
              <a href="/" className="hover:text-blue-600">خانه</a>
              <span className="mx-2">/</span>
              <span className="text-blue-600">تخفیف‌ها و حراجی‌ها</span>
            </nav>
            <div className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm">
              تا {Math.max(...products.map(p => p.discountPercent || 0))}% تخفیف
            </div>
          </div>
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
                  {['پیراهن', 'شلوار', 'مانتو', 'کفش', 'هودی', 'اکسسوری', 'کیف'].map(cat => (
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
                  <option value="500000-1000000">500,000 تا 1,000,000</option>
                  <option value="1000000+">بالای 1,000,000</option>
                </select>
              </div>
              
              {/* فیلتر سایز */}
              <div>
                <h4 className="font-medium mb-3">سایز</h4>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', '36', '38', '40', '39', '40', '41', '42'].map(size => (
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
                  {['مشکی', 'آبی', 'سفید', 'خاکستری', 'قهوه‌ای', 'طرح دار'].map(color => (
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
                  {filteredProducts.length} محصول حراجی یافت شد
                </span>
                <div className="relative">
                  <select 
                    className="appearance-none bg-white px-4 py-2 pr-8 border rounded-lg text-sm"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  >
                    <option value="discount-high">بیشترین تخفیف</option>
                    <option value="discount-low">کمترین تخفیف</option>
                    <option value="price-low">قیمت (کم به زیاد)</option>
                    <option value="price-high">قیمت (زیاد به کم)</option>
                    <option value="popular">پرفروش‌ترین</option>
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
                        {['پیراهن', 'شلوار', 'مانتو', 'کفش', 'هودی', 'اکسسوری', 'کیف'].map(cat => (
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
                        <option value="500000-1000000">500,000 تا 1,000,000</option>
                        <option value="1000000+">بالای 1,000,000</option>
                      </select>
                    </div>
                    
                    {/* فیلتر سایز */}
                    <div>
                      <h4 className="font-medium mb-3">سایز</h4>
                      <div className="flex flex-wrap gap-2">
                        {['S', 'M', 'L', 'XL', '36', '38', '40', '39', '40', '41', '42'].map(size => (
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
                        {['مشکی', 'آبی', 'سفید', 'خاکستری', 'قهوه‌ای', 'طرح دار'].map(color => (
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
                <h3 className="text-lg font-medium text-gray-700 mb-2">محصول حراجی یافت نشد</h3>
                <p className="text-gray-500 mb-4">می‌توانید فیلترهای خود را تغییر دهید</p>
                <button 
                  onClick={resetFilters}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  حذف همه فیلترها
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
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

// کامپوننت کارت محصول با تغییرات برای صفحه حراج
const ProductCard = ({ product, isWishlisted, onWishlistToggle, onAddToCart, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer group relative
               max-w-xs mx-auto sm:max-w-sm md:max-w-md
               transition-shadow duration-300 hover:shadow-xl"
    onClick={() => onClick(product.id)}
  >
    {/* تگ‌های ویژه */}
    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1 sm:gap-2">
      {product.isNew && (
        <span className="bg-emerald-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
          جدید
        </span>
      )}
      {product.discountPercent && (
        <span className="bg-rose-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
          %{product.discountPercent} تخفیف
        </span>
      )}
      {product.isBestSeller && (
        <span className="bg-amber-500 text-white text-[10px] sm:text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-md">
          پرفروش
        </span>
      )}
    </div>

    {/* تصویر محصول */}
    <div className="relative overflow-hidden h-48 sm:h-56 md:h-64">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* دکمه‌های اکشن */}
      <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onWishlistToggle(product.id, e);
          }}
          aria-label="Toggle Wishlist"
        >
          {isWishlisted ? (
            <FaHeart className="text-rose-500" size={16} />
          ) : (
            <FiHeart className="text-gray-600" size={16} />
          )}
        </button>

        <button
          className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product.id, e);
          }}
          aria-label="Add to Cart"
        >
          <FiShoppingCart className="text-gray-600" size={16} />
        </button>
      </div>
    </div>

    {/* محتوای کارت */}
    <div className="p-4 sm:p-5">
      {/* عنوان و دسته‌بندی */}
      <div className="mb-3">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base line-clamp-1">{product.name}</h3>
        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mt-1">
          <span>{product.category}</span>
          <span>{product.color}</span>
        </div>
      </div>

      {/* امتیاز */}
      <div className="flex items-center mb-3">
        <div className="flex text-amber-400">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`${i < Math.floor(product.rating) ? 'fill-current text-amber-400' : 'text-gray-300'}`}
              size={14}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500 mr-2">({product.rating})</span>
      </div>

      {/* قیمت و سایزها */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="text-right">
          <span className="font-bold text-gray-900 text-base sm:text-lg">
            {product.price.toLocaleString()} تومان
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-500 line-through block">
              {product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {product.size && (
          <div className="flex gap-1 flex-wrap max-w-[150px] sm:max-w-[180px]">
            {product.size.slice(0, 3).map((size) => (
              <span
                key={size}
                className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded whitespace-nowrap"
              >
                {size}
              </span>
            ))}
            {product.size.length > 3 && (
              <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded">
                +{product.size.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* دکمه افزودن به سبد خرید */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onAddToCart(product.id, e);
        }}
        className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
      >
        افزودن به سبد خرید
      </button>
    </div>
  </div>
);


// کامپوننت اسکلت بارگذاری (بدون تغییر)
const ProductSkeleton = () => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
    <div className="bg-gray-200 h-60"></div>
    <div className="p-4">
      <div className="bg-gray-200 h-5 rounded mb-2 w-3/4"></div>
      <div className="bg-gray-200 h-4 rounded mb-3 w-1/2"></div>
      <div className="flex justify-between mb-4">
        <div className="bg-gray-200 h-4 rounded w-1/3"></div>
        <div className="bg-gray-200 h-4 rounded w-1/3"></div>
      </div>
      <div className="bg-gray-200 h-10 rounded"></div>
    </div>
  </div>
);

export default DiscountProduct;