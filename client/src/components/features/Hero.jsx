import React from "react";
import NavBar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('hero.jpg')] bg-cover bg-center md:h-[580px] sm:h-[450px] h-[330px] overflow-hidden flex object-cover">
      <NavBar />
    </div>
  );
};

export default Hero;
