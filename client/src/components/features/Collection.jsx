import axios from "axios";
import React, { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Collection = () => {
  let [product, setProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/readall",
        method: "GET",
      });
      console.log(result?.data?.data);
      setProduct(result?.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="mx-[]">
        <center>
          <h1 className="font-extrabold text-black text-[30px]">
            Our Featured Collection
          </h1>
        </center>
        <br />

        <div className="flex justify-between flex-wrap sm:mx-[40px] mx-[20px]">
          {product.map((value, index) => {
            return (
              <div
                key={index}
                className="sm:w-[250px] w-[210px] h-[300px] shadow-lg sm:mt-[50px] mt-[20px] rounded-xl"
              >
                <div className="h-[250px] bg-slate-400 rounded-tl-xl rounded-tr-xl"></div>
                <div className="flex justify-between p-[10px]">
                  <h1 className="font-bold text-[17px]">{value.productName}</h1>
                  <span className="h-[30px] bg-blue-400 w-[90px] text-center font-bold text-white flex items-center justify-center rounded-md">
                    <p>{value.price}</p>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <br />
        <center>
          <button className="font-bold text-[15px] border-2 border-blue-600 w-[170px] rounded-xl hover:scale-105 transition-all ease-linear duration-200">
            Browse all products
          </button>
        </center>
      </div>
      <br />
      <br />
      <div className="sm:mx-[50px] mx-[20px] sm:h-[250px] h-[200px] bg-[url('banner2.jpg')] bg-cover bg-center shadow-xl"></div>
      <br />
    </>
  );
};

export default Collection;
