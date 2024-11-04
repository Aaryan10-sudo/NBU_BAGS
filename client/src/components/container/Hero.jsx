import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const location = useLocation();
  const [headerText, setHeaderText] = useState("WELCOME TO NBU BAGS");

  // Update the header text based on the current route path
  useEffect(() => {
    switch (location.pathname) {
      case "/about":
        setHeaderText(
          "Explore our passion for creating stylish, functional bags"
        );
        break;
      case "/contact":
        setHeaderText("Get in touch with us today!");
        break;
      case "/product":
        setHeaderText("Discover our complete collection of bags.");
        break;
      default:
        setHeaderText("WELCOME TO NBU BAGS...");
    }
  }, [location.pathname]);

  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-center md:h-[580px] sm:h-[420px] h-[250px] overflow-hidden 2xl:h-[620px]">
      <h1 className="text-center sm:p-[30px] p-[10px] sm:text-[30px] text-white font-bold stroke-white">
        <TypeAnimation
          sequence={
            location.pathname === "/"
              ? [
                  "Discover bags that fit your style and journey.",
                  2000,
                  headerText,
                  2000,
                ]
              : [headerText, 2000]
          }
          wrapper="span"
          speed={40}
          key={headerText} // This key will trigger the component to re-render when headerText changes
        />
      </h1>
    </div>
  );
};

export default Hero;
