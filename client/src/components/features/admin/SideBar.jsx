import React from "react";

const SideBar = () => {
  <li></li>;
  return (
    <div className="bg-blue-900 w-[220px] h-[100vh]">
      <ul className="text-[white] flex flex-col gap-[40px] text-[15px] text-center pt-[10px] cursor-pointer">
        <li className="border border-transparent border-b-white h-[40px] font-extrabold cursor-default">
          Admin Panel
        </li>
        <li>Dashboard</li>
        <li>Products</li>
        <li>Add Products</li>
        <li>Top Sellings</li>
        <li>Image Gallery</li>
        <li>User View</li>
      </ul>
    </div>
  );
};

export default SideBar;
