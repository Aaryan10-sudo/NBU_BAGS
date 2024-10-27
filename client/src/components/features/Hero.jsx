import React from "react";
import NavBar from "./Navbar";

const Hero = () => {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-center md:h-[580px] sm:h-[450px] h-[330px] flex object-cover">
      <NavBar className={"sticky z-50"} />
    </div>
  );
};

export default Hero;
