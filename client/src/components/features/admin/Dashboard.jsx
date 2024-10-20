import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  let [productCount, setProductCount] = useState(0);
  let [webuserCount, setWebuserCount] = useState(0);

  const totalProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/total-product",
        method: "GET",
      });
      setProductCount(result?.data?.count);
    } catch (error) {
      console.log(error.message);
    }
  };
  const totalUser = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/total-user",
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
      <h1 className="text-center font-extrabold text-[30px] sm:my-[30px] my-[10px]">
        Dashboard
      </h1>
      <div className="flex justify-between flex-wrap text-center text-white items-center mx-[30px] sm:gap-0 gap-[20px]">
        <div className="bg-[#8a2edf] h-[180px] w-[230px]">
          <p className="shadow-sm h-[40px]">Total Sales</p>
          <br />
          <p className="font-extrabold text-[30px]">Rs. 0</p>
        </div>
        <div className="bg-green-500 h-[180px] w-[230px]">
          <p className="shadow-sm h-[40px]">Total Products</p>
          <br />
          <p className="font-extrabold text-[30px]">{productCount}</p>
        </div>
        <div className="bg-blue-500 h-[180px] w-[230px]">
          {" "}
          <p className="shadow-sm h-[40px]">Total Users</p>
          <br />
          <p className="font-extrabold text-[30px]">{webuserCount}</p>
        </div>
        <div className="bg-red-500 h-[180px] w-[230px]">
          {" "}
          <p className="shadow-sm h-[40px]">Profit</p>
          <br />
          <p className="font-extrabold text-[30px]">0%</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
