import React from "react";
import Phone from "../ui/Phone";
import Facebook from "../ui/Facebook";
import Instagram from "../ui/Instagram";
import Tiktok from "../ui/Tiktok";
import WhatsApp from "../ui/WhatsApp";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="2xl:px-40">
      <div className=" w-full text-gray-700  md:px-10 px-2 flex sm:flex-row flex-col md:justify-between justify-center py-[30px] flex-wrap">
        <div className="main flex items-start justify-center flex-col">
          {/* Header */}
          <h1 className="text-4xl font-bold font-ubuntu">
            Contact<span className="text-primary"> Us</span>
          </h1>

          {/* Contact Section */}
          <div className="flex justify-between my-6 w-full text-gray-100">
            <a
              href="https://wa.me/9779803087763"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-primary font-semibold px-3 py-3 flex items-center rounded-md w-[170px] gap-2">
                <WhatsApp className="pr-2 h-5 w-auto" />
                Via WhatsApp
              </button>
            </a>
            <a href="tel:9803087763">
              <button className="bg-primary font-semibold px-3 py-3 flex items-center rounded-md w-[170px] gap-2">
                <Phone className="pr-2 h-5 w-auto" />
                Via Call
              </button>
            </a>
          </div>
          <h2 className="text-gray-900 font-semibold text-[24px]">
            Via Email form
          </h2>
          <div className="max-w-[550px]">
            <form className="mt-8" />
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 border-2 "
              placeholder="Name"
            />
            <input
              type="email"
              className="w-full mt-4 px-4 py-2 border border-gray-300 focus:ring-1 rounded-md focus:outline-none focus:ring-blue-500 focus:invalid:ring-red-500 border-2"
              placeholder="Email"
            />
            <textarea
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 h-32 border-2"
              placeholder="Message"
            ></textarea>

            <span
              type="submit"
              className="mt-3 font-semibold py-3 flex rounded-md gap-[10px] text-[20px] float-start items-center"
            >
              {/* Social media link */}
              <p>Follow us on : </p>
              <div className="flex gap-[20px]">
                <NavLink
                  to={
                    "https://www.facebook.com/profile.php?id=61567289293320&mibextid=LQQJ4d"
                  }
                >
                  <Facebook />
                </NavLink>
                <NavLink
                  to={
                    "https://www.instagram.com/nbu_bags?igsh=dGszN2h2b2J0cjl0)"
                  }
                >
                  <Instagram />
                </NavLink>
                <NavLink to={"https://www.tiktok.com/@nbu_bags"}>
                  <Tiktok />
                </NavLink>
              </div>
            </span>
            <button
              type="submit"
              className="bg-primary px-8 hover:bg-gray-950 text-gray-50 mt-3 font-semibold py-3 flex items-center rounded-md  float-end"
            >
              Send
            </button>
            <form />
          </div>
        </div>

        {/* Store Location / map  */}
        <div className="md:mt-0 mt-[20px]">
          <h1 className="text-4xl font-bold text-start font-ubuntu">
            Come<span className="text-primary"> visit us!</span>
          </h1>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.426780000495!2d85.30936247405297!3d27.704106325636975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18556ec52155%3A0x2f09a5d4c918952a!2sNarayan%20Bag%20Udyog!5e0!3m2!1sen!2snp!4v1729318385697!5m2!1sen!2snp"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mt-[20px] sm:h-[400px] sm:w-[600px] w-full h-[500px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
