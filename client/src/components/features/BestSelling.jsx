import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSelling = () => {
  return (
    <div className="sm:mx-[20px] mt-[20px]">
      <h1 className="text-center font-extrabold text-[30px]">
        Our Top Sellings
      </h1>
      <br />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="sm:mx-[50px] mx-[20px] flex sm:flex-row flex-col">
            <img src="bestselling1.png" className="sm:h-[250px]" />
            <div>
              <h1 className="text-[30px] mt-[10px] font-extrabold">
                BAG 20211
              </h1>
              <span className="bg-slate-400">550 sold</span>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <button className="border-2 border-blue-600 w-[100px] hidden sm:block">
                Rs. 5500
              </button>
            </div>
          </div>
          <br />
        </SwiperSlide>
        <SwiperSlide>
          <div className="sm:mx-[50px] mx-[20px] flex sm:flex-row flex-col">
            <img src="banner3.png" className="sm:h-[250px]" />
            <div>
              <h1 className="text-[30px] mt-[10px] font-extrabold">
                BAG 20211
              </h1>
              <span className="bg-slate-400">230 sold</span>
              <br />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <br />
              <button className="border-2 border-blue-600 w-[100px] hidden sm:block">
                Rs. 4500
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BestSelling;
