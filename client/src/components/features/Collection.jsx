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

        <div className="flex md:justify-center sm:justify-around justify-between  flex-wrap md:mx-[40px] mx-[10px] sm:gap-[20px] gap-[20px]">
          {product.map((value, index) => {
            return (
              /* From Uiverse.io by Javierrocadev */
              <div
                class="w-50 h-80 sm:w-60 bg-gray-50 p-3 flex flex-col gap-1"
                key={index}
              >
                <div
                  class="duration-500 h-48 hover:contrast-100 bg-cover bg-center"
                  style={{ backgroundImage: `url(${value.image})` }}
                ></div>
                <div class="flex flex-col gap-4">
                  <div class="flex flex-row justify-between">
                    <div class="flex flex-col">
                      <span class="text-xl font-bold font-ubuntu">
                        {value.productName}
                      </span>
                      <p class="text-xs text-gray-700">{value.category}</p>
                    </div>
                    <span class="font-bold  text-red-600 font-ubuntu">
                      Rs. {value.price}
                    </span>
                  </div>
                  <button class="hover:bg-sky-700 text-gray-50 bg-sky-800 py-2">
                    Add to cart
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
