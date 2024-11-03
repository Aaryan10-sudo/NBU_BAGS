import React from "react";
import { NavLink } from "react-router-dom";
import Bag from "../../ui/Bag";
import Home from "../../ui/Home";
import Setting from "../../ui/Setting";
import Token from "../../ui/Token";

const MobileNavbar = () => {
  return (
    <div className="bg-white h-[60px] w-full flex justify-between items-center px-[20px] fixed bottom-0 sm:hidden shadow-lg">
      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-[#32609e]" : ""
          }`
        }
        to="/admin/dashboard"
      >
        <Home />
        <p>Home</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-[#32609e]" : ""
          }`
        }
        to="/admin/product"
      >
        <Bag />
        <p>Products</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `text-[50px] text-white bg-[#32609e] rounded-full w-[45px] h-[45px] flex justify-center items-center overflow-visible ${
            isActive ? "text-[#32609e]" : ""
          }`
        }
        to="/admin/add-product"
      >
        +
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-[#32609e]" : ""
          }`
        }
        to="/admin/tokens"
      >
        <Token />
        <p>Tokens</p>
      </NavLink>

      <NavLink
        className={({ isActive }) =>
          `flex flex-col items-center justify-center ${
            isActive ? "text-[#32609e]" : ""
          }`
        }
        to="/admin/password"
      >
        <Setting />
        <p>Settings</p>
      </NavLink>
    </div>
  );
};

export default MobileNavbar;
