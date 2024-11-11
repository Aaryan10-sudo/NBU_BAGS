import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogOut from "../../ui/LogOut";
import Search from "../../ui/Search";

const NavBarAd = () => {
  const [item, setItem] = useState("");
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = item;
    navigate(`/admin/search?product=${query}`);
  };

  return (
    <div className="h-[60px] shadow-lg w-[100%] sm:px-[30px] px-[10px] flex items-center justify-between  sticky z-50 top-0 bg-white">
      <div className="flex items-center text-black cursor-pointer gap-1">
        <img src="/logo.png" className="h-[50px]" />
        <p className="font-bold ">NBU BAGS</p>
      </div>
      <div>
        <ul className="inline-flex">
          <div className="flex gap-[25px] items-center">
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#ede9dd] w-[170px] h-[30px] rounded-[5px] px-2 pr-8 outline outline-slate-400"
                value={item}
                onChange={(e) => setItem(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black font-normal"
              >
                <Search onClick={() => {}} />
              </button>
            </form>
            <div
              className="font-bold text-[20px] sm:mt-0  cursor-pointer"
              onClick={() => {
                navigate("/");
                localStorage.removeItem("token");
              }}
            >
              <LogOut />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default NavBarAd;
