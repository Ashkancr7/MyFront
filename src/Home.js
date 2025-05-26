import { useState, useEffect } from 'react';
import './App.css';

import ProductList from '../src/product/ProductList';
import NewProduct from '../src/product/NewProduct';
import ProductListMan from '../src/product/ProductListMan';
import ProductListChaild from '../src/product/ProductListChaild';
import BannerSlider from './BannerSlider/BannerSlider';


// import { TailSpin, DNA, ThreeCircles } from 'react-loader-spinner';



import Navbar from './Navbar';
import Footer from '../src/footer/Footer'



function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // شبیه‌سازی لودینگ داده‌ها
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 2 ثانیه تاخیر برای نمایش لودر

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
       <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>

      </div>
    );
  }

  return (
    <div className="App">
      <Navbar />
      <BannerSlider />
      <NewProduct />
      <ProductList />
      <ProductListMan />
      <ProductListChaild />
      <Footer />



    </div>
  );
}

export default Home;
