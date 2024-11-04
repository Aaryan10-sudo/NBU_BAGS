import React, { useState } from "react";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";
import MobileNavbar from "./MobileNavbar";
import { hitApi } from "../../../services/HitApi";
import { toast, ToastContainer } from "react-toastify";
import { NavLink, useNavigate } from "react-router-dom";

const Password = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();

  const activity = async () => {
    const data = {
      Activity: `Updated password at ${new Date().toLocaleString()}`,
    };
    try {
      let result = await hitApi({
        url: "/activity/create",
        method: "POST",
        data: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const storePassword = async (password) => {
    const data = {
      password: password,
      changedAt: new Date().toLocaleString(),
    };
    try {
      let result = await hitApi({
        url: "/webuser/store-password",
        method: "POST",
        data: data,
      });
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    let token = localStorage.getItem("token");
    try {
      let result = await hitApi({
        url: "/webuser/update-password",
        method: "post",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setOldPassword("");
      setNewPassword("");
      storePassword(newPassword);
      toast.success(`Password updated successfully`);
      activity();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="flex ">
      <ToastContainer />
      <SideBar />
      <div className="w-full">
        <NavBarAd />
        <div className="h-screen">
          <h1 className="text-center p-[20px] font-bold text-black text-[20px]">
            Change your password
          </h1>
          <form
            className="flex flex-col flex-wrap gap-4 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <input
              type="password"
              placeholder="Old Password"
              className="h-[40px] w-[300px] px-[5px]"
              value={oldPassword}
              onChange={(e) => {
                setOldPassword(e.target.value);
              }}
            />

            <input
              type="password"
              placeholder="New Password"
              className="h-[40px] w-[300px] px-[5px]"
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
            />

            <button
              className="flex bg-primary h-[30px] w-[100px] justify-center items-center text-white font-bold"
              type="submit"
            >
              Change
            </button>

            <NavLink className="sm:hidden" to={"/"}>
              <p className="text-red-500 font-bold text-[18px]"> LOG OUT</p>
            </NavLink>
          </form>
        </div>
      </div>

      <MobileNavbar />
    </div>
  );
};

export default Password;
