import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://mystore-pbfe.onrender.com/api/products/category/زنانه')
            .then(res => setProducts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>

            <div className='flex flex-row align-center justify-center mt-10'>

                <hr class="w-80 h-0.5 mt-5 ml-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

                <h2 className="text-sm  sm:text-base md:text-2xl font-semibold mb-6 text-center">محصولات زنانه</h2>

                <hr class="w-80 h-0.5 mt-5 mr-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

            </div >
            <div className="w-full overflow-x-auto px-4">

                <div className="flex gap-4 w-max">
                    {products.map(product => (
                        <div
                            key={product._id || product.id}
                            className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px]"
                        >
                            <ProductCard product={{ ...product, price: Number(product.price) }} />
                        </div>
                    ))}

                    {/* دکمه مشاهده همه */}
                    <div
                        className="min-w-[160px] sm:min-w-[180px] md:min-w-[200px] flex items-center justify-center border rounded shadow p-4 cursor-pointer hover:bg-gray-200"
                        onClick={() => navigate('/WomanProducts')}
                    >
                        <div className="text-center">
                            <span className="block mb-2">مشاهده همه</span>
                            <svg className="w-6 h-6 mx-auto text-black" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1.3 6.326a.91.91 0 0 0 0 1.348L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProductList;
