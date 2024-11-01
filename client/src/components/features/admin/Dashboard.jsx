import React, { useEffect, useState } from "react";
import { hitApi } from "../../../services/HitApi";
import { TiTickOutline } from "react-icons/ti";
import { MdUpdate } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { TbCheckbox } from "react-icons/tb";

const Dashboard = () => {
  let [productCount, setProductCount] = useState(0);
  let [webuserCount, setWebuserCount] = useState(0);
  let [loader, setLoader] = useState(false);
  let [activity, setActivity] = useState([]);

  const getActivity = async () => {
    let result = await hitApi({
      url: "activity/get",
      method: "GET",
    });
    console.log(result?.data?.data);
    setActivity(result?.data?.data.reverse() || []);
  };

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
    getActivity();
  }, []);
  return (
    <div className="2xl:px-40 sm:px-10">
      {loader ? (
        <div className="flex justify-center items-center h-screen bg-gray-300">
          <div class="loader"></div>
        </div>
      ) : (
        <div>
          <h1 className="text-center font-extrabold text-[30px] sm:my-[30px] my-[10px] flex items-center justify-center">
            Dashboard
          </h1>
          <div className="flex md:justify-between justify-center  md:flex-nowrap flex-wrap text-center text-white items-center sm:mx-[30px] mx-[10px] md:gap-0 gap-[10px]">
            <div className="bg-[#8a2edf] h-[190px] sm:w-[210px] sm:h-[210px] w-[190px] rounded-xl ">
              <p className="shadow-sm h-[40px] flex justify-center items-center">
                Total Sales
              </p>
              <br />
              <p className="font-extrabold text-[30px] flex justify-center items-center">
                Rs. 0
              </p>
            </div>
            <div className="bg-green-600 h-[190px] sm:w-[210px] sm:h-[210px] w-[190px] rounded-xl ">
              <p className="shadow-sm h-[40px] flex justify-center items-center">
                Total Products
              </p>
              <br />
              <p className="font-extrabold text-[30px] flex justify-center items-center">
                {productCount}
              </p>
            </div>
            <div className="bg-blue-600 h-[190px] sm:w-[210px] sm:h-[210px] w-[190px] rounded-xl  ">
              {" "}
              <p className="shadow-sm h-[40px] flex justify-center items-center">
                Total Users
              </p>
              <br />
              <p className="font-extrabold text-[30px]">{webuserCount}</p>
            </div>
            <div className="bg-red-600 h-[190px] sm:w-[210px] sm:h-[210px] w-[190px] rounded-xl ">
              {" "}
              <p className="shadow-sm h-[40px] flex justify-center items-center">
                Profit
              </p>
              <br />
              <p className="font-extrabold text-[30px] flex justify-center items-center">
                0%
              </p>
            </div>
          </div>

          <div className="sm:mx-[30px] mx-[10px] pb-[70px] ">
            <h1 className="font-extrabold text-[30px] py-[20px]">
              Admin Activity
            </h1>
            <div className="flex flex-col gap-[20px] font-ubuntu">
              {activity?.map((value, index) => {
                return (
                  <div
                    className={`p-4 rounded-xl  ${
                      value.Activity.startsWith("Created")
                        ? "shadow-sm bg-green-600 border border-green-500"
                        : value.Activity.startsWith("Updated")
                        ? "shadow-sm bg-blue-600 border border-blue-500"
                        : value.Activity.startsWith("Deleted")
                        ? "shadow bg-red-600 "
                        : ""
                    }`}
                    key={index}
                  >
                    <span className="flex justify-between">
                      <p className="font-ubuntu text-white text-[15px] font-bold">
                        {" "}
                        {value.Activity}
                      </p>
                      <p className="text-white text-[20px]">
                        {value.Activity.startsWith("Created") ? (
                          <TbCheckbox />
                        ) : value.Activity.startsWith("Update") ? (
                          <MdUpdate />
                        ) : value.Activity.startsWith("Deleted") ? (
                          <FaTrash />
                        ) : (
                          ""
                        )}
                      </p>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
