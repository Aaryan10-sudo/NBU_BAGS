import React from "react";
import { BsBackpack3 } from "react-icons/bs";
import { FaShieldAlt, FaSmile } from "react-icons/fa";
import { FaCouch, FaLeaf } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <main className="md:mx-[40px] mx-[10px] relative">
        <h1 className="text-center sm:p-[30px] p-[10px] font-bold text-[30px] font-ubuntu">
          About Us
        </h1>
        <div className="flex justify-between md:flex-row flex-col flex-wrap">
          <div className="bg-slate-500 flex sm:h-[300px] md:w-[600px] self-center "></div>
          <span className="md:w-[550px] md:h-[400px] ">
          {/* Header */}
            <h1 className="font-bold text-[30px] mt-[0px] sm:mt-0 font-ubuntu py-[10px]">
              ABOUT NBU BAGS
            </h1>

          {/* Store Paragraph */}
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
        {/* Header */}
        <h1 className="text-center p-[30px] font-bold text-[30px] font-ubuntu">
          Why NBU BAGS ?
        </h1>

        {/* Features card */}
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
    </div>
  );
};

export default About;
