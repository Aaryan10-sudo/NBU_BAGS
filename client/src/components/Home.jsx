import React from "react";
import Navbar from "./features/Navbar";
import Hero from "./features/Hero";
import Collection from "./features/Collection";
import Footer from "./features/Footer";
import BestSelling from "./features/BestSelling";
import Blog from "./features/Blog";

const Home = () => {
  return (
    <div className="mx-[0px]">
      <Collection />
      <BestSelling />
      <Blog />
    </div>
  );
};

export default Home;
