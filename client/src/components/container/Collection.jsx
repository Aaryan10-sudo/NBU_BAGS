import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { hitApi } from "../../services/HitApi";
import ProductsList from "./ProductCard";

const Collection = () => {
  let [product, setProduct] = useState([]);
  let navigate = useNavigate();
  const getAllProduct = async () => {
    try {
      let result = await hitApi({
        url: "/product/read-all",
        method: "GET",
      });
      setProduct(result?.data?.data.reverse());
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <>
      <div className="sm:mx-[30px] 2xl:px-40 ">
        {/* Header */}
        <center>
          <h1 className="font-extrabold text-black text-[30px] my-[30px] font-ubuntu 2xl:text-[40px]">
            Our Featured Collection
          </h1>

          {/* Product Cards */}
          <ProductsList />
        </center>

        {/* Browse all product button */}
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
      <center>
        <div className="sm:mx-[50px] 2xl:mx-40 mx-[20px] sm:h-[250px] h-[200px] bg-[url('/banner2.jpg')] bg-cover bg-center shadow-xl max-w-[1536px] flex justify-center items-center self-center"></div>
      </center>
      <br />
    </>
  );
};

export default Collection;
