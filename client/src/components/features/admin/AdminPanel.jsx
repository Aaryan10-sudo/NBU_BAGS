import React from "react";
import NavBarAd from "./NavBarAd";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";

const AdminPanel = () => {
  return (
    <>
      <div className="flex">
        {/* Sidebar */}
        <SideBar />

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full">
          <NavBarAd />
          <div className="">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
