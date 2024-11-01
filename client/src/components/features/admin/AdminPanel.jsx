import React from "react";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Products from "./Products";
import UpdateProduct from "./UpdateProduct";
import MobileNavbar from "./MobileNavbar";

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
            <Dashboard />
          </div>
        </div>
      </div>
      <MobileNavbar />
    </>
  );
};

export default AdminPanel;
