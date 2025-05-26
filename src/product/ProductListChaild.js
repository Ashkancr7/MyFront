import React, { useState,useEffect } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const ProductListChaild = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('https://mystore-pbfe.onrender.com/api/products/category/بچگانه')
          .then(res => {
    
            console.log("res.data",res.data);
            
            setProducts(res.data)
            // console.log('j,j',products);
            
          
          })
          .catch(err => console.error(err));
      }, []);

    return (

        <div className="w-full bg-gray-100 flex flex-col items-center">
            <div className="w-full   px-4 py-10">
                <div className='flex flex-row align-center justify-center'>

                    <hr class="w-80 h-0.5 mt-5 ml-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

                    <h2 className="text-sm  sm:text-base md:text-2xl font-semibold mb-6 text-center">محصولات بچگانه</h2>

                    <hr class="w-80 h-0.5 mt-5 mr-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

                </div >
                {/* اسکرول افقی با نمایش فقط ۵ محصول در ابتدا */}
                <div className="w-full max-w-[1] overflow-x-auto custom-scrollbar">
                    <div className="flex gap-6 w-max">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={{ ...product, price: Number(product.price) }} />
                        ))}
                        <button onClick={() => navigate('/KidsProducts')} className='flex align-center justify-center items-center  h-12 w-32 mt-32 rounded hover:bg-gray-300  '>
                            <span>مشاهده همه</span>
                            <svg class="w-4 h-4 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductListChaild;