import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () => {
  let [product, setProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/read-all",
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
      <h1 className="font-bold text-center text-[20px] my-[20px]">
        Discover Your Next Favorite{" "}
      </h1>
      <div className="flex gap-[30px] sm:justify-around justify-between  flex-wrap md:mx-[40px] mx-[10px] my-[20px]">
        {product.map((value, index) => {
          return (
            <div
              key={index}
              className="md:w-[250px] sm:w-[220px] w-[190px] h-[300px] shadow-lg md:mt-[0px] mt-[px] rounded-xl"
            >
              <div className="h-[250px] bg-slate-400 rounded-tl-xl rounded-tr-xl"></div>
              <div className="flex justify-between p-[10px]">
                <h1 className="font-bold sm:text-[17px] text-[17px]">
                  {value.productName}
                </h1>
                <span className="h-[30px] bg-blue-400 sm:w-[90px] w-[70px] text-center font-bold text-white flex items-center justify-center rounded-md">
                  <p>{value.price}</p>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;
