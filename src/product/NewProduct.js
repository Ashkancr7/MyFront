import React from 'react';
import DiscuntProductCard from './DiscuntProductCard';
import { useNavigate } from 'react-router-dom';


const products = [
    {
        id: 1,
        title: 'محصول اول',
        description: 'این محصول عالی است و ویژگی‌های بسیاری دارد.',
        price: '100000',
        originalPrice: 1200000,

        image: [

            'https://dkstatics-public.digikala.com/digikala-products/116799968.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        ],
        discount: '40',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    },
    {
        id: 2,
        title: 'محصول دوم',
        description: 'این محصول فوق العاده است و برای شما مناسب است.',
        price: '150000',
        originalPrice: 1200000,

        image: [

            'https://dkstatics-public.digikala.com/digikala-products/e507143021079f25007a64b8ba8c91d449bed3d9_1733291360.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        ],
        discount: '50',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    },
    {
        id: 3,
        title: 'محصول سوم',
        description: 'این محصول فوق العاده است و برای شما مناسب است.',
        price: '150000',
        originalPrice: 1200000,

        image: [

            'https://dkstatics-public.digikala.com/digikala-products/e507143021079f25007a64b8ba8c91d449bed3d9_1733291360.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        ],
        discount: '30',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24

    },
    {
        id: 4,
        title: 'محصول چهارم',
        description: 'این محصول فوق العاده است و برای شما مناسب است.',
        price: '150000',
        originalPrice: 1200000,



        image: [

            'https://dkstatics-public.digikala.com/digikala-products/1719701081f661ae8c40d0641a68b1bb3370a6c9_1625855385.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/ff0f1ea57e78cd6e59c7b5181ab102691ad47ba0_1732969710.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80'
        ],
        discount: '80',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    },
    {
        id: 5,
        title: 'محصول پنجم',
        description: 'این محصول فوق العاده است و برای شما مناسب است.',
        price: '150000',
        originalPrice: 1200000,

        image: [
            'https://dkstatics-public.digikala.com/digikala-products/ff0f1ea57e78cd6e59c7b5181ab102691ad47ba0_1732969710.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/1719701081f661ae8c40d0641a68b1bb3370a6c9_1625855385.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

        ],
        discount: '10',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    },
    {
        id: 1,
        title: 'محصول اول',
        description: 'این محصول عالی است و ویژگی‌های بسیاری دارد.',
        price: '100000',
        originalPrice: 1200000,

        image: [
            'https://dkstatics-public.digikala.com/digikala-products/116799968.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

        ],
        discount: '40',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24

    },
    {
        id: 2,
        title: 'محصول دوم',
        description: 'این محصول فوق العاده است و برای شما مناسب است.',
        price: '150000',
        originalPrice: 1200000,

        image: [
            'https://dkstatics-public.digikala.com/digikala-products/fb5a1d3c5c6809b454ea4b4802b8641c52453bbc_1627574787.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',

            'https://dkstatics-public.digikala.com/digikala-products/71dad49508e836d030bca75b440f374f99799c77_1635367864.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80',
        ],
        discount: '75',
        colors: ["مشکی", "سفید", "نقره‌ای"],
        sizes: ["S", "M", "L", "XL"],
        rating: 4.5,
        reviews: 24
    },

    // می‌توانید محصولات بیشتری اضافه کنید
];

const NewProduct = () => {
    const navigate = useNavigate();

    return (

        <div className=' mt-10'>
            <div className='flex flex-row align-center justify-center mt-10'>

                <hr class="w-80 h-0.5 mt-5 ml-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

                <h2 className="text-sm  sm:text-base md:text-2xl font-semibold mb-6 text-center">محصولات طلایی</h2>

                <hr class="w-80 h-0.5 mt-5 mr-3 bg-black border-0 rounded-sm dark:bg-gray-700"></hr>

            </div >
            <div className="w-full overflow-x-auto px-2 custom-scrollbar">

                <div className="flex gap-4 w-max"> 
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-[calc(20%-8px)] sm:w-[calc(25%-10px)] md:w-[calc(20%-12px)] lg:w-[calc(16.666%-12px)]"
                        >
                            <DiscuntProductCard product={{ ...product, price: Number(product.price) }} />
                        </div>
                    ))}

                    {/* دکمه مشاهده همه */}
                    <div className="w-[calc(33.333%-8px)] sm:w-[calc(25%-10px)] md:w-[calc(20%-12px)] lg:w-[calc(16.666%-12px)] flex items-center justify-center">
                        <button
                            onClick={() => navigate('/DiscountProduct')}
                            className="w-full h-10 bg-white rounded shadow flex flex-row items-center justify-center hover:bg-gray-200 p-4"
                        >
                            <span>مشاهده همه</span>
                            <svg className="w-3 h-3 mt-2 text-black mb-2" viewBox="0 0 8 14" fill="none">
                                <path d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default NewProduct;