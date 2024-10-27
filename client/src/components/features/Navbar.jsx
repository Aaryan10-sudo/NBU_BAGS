import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const [item, setItem] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let query = item;
    navigate(`/search?product=${query}`);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <div className="w-full">
      <ToastContainer />
      {/* Top Header */}
      <header className="bg-[#32609e] flex justify-between items-center px-4 h-[50px] text-white text-[15px]">
        <p>Carry your world in style</p>
        <p>Pyukha Marg, Kathmandu</p>
      </header>

      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-transparent backdrop-blur-sm h-[60px] sticky top-0 z-50 px-4 md:px-8">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="logo.png" className="h-[50px]" alt="Logo" />
          <p className="font-extrabold text-white">NBU BAGS</p>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden md:flex gap-8 font-bold text-white text-[15px] items-center">
          {["HOME", "ABOUT", "PRODUCT", "CONTACT", "OFFERS"].map(
            (link, index) => (
              <NavLink
                key={index}
                to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive
                    ? "text-[#e3a253] text-[13px]"
                    : "hover:text-[#e3a253] text-[13px]"
                }
              >
                {link}
              </NavLink>
            )
          )}
        </ul>

        {/* Search and Icons */}
        <div className="hidden md:flex gap-4 items-center">
          <form onSubmit={handleSubmit} className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="bg-[#ede9dd] w-[160px] h-[28px] rounded-[5px] px-2"
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </form>
          <NavLink
            className="cursor-pointer font-semibold text-white"
            to={"/log-in"}
          >
            Log In
          </NavLink>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <FaBars className="text-white cursor-pointer" onClick={toggleMenu} />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 flex transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="w-[70%] bg-white h-full flex flex-col items-start p-6">
          <div className="flex justify-between w-full items-center">
            <h1>NBU BAGS</h1>
            <FaTimes
              className="text-black text-2xl self-end cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
          <ul className="flex flex-col gap-8 mt-6 text-black text-[15px] font-bold">
            {["HOME", "ABOUT", "PRODUCT", "CONTACT", "OFFERS"].map(
              (link, index) => (
                <NavLink
                  key={index}
                  to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                  className="hover:text-[#e3a253]"
                  onClick={toggleMenu}
                >
                  {link}
                </NavLink>
              )
            )}
          </ul>

          <div className="w-full flex justify-center">
            <NavLink
              to={"/log-in"}
              className="mt-6 text-blue-500 font-semibold text-center"
              onClick={toggleMenu}
            >
              Log In
            </NavLink>
          </div>
        </div>
        <div className="w-[30%] bg-black bg-opacity-75" onClick={toggleMenu} />
      </div>
    </div>
  );
};

export default NavBar;
