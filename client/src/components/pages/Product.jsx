import React, { useEffect, useState } from "react";
import { hitApi } from "../../services/HitApi";
import ProductsList from "../container/ProductCard";

const Product = () => {
  let [product, setProduct] = useState([]);
  const getAllProduct = async () => {
    try {
      let result = await hitApi({
        url: "/product/readall",
        method: "GET",
      });
      setProduct(result?.data?.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllProduct();
  }, []);
  return (
    <div className="pb-[20px] 2xl:px-40">
      {/* Header */}
      <h1 className="font-bold text-center text-[25px] my-[20px] font-ubuntu">
        Discover Your Next Favorite{" "}
      </h1>

      {/* Product card */}
      <ProductsList />
    </div>
  );
};

export default Product;
