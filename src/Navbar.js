import React, { useState, useEffect, useRef, useContext } from 'react';
import { FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import logo from './assets/logo.png';

import { useCart } from './context/CartContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const { user, logout } = useContext(UserContext);
  const { totalItems } = useCart();

  const menCategories = ["کیف و کفش", "شلوار", "تیشرت", "پیراهن", "لباس ورزشی", "اکسسوری", "لباس زیر", "ست راحتی"];
  const womenCategories = ["کیف و کفش", "شلوار", "تاپ و بلوز", "پیراهن", "لباس ورزشی", "اکسسوری", "لباس زیر", "لباس خواب"];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const DropdownMenu = ({ categories, title }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <div className="relative">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center px-3 py-2 hover:text-gray-900">
          {title}
          <svg className={`ml-1 ${isOpen ? 'rotate-180' : ''}`} width="16" height="16" fill="currentColor" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </button>
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20 border border-gray-100">
            {categories.map((item, index) => (
              <a
                key={index}
                href={`/products?category=${encodeURIComponent(item)}`}
                className="block px-4 py-2 text-right hover:bg-gray-100 text-gray-700"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav ref={navbarRef} className={`sticky top-0 z-10 bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4">
        {/* دسکتاپ */}
        <div className="hidden md:flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="/" className="flex items-center">
              <img src={logo} alt="لوگو فروشگاه" className="h-10" />
            </a>
            <div className="flex items-center space-x-6">
              <a href="/" className="hover:text-gray-900">خانه</a>
              <a href="/products" style={{ marginRight: 15 }} className=" hover:text-gray-900 ">محصولات</a>
              <DropdownMenu categories={menCategories} title="مردانه" />
              <DropdownMenu categories={womenCategories} title="زنانه" />
              <a href="/kidsproducts" className="hover:text-gray-900">بچگانه</a>
              <a href="/about" className="hover:text-gray-900">درباره ما</a>
              <a href="/PayButton" className="hover:text-gray-900">تماس با ما</a>
            </div>
          </div>

          <div className="flex items-center space-x-4 ">
            <form onSubmit={handleSearch} className="relative ml-5">
              <input
                type="text"
                placeholder="جستجو..."
                className="pr-10 pl-4 py-2 border border-gray-300 rounded-full text-sm w-64 focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FaSearch />
              </button>
            </form>

            <div className="flex items-center space-x-3">
              <button onClick={() => navigate('/checkout')} className="p-2 text-gray-700 hover:text-gray-900 relative">
                <FaShoppingCart size={18} />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              </button>

              {user ? (
                <>
                  <span className="text-sm text-gray-700">{user.nam  + " " + user.lname || "کاربر"}</span>
                  <button
                    onClick={logout}
                    className="px-3 py-2 border border-red-400 rounded-md hover:bg-red-100 text-red-600 text-sm"
                  >
                  خروج از حساب
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center space-x-1 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  <FaUser size={14} />
                  <span>ورود / ثبت‌نام</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* موبایل */}
        <div className="md:hidden flex items-center justify-between">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-gray-700">
            {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <a href="/" className="flex items-center">
            <img src={logo} alt="لوگو فروشگاه" className="h-10" />
          </a>
          <button onClick={() => navigate('/cart')} className="p-2 text-gray-700 relative">
            <FaShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-4 space-y-2">
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="جستجو..."
                  className="pr-10 pl-4 py-2 border border-gray-300 rounded-full text-sm w-full focus:ring-2 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  <FaSearch />
                </button>
              </form>

              <a href="/" className="block px-3 py-2 hover:bg-gray-100 rounded">خانه</a>
              <a href="/products" className="block px-3 py-2 hover:bg-gray-100 rounded">محصولات</a>

              <div className="border-b border-gray-200 my-2"></div>

              {user ? (
                <>
                  <span className="block px-3 py-2 text-sm text-gray-700">{user.name || "کاربر"}</span>
                  <button
                    onClick={logout}
                    className="block w-full text-right px-3 py-2 text-red-600 hover:bg-gray-100 rounded"
                  >
                    خروج
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center space-x-2 px-3 py-2 w-full text-left hover:bg-gray-100 rounded"
                >
                  <FaUser size={14} />
                  <span>ورود / ثبت‌نام</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
