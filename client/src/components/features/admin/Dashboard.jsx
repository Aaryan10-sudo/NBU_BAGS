import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  let [product, setProduct] = useState(0);
  const totalProduct = async () => {
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/product/total-product",
        method: "GET",
      });
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    totalProduct();
  }, []);
  return (
    <>
      <h1 className="text-center font-extrabold text-[20px]">Dashboard</h1>
      <br />
      <div className="flex justify-between text-center text-white items-center mx-[30px]">
        <div className="bg-[#8a2edf] h-[180px] w-[230px]">
          <p className="shadow-sm h-[40px]">Total Sales</p>
          <br />
          <p className="font-extrabold text-[30px]">Rs. 0</p>
        </div>
        <div className="bg-green-500 h-[180px] w-[230px]">
          <p className="shadow-sm h-[40px]">Total Products</p>
          <br />
          <p className="font-extrabold text-[30px]">30</p>
        </div>
        <div className="bg-blue-500 h-[180px] w-[230px]">
          {" "}
          <p className="shadow-sm h-[40px]">Total Users</p>
          <br />
          <p className="font-extrabold text-[30px]">2</p>
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
