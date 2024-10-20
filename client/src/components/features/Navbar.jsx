import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
  FaBars,
  FaCartShopping,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";

const NavBar = ({ className }) => {
  let [cart, setCart] = useState(0);
  let [item, setItem] = useState([]);
  let [isAnimateBouncing, setIsAnimateBouncing] = useState(false);
  let [login, setLogin] = useState(false);
  let [menu, setMenu] = useState(false);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let query = item;
    navigate(`/search?product=${query}`);
  };

  const handleLogOut = () => {
    setLogin(false);
    setMenu(false);
    sessionStorage.removeItem("fullName");
    localStorage.removeItem("token");
  };

  const searchItem = async () => {
    try {
      let result = await axios({
        url: `http://localhost:1111/product/search?item=${product}`,
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result.data.data);
      setSearch(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    searchItem();
    // const fullName = sessionStorage.getItem("fullName");
    // if (fullName) {
    //   toast(`Interacting as ${fullName}`);
    setLogin(true);
    // } else {
    //   setLogin(false);
    // }
  }, []);
  return (
    <div className="w-[100vw]">
      <ToastContainer />
      <header className="bg-[#32609e] px-[10px] sm:px-0 h-[50px] flex justify-between items-center">
        <p className="lg:ml-[50px] text-white text-[15px]">
          Carry your world in style
        </p>
        <p className="lg:mr-[50px] text-white text-[15px]">
          Pyukha Marg, Kathmandu
        </p>
      </header>
      <nav className="flex justify-between items-center bg-transparent h-[60px] sticky top-0 z-50 md:mx-[40px] mx-[10px]">
        <FaBars
          className="sm:hidden cursor-pointer"
          onClick={() => {
            setMenu(!menu);
          }}
        />
        <div
          className="flex items-center cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src="logo.png" className=" ml-[0px] h-[60px]"></img>
          <p className=" font-extrabold text-white sm:block">NBU BAGS</p>
        </div>

        <ul className="md:inline-flex gap-[20px] font-bold text-white text-[15px] hidden">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-[#c38233] text-[13px]" : "text-black text-[13px]"
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-[#c38233] text-[13px]" : "text-black text-[13px]"
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-[#c38233] text-[13px]" : "text-black text-[13px]"
            }
          >
            PRODUCT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-[#c38233] text-[13px]" : "text-black text-[13px]"
            }
          >
            CONTACT
          </NavLink>
          <NavLink
            to="/offers"
            className={({ isActive }) =>
              isActive ? "text-[#c38233] text-[13px]" : "text-black text-[13px]"
            }
          >
            OFFERS
          </NavLink>
        </ul>

        <div className="flex gap-[25px] items-center">
          <form
            className="bg-[#ede9dd] md:flex justify-between p-[5px] rounded-xl w-[150px] sm:w-[150px] hidden"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-[140px]"
              value={item}
              onChange={(e) => {
                setItem(e.target.value);
              }}
            />
          </form>

          <FaUser
            onClick={() => {
              navigate("/admin");
            }}
          />
          <FaBars
            className="md:hidden sm:block cursor-pointer hidden"
            onClick={() => {
              setMenu(!menu);
            }}
          />
        </div>
      </nav>
      {menu ? (
        <div className="h-[215px] w-[150px] bg-white absolute rounded-tr-xl rounded-br-xl mt-[-10px] sm:mt-[0px] sm:right-0 sm:rounded-none sm:rounded-tl-xl sm:rounded-bl-xl">
          <ul className="flex flex-col justify-center items-center gap-[15px] mt-[15px] cursor-pointer">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c38233] text-[15px]"
                  : "text-black text-[15px]"
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c38233] text-[15px]"
                  : "text-black text-[15px]"
              }
            >
              ABOUT
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c38233] text-[15px]"
                  : "text-black text-[15px]"
              }
            >
              PRODUCT
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c38233] text-[15px]"
                  : "text-black text-[15px]"
              }
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/offers"
              className={({ isActive }) =>
                isActive
                  ? "text-[#c38233] text-[15px]"
                  : "text-black text-[15px]"
              }
            >
              OFFERS
            </NavLink>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavBar;
