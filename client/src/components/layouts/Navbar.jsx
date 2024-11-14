import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MenuBar from "../ui/MenuBar";
import Times from "../ui/Times";
import Search from "../ui/Search";

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
    <>
      <ToastContainer />
      {/* Top Header */}

      <header className="bg-primary flex justify-between items-center px-4 md:px-8 h-[50px] text-white text-[15px] 2xl:px-40">
        <p>Carry your world in style</p>
        <p>Pyukha Marg, Kathmandu</p>
      </header>
      {/* Main Navbar */}
      <nav className="flex items-center justify-between bg-white shadow-xl h-[55px] sm:h-[55px] sticky top-0 z-50 px-4 md:px-8 2xl:px-40">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img src="/logo.png" className="h-[50px]" alt="Logo" />
          <p className="font-bold text-[18px] sm:text-[17px]">NBU BAGS</p>
        </div>

        {/* Desktop Menu Links */}
        <ul className="hidden lg:flex gap-8 font-medium text-black items-center tracking-wider">
          {["Home", "About", "Product", "Contact", "Offers"].map(
            (link, index) => (
              <NavLink
                key={index}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? "text-[#e3a253] " : "hover:text-[#e3a253]"
                }
              >
                {link}
              </NavLink>
            )
          )}
        </ul>

        {/* Search */}
        <div className="hidden sm:flex gap-4 items-center">
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
          <NavLink
            className="cursor-pointer font-semibold text-blue-500 hidden md:block underline"
            to={"/log-in"}
          >
            Log In
          </NavLink>
          <div
            className="text-black cursor-pointer md:hidden flex items-center"
            onClick={toggleMenu}
          >
            <MenuBar />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div
          className="sm:hidden flex items-center text-black cursor-pointer"
          onClick={toggleMenu}
        >
          <MenuBar />
        </div>
      </nav>

      {/* Mobile Menu*/}
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 flex transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
      >
        <div className="w-[70%] bg-white h-full flex flex-col items-start p-6">
          <div className="flex justify-between w-full items-center pb-[10px] border-b border-black">
            <div className="flex gap-2 items-center">
              <img src="/logo.png" className="h-[30px] " alt="Logo" />
              <h1 className="font-bold">NBU BAGS</h1>
            </div>
            <div
              className="text-black text-2xl cursor-pointer border-2"
              onClick={toggleMenu}
            >
              <Times />
            </div>
          </div>
          <ul className="flex flex-col gap-8 mt-10 text-black text-[15px]">
            {["HOME", "ABOUT", "PRODUCT", "CONTACT", "OFFERS"].map(
              (link, index) => (
                <NavLink
                  key={index}
                  to={link === "HOME" ? "/" : `/${link.toLowerCase()}`}
                  className={({ isActive }) =>
                    isActive ? "text-[#e3a253]" : "hover:text-[#e3a253]"
                  }
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
        {/* Overlay */}
        <div
          className="w-[30%] bg-black bg-opacity-75 transition-opacity duration-300 ease-in-out"
          onClick={toggleMenu}
          style={{ opacity: menuOpen ? 1 : 0 }}
        />
      </div>
    </>
  );
};

export default NavBar;
