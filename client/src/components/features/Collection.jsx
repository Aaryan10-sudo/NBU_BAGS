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
      <div className="mx-[]">
        <center>
          <h1 className="font-extrabold text-black text-[30px] mt-[30px] font-ubuntu ">
            Our Featured Collection
          </h1>
        </center>

        <div className="flex md:justify-normal sm:justify-around justify-between  flex-wrap md:mx-[40px] mx-[10px] sm:gap-[30px] gap-[10px`]">
          {product.map((value, index) => {
            return (
              <div
                key={index}
                className="md:w-[210px] sm:w-[210px] w-[190px] h-auto shadow-lg md:mt-[30px] mt-[30px] "
              >
                <div className="h-[250px] rounded-tl-xl rounded-tr-xl object-cover object-center">
                  <img src={value.image} className="h-full w-full" />
                </div>
                <span className="mx-[10px]">
                  <p className="w-[100px] bg-slate-400 mx-[10px] mt-[5px]">
                    {value.category}
                  </p>
                </span>

                <h1 className="font-bold sm:text-[17px] text-[17px] mx-[10px] font-ubuntu">
                  {value.productName}
                </h1>
                <span className="h-[30px] sm:w-[90px] w-[70px] font-bold text-white rounded-md mx-[10px]">
                  <p className="mx-[10px] font-ubuntu">Rs. {value.price}</p>
                </span>
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
