import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { hitApi } from "../../services/HitApi";
import NavBar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import Bag from "../ui/Bag";
import Gift from "../ui/Gift";
import Facebook from "../ui/Facebook";
import Instagram from "../ui/Instagram";
import Tiktok from "../ui/Tiktok";

const Discount = () => {
  let [token, setToken] = useState("");
  let [loader, setLoader] = useState(true);

  const handleDelete = async (id) => {
    try {
      let result = await hitApi({
        method: "DELETE",
        url: `/token/delete/${id}`,
      });
      console.log(result);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      token: token,
    };
    try {
      let result = await hitApi({
        method: "POST",
        url: "/token/validate",
        data: data,
      });
      console.log(result);
      toast.success(
        `Congratulations! You have received a ${result.data.discount} discount.`
      );
      handleDelete(result.data.data._id);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <NavBar />
      <div className="h-screen flex flex-col gap-10 justify-center items-center">
        <div className="h-[30px] text-[50px] text-gray-500">
          <Gift />
        </div>

        <h2 className="text-xl font-semibold text-center">
          Sorry, no discount or offers running right now.
        </h2>
        <p className=" text-center text-gray-600">
          Stay tuned for exciting offers coming your way!
          <span className="flex gap-[20px] items-center justify-center pt-[10px]">
            <Facebook />
            <Instagram />
            <Tiktok />
          </span>
        </p>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Discount;
