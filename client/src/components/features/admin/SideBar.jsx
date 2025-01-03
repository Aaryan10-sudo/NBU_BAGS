import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="bg-primary sm:w-[220px] w-[200px] h-[110vh] lg:block hidden top-0">
      <ul className="text-[white] flex flex-col gap-[40px] text-[15px] text-center pt-[10px] cursor-pointer">
        <li className="border border-transparent border-b-white h-[50px] font-extrabold cursor-default relative flex items-center justify-center">
          Admin Panel
        </li>
        <NavLink
          to={"/admin/dashboard"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500 text-white"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/admin/product"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500 text-white"
          }
        >
          Products
        </NavLink>

        <NavLink
          to={"/admin/token"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500 text-white"
          }
        >
          Tokens
        </NavLink>

        <NavLink
          to={"/admin/add-product"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500 text-white"
          }
        >
          Add Products
        </NavLink>

        <NavLink
          to={"/admin/password"}
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "hover:text-blue-500 text-white"
          }
        >
          Change Password
        </NavLink>

        <NavLink
          to={"/"}
          onClick={() => {
            localStorage.removeItem("token");
          }}
          className="hover:text-red-700"
        >
          Log Out
        </NavLink>
      </ul>
    </div>
  );
};

export default SideBar;
