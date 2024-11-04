import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

const BestSelling = () => {
  return (
    <div className="md:mx-[20px] mt-[20px] 2xl:px-40 2xl:mx-0">
      <h1 className="text-center font-extrabold text-[30px] font-ubuntu">
        Our Top Sellings
      </h1>
      <br />
      <div className="md:h-[300px]">
        {/* Swiper package */}
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
          className="mySwiper bg-secondary"
        >
          {/* Product 1 */}
          <SwiperSlide>
            <div className="md:mx-[50px] mx-[20px] 2xl:mx-0 flex sm:flex-row flex-col">
              <img src="bestselling1.png" className="sm:h-[250px]" />
              <div className="">
                <h1 className="text-[30px] mt-[10px] font-extrabold font-ubuntu">
                  BAG 20211
                </h1>
                <span className="bg-slate-400">550 sold</span>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <button className="border-2 border-blue-600 w-[100px] hidden md:block">
                  Rs. 5500
                </button>
              </div>
            </div>
          </SwiperSlide>

          {/* Product 2 */}
          <SwiperSlide>
            <div className="md:mx-[50px] mx-[20px] flex sm:flex-row flex-col ">
              <img src="banner3.png" className="sm:h-[250px]" />
              <div className="">
                <h1 className="text-[30px] mt-[10px] font-extrabold font-ubuntu">
                  BAG 20211
                </h1>
                <span className="">230 sold</span>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <br />
                <button className="border-2 border-blue-600 w-[100px] hidden md:block">
                  Rs. 4500
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default BestSelling;
