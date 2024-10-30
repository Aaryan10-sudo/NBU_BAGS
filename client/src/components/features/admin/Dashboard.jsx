import React, { useEffect, useState } from "react";
import { hitApi } from "../../../services/HitApi";

const Dashboard = () => {
  let [productCount, setProductCount] = useState(0);
  let [webuserCount, setWebuserCount] = useState(0);
  let [loader, setLoader] = useState(false);

  const totalProduct = async () => {
    setLoader(true);
    try {
      let result = await hitApi({
        url: "/product/total-product",
        method: "GET",
      });
      setProductCount(result?.data?.count);
      setLoader(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalUser = async () => {
    try {
      let result = await hitApi({
        url: "/product/total-user",
        method: "GET",
      });
      setWebuserCount(result?.data?.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    totalProduct();
    totalUser();
  }, []);
  return (
    <>
      {loader ? (
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div class="loader"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-extrabold text-[30px] sm:my-[30px] my-[10px]">
            Dashboard
          </h1>
          <div className="flex md:justify-between justify-center  md:flex-nowrap flex-wrap text-center text-white items-center sm:mx-[30px] mx-[10px] md:gap-0 gap-[10px]">
            <div className="bg-[#8a2edf] h-[180px] sm:w-[230px] w-[180px]">
              <p className="shadow-sm h-[40px]">Total Sales</p>
              <br />
              <p className="font-extrabold text-[30px]">Rs. 0</p>
            </div>
            <div className="bg-green-500 h-[180px] sm:w-[230px] w-[180px]">
              <p className="shadow-sm h-[40px]">Total Products</p>
              <br />
              <p className="font-extrabold text-[30px]">{productCount}</p>
            </div>
            <div className="bg-blue-500 h-[180px] sm:w-[230px] w-[180px]">
              {" "}
              <p className="shadow-sm h-[40px]">Total Users</p>
              <br />
              <p className="font-extrabold text-[30px]">{webuserCount}</p>
            </div>
            <div className="bg-red-500 h-[180px] sm:w-[230px] w-[180px]">
              {" "}
              <p className="shadow-sm h-[40px]">Profit</p>
              <br />
              <p className="font-extrabold text-[30px]">0%</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
