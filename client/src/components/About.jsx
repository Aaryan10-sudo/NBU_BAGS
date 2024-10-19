import React from "react";
import { BsBackpack3 } from "react-icons/bs";
import { FaShieldAlt, FaSmile } from "react-icons/fa";
import { FaCouch, FaLeaf } from "react-icons/fa6";
import Footer from "./features/Footer";
import Hero from "./features/Hero";

const About = () => {
  return (
    <div>
      <Hero />
      <main className="md:mx-[40px] mx-[10px] relative">
        <img
          className="absolute opacity-50 right-0 mt-[70px] h-[250px] hidden md:block"
          src="okay.png "
        />

        <h1 className="text-center sm:p-[30px] p-[10px] font-bold text-[30px]">
          About Us
        </h1>
        <div className="flex justify-between md:flex-row flex-col flex-wrap">
          <div className="bg-slate-500 flex sm:h-[400px] md:w-[600px] ">
            <video
              src="WhatsApp Video 2024-10-05 at 19.52.09_99ca10d3.mp4"
              className="sm:h-[400px] h-[220px] "
              controls="true"
              autoPlay
              muted
            />
            <video
              src="WhatsApp Video 2024-10-05 at 19.52.09_ec38def4.mp4"
              className="sm:h-[400px] h-[220px]"
              controls="true"
              autoPlay="true"
            />
          </div>
          <span className="md:w-[550px] md:h-[400px] ">
            <h1 className="font-bold text-[30px] mt-[0px] sm:mt-0">
              ABOUT NBU BAGS
            </h1>

            <p className="py-[10px] sm:font-medium font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore. Eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia. Deserunt mollit anim id est laborum.
              Curabitur pretium tincidunt lacus. Aenean nec eros pellentesque in
              massa quis arcu.
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore. Eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia. Deserunt mollit anim id est laborum.
            </p>
          </span>
        </div>
        <h1 className="text-center p-[30px] font-bold text-[30px]">
          Why NBU BAGS ?
        </h1>
        <div className="flex justify-between pb-[30px] flex-wrap gap-[20px]  md:gap-0">
          <div className="md:w-[230px] h-[190px] shadow-xl rounded-xl p-[10px] ">
            <span className="text-[20px] font-bold flex gap-[10px] items-center">
              <FaShieldAlt className="text-blue-700" />{" "}
              <p className="">Durability</p>
            </span>
            <p className="pt-[10px]">
              NBU Bags are crafted with premium materials, ensuring long-lasting
              strength to withstand everyday wear and tear.
            </p>
          </div>
          <div className="md:w-[230px] h-[190px] shadow-xl rounded-xl p-[10px]">
            <span className="text-[20px] font-bold flex gap-[10px] items-center">
              <BsBackpack3 />
              <p className="">Stylish Design</p>
            </span>
            <p className="pt-[10px]">
              Our bags blend fashion with functionality, offering sleek designs
              that suit any occasion while making a bold statement.
            </p>
          </div>
          <div className="md:w-[230px] h-[190px] shadow-xl rounded-xl p-[10px]">
            <span className="text-[20px] font-bold flex gap-[10px] items-center">
              <FaLeaf className="text-green-800" />
              <p className="">Eco- Friendly</p>
            </span>
            <p className="pt-[10px]">
              We are committed to sustainability, using environmentally
              conscious materials to create bags that are stylish and
              planet-friendly.
            </p>
          </div>
          <div className="md:w-[230px] h-[190px] shadow-xl rounded-xl p-[10px]">
            <span className="text-[20px] font-bold flex gap-[10px] items-center">
              <FaSmile className="text-yellow-500" />{" "}
              <p className="">Satisfaction</p>
            </span>
            <p className="pt-[10px]">
              Your satisfaction is our priority. NBU Bags are designed with
              care, ensuring each product exceeds expectations for quality and
              usability.
            </p>
          </div>
          <div className="md:w-[230px] h-[190px] shadow-xl rounded-xl p-[10px]">
            <span className="text-[20px] font-bold flex gap-[10px] items-center">
              <FaCouch /> <p className="">Comfortable</p>
            </span>
            <p className="pt-[10px]">
              Designed for comfort, our bags feature ergonomic designs that make
              carrying your essentials easier and more enjoyable.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
