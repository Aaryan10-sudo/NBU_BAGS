import React from "react";
import Dashboard from "./Dashboard";
import MobileNavbar from "./MobileNavbar";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";

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
