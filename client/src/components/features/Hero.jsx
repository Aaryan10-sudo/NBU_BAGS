import React from "react";
import NavBar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('hero.jpg')] bg-cover bg-center md:h-[560px] sm:h-[450px] h-[320px] overflow-hidden flex object-cover">
      <NavBar />
    </div>
  );
};

export default Hero;
