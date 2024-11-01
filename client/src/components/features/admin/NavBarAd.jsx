import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavBarAd = () => {
  let navigate = useNavigate();
  return (
    <div className="h-[60px] shadow-lg w-[100%] sm:px-[30px] px-[10px] flex items-center justify-between  sticky z-50 top-0 bg-white">
      <div className="flex items-center text-black cursor-pointer gap-1">
        <img src="/logo.png" className="h-[50px]" />
        <p className="font-bold ">NBU BAGS</p>
      </div>
      <div>
        <ul className="inline-flex">
          <div className="flex gap-[25px] items-center">
            <form className="bg-[#ede9dd] sm:flex p-[5px] rounded-xl w-[200px] sm:w-[200px] flex items-center justify-between">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent focus:outline-none w-[140px] sm:w-[190px]"
              />
              <button type="submit">
                <FaMagnifyingGlass />
              </button>
            </form>

            <MdLogout
              className="font-bold text-[20px] sm:mt-0  cursor-pointer"
              onClick={() => {
                navigate("/log-in");
                localStorage.removeItem("token");
              }}
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBarAd;
