import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  let [product, setProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/readall",
        method: "GET",
      });
      setProduct(result?.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div>
      <h1 className="font-bold text-center text-[25px] my-[20px] font-ubuntu">
        Discover Your Next Favorite{" "}
      </h1>
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
    </div>
  );
};

export default Product;
