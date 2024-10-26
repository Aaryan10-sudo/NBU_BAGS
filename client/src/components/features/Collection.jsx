import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Collection = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();
  const getAllProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/read-all",
        method: "GET",
      });
      setProduct(result?.data?.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="sm:mx-[30px] ">
        <center>
          <h1 className="font-extrabold text-black text-[30px] my-[30px] font-ubuntu ">
            Our Featured Collection
          </h1>
        </center>

        <div className="flex md:justify-center sm:justify-around justify-center  flex-wrap md:mx-[40px] mx-[10px] sm:gap-[20px] gap-[10px] ">
          {product.map((value, index) => {
            return (
              <div
                class="w-[190px] h-[400px] sm:w-60 bg-gray-50 p-3 flex flex-col rounded-md shadow-md"
                key={index}
              >
                <div class="duration-500  hover:contrast-100 object-cover object-center overflow-hidden  h-[600px] rounded-lg ">
                  <img
                    src={value.image}
                    className="rounded-lg"
                    alt="BagImage"
                  />
                </div>
                <div class="flex flex-col gap-[10px] w-full">
                  <div class="flex flex-col justify-center items-center w-full">
                    <div class="w-full flex justify-center">
                      <span class="text-xl font-montserrat font-extrabold text-center">
                        {value.productName}
                      </span>
                    </div>
                    <p class="text-xs text-gray-700 py-[5px] text-center flex items-center justify-center">
                      {value.productDescription}
                    </p>
                    <span class="flex text-black font-ubuntu gap-[20px]">
                      <p className="text-[12px] flex items-center text-black">
                        {value.category}
                      </p>
                      <p className="font-montserrat font-bold text-[20px] flex items-center text-blue-600">
                        रु. {value.price}
                      </p>
                    </span>
                  </div>

                  <button className="buttonTest rounded-lg">
                    <div class="default-btn sm:px-[30px] px-[20px] flex items-center gap-2">
                      <svg
                        viewBox="0 0 24 24"
                        width="20"
                        height="20"
                        stroke="#ffffff"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="cart-icon"
                      >
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                      </svg>
                      <span>Add to Cart</span>
                    </div>
                    <div class="hover-btn">
                      <center>
                        <span className="text-center font-ubuntu">
                          Rs. {value.price}
                        </span>
                      </center>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <center>
          <button
            className="font-bold text-[15px] border-2 border-blue-600 w-[170px] rounded-xl hover:scale-105 transition-all ease-linear duration-200"
            onClick={() => {
              navigate("/product");
            }}
          >
            Browse all products
          </button>
        </center>
      </div>
      <br />
      <br />
      <div className="sm:mx-[50px] mx-[20px] sm:h-[250px] h-[200px] bg-[url('/banner2.jpg')] bg-cover bg-center shadow-xl"></div>
      <br />
    </>
  );
};

export default Collection;
