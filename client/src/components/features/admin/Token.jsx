import React, { useEffect, useState } from "react";
import { hitApi } from "../../../services/HitApi";
import MobileNavbar from "./MobileNavbar";
import SideBar from "./SideBar";
import NavBarAd from "./NavBarAd";

const Token = () => {
  const [token, setToken] = useState([]);
  const getToken = async () => {
    try {
      let result = await hitApi({
        url: `token/readALl`,
        method: `GET`,
      });
      setToken(result.data.data);
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return (
    <div>
      <div className="flex sm:h-screen sm:overflow-hidden">
        {/* Sidebar */}
        <div className="sm:fixed h-full sm:block hidden">
          <SideBar />
        </div>

        {/* Main Content: NavBar + Dashboard */}
        <div className="flex flex-col w-full sm:ml-[220px] sm:overflow-y-scroll sm:relative">
          <NavBarAd />
          <div className="flex flex-wrap justify-center">
            {token.map((value, index) => {
              return (
                <div
                  key={index}
                  className="sm:m-[20px] m-[10px] flex items-center"
                >
                  <h1 className="font-montserrat font-bold text-primary 2xl:text-[20px] h-[50px] w-[120px] shadow-xl flex items-center justify-center">
                    {value.token}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <MobileNavbar />
    </div>
  );
};

export default Token;
