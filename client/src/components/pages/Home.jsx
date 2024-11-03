import React from "react";
import Collection from "../container/Collection";
import BestSelling from "../container/BestSelling";
import Blog from "../container/Blog";

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
