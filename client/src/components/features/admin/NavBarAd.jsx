import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NavBarAd = () => {
  let navigate = useNavigate();
  return (
    <div className="h-[50px] shadow-lg w-[100%] sm:px-[30px] px-[10px] flex items-center justify-between">
      <div className="flex items-center text-black cursor-pointer">
        <img src="/logo.png" className="h-[50px]" />
        <p>NBU Bags</p>
      </div>
      <div>
        <ul className="inline-flex">
          <div className="flex gap-[25px] items-center">
            <form className="bg-[#ede9dd] sm:flex p-[5px] rounded-xl w-[150px] sm:w-[200px] hidden">
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
              className="font-bold text-[20px] sm:mt-0 mt-[7px]"
              onClick={() => {
                navigate("/");
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
