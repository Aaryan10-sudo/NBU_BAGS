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
              <div
                key={index}
                className="md:w-[210px] sm:w-[210px] w-[190px] h-auto shadow-lg  "
              >
                <div className="h-[250px] rounded-tl-xl rounded-tr-xl object-cover object-center">
                  <img src={value.image} className="h-full w-full" />
                </div>

                <p className="w-[100px] bg-slate-400 mx-[10px] my-[10px] px-[10px]">
                  {value.category}
                </p>

                <h1 className="font-extrabold sm:text-[17px] text-[17px] mx-[10px] font-ubuntu text-center">
                  {value.productName}
                </h1>

                <p className="mx-[10px] font-ubuntu text-center bg-blue-500 mb-[10px] text-white h-[30px] flex items-center justify-center">
                  Rs. {value.price}
                </p>
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
