import React from "react";
import { FaCartShopping, FaMagnifyingGlass, FaUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

const NavBarAd = () => {
  return (
    <div className="h-[50px] shadow-lg w-[100%] px-[30px] flex items-center justify-between">
      <div className="flex items-center text-black">
        <img src="logo.png" className="h-[50px]" />
        <p>NBU Bags</p>
      </div>
      <div>
        <ul className="inline-flex">
          <div className="flex gap-[25px] items-center">
            <form className="bg-[#ede9dd] flex p-[5px] rounded-xl w-[150px] sm:w-[200px]">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#ede9dd] focus:outline-none w-[150px] sm:w-[200px]"
              />
              <button type="submit">
                <FaMagnifyingGlass />
              </button>
            </form>

            <MdLogout className="font-bold text-[20px]" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBarAd;
