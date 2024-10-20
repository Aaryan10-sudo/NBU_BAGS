import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  <li></li>;
  return (
    <div className="bg-blue-900 sm:w-[220px] w-[200px] h-[110vh]">
      <ul className="text-[white] flex flex-col gap-[40px] text-[15px] text-center pt-[10px] cursor-pointer">
        <li className="border border-transparent border-b-white h-[40px] font-extrabold cursor-default">
          Admin Panel
        </li>
        <NavLink>Dashboard</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>Add Products</NavLink>
        <NavLink className="hover:text-red-700">Log Out</NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
