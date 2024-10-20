import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const SideBar = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-blue-900 sm:w-[220px] w-[200px] h-[110vh]">
      <ul className="text-[white] flex flex-col gap-[40px] text-[15px] text-center pt-[10px] cursor-pointer">
        <li className="border border-transparent border-b-white h-[40px] font-extrabold cursor-default">
          Admin Panel
        </li>
        <NavLink to={"/admin"}>Dashboard</NavLink>
        <NavLink to={"/admin/product"}>Products</NavLink>
        <NavLink to={"/admin/add-product"}>Add Products</NavLink>
        <NavLink to={"/"} className="hover:text-red-700">
          Log Out
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
