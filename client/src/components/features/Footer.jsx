import React from "react";
import { FaTiktok } from "react-icons/fa";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebook,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaXTwitter,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#32609e] bottom-0 w-[100%]">
      <div className="md:mx-[20px] flex sm:gap-[100px] gap-[30px] text-white p-[20px] border border-transparent border-b-white flex-wrap font-raleway">
        <div className="md:w-[350px]">
          {/* Header */}
          <h1 className=" font-extrabold text-[20px] font-ubuntu">
            Store Info
          </h1>
          <br />
          <p className="font-raleway">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          {/* Location / Mail */}
          <span className="flex gap-[10px] font-raleway ">
            {" "}
            <FaLocationDot /> <p>Pyukha Marg, Kathmandu</p>
          </span>
          <br />
          <span className="flex gap-[10px]">
            {" "}
            <FaEnvelope /> <p className="mt-[-3px]">nbu@gmail.com</p>
          </span>
        </div>
        <div>
          {/* Header */}
          <h1 className="font-extrabold text-[20px] w-[200px] sm:w-auto font-ubuntu">
            Quick Links
          </h1>
          <br />
          {/* Quick Links list  */}
          <ul className="flex flex-col gap-[20px] cursor-pointer font-raleway">
            <li className="hover:text-black">Home</li>
            <NavLink to={"/about"} className="hover:text-black">
              About
            </NavLink>
            <NavLink className="hover:text-black">Products</NavLink>
            <NavLink className="hover:text-black">Contact</NavLink>
            <NavLink className="hover:text-black">Offers</NavLink>
          </ul>
        </div>

        {/* Information  menu*/}
        <div>
          <p className="font-extrabold text-[20px] font-ubuntu">Information</p>
          <br />
          {/* Information link */}
          <ul className="flex flex-col gap-[20px] cursor-pointer">
            <NavLink to={"/about"} className="hover:text-black">
              About
            </NavLink>
            <NavLink className="hover:text-black">Contact</NavLink>
          </ul>
        </div>

        {/* Connect with us */}
        <div>
          <p className="font-extrabold text-[20px] font-ubuntu">
            Connect with us
          </p>
          <br />
          {/* Socail media link */}
          <div className="flex flex-col gap-[30px] text-[20px] cursor-pointer">
            <span className="flex">
              <FaFacebook /> <p className="text-[15px] ml-[10px]">NBU Bags</p>
            </span>
            <span className="flex">
              <FaInstagram /> <p className="text-[15px] ml-[10px]">nbu_bags</p>
            </span>
            <span className="flex">
              <FaTiktok /> <p className="text-[15px] ml-[10px]">nbu_bags</p>
            </span>
          </div>
        </div>
      </div>

      {/* Connect to Nexorith */}
      <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:mx-[20px] p-[20px] sm:gap-[0] gap-[15px] w-[full]">
        <span className="flex gap-[10px]">
          <p className="text-white sm:text-[20px] font-bold">Powered By :</p>
          <img src="nexorith.png" className="sm:h-[30px] h-[20px]" />
        </span>
        <div className="flex group shadow-xl">
          <div
            className="bg-white sm:w-[200px] w-[210px] p-[10px] text-blue-700 font-bold 
            "
          >
            Connect with Nexorith
          </div>

          {/* Nexorith social media link */}
          <button className="bg-[url('/forfooter.jpg')] bg-contain bg-center group-hover:bg-none hover:bg-slate-300 group-hover:w-[180px] w-[55px] text-center items-center justify-center flex group transition-all ease-linear px-[10px] duration-300">
            <FaArrowRight className="text-[20px] group-hover:opacity-0" />
            <div className="opacity-0 group-hover:opacity-100 flex gap-[20px]">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaGlobe />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
