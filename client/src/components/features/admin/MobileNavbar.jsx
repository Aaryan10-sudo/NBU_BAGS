import React from "react";
import { BiHome } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { GiSchoolBag } from "react-icons/gi";
import { MdGeneratingTokens } from "react-icons/md";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="bg-white h-[60px] w-full flex justify-between items-center px-[20px] fixed bottom-0 sm:hidden">
      <NavLink
        className="flex flex-col items-center justify-center"
        to={"/admin/dashboard"}
      >
        <BiHome />
        <p>Home</p>
      </NavLink>
      <NavLink
        className="flex flex-col items-center justify-center"
        to={"/admin/product"}
      >
        <GiSchoolBag />
        <p>Products</p>
      </NavLink>
      <NavLink
        className="text-[50px] text-white bg-[#32609e] rounded-full w-[45px] h-[45px] flex justify-center items-center overflow-visible"
        to={"/admin/add-product"}
      >
        +
      </NavLink>
      <NavLink className="flex flex-col items-center justify-center">
        <MdGeneratingTokens />
        <p>Tokens</p>
      </NavLink>
      <NavLink
        className="flex flex-col items-center justify-center"
        to={"/admin/password"}
      >
        <IoSettingsSharp />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default MobileNavbar;
