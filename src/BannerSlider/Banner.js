import React from "react";

import BannerSlider from "./BannerSlider";

function Banner() {


  return (
    <div className='flex flex-col md:flex-row  items-center justify-center w-full  bg-red-500'>


      <div className='w-1/2 h-full bg-blue-100'>
        <BannerSlider />

      </div>
      <div className=' flex flex-col items-center justify-start w-full h-full bg-red-900 '>

        <div className="w-[500px] h-1/3 overflow-hidden bg-blue-200">
          <img
            src="https://via.placeholder.com/500x250"
            alt="تصویر نمونه"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-[500px]  h-1/3 overflow-hidden bg-blue-200 mt-5">
          <img
            src="https://via.placeholder.com/500x250"
            alt="تصویر نمونه"
            className="w-full h-full object-cover"
          />
        </div>


      </div>










    </div>
  );
}

export default Banner;
