import React from "react";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import UpdateProduct from "./UpdateProduct";

const AdminPanel = () => {
  return (
    <>
      <div className="flex ">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className="overflow-auto h-screen">
            <Products />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
