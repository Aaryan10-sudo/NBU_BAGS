import React, { useState } from "react";
import Footer from "../layouts/Footer";
import NavBar from "../layouts/Navbar";
import Facebook from "../ui/Facebook";
import Instagram from "../ui/Instagram";
import Tiktok from "../ui/Tiktok";
import { toast, ToastContainer } from "react-toastify";
import { hitApi } from "../../services/HitApi";

const Offers = () => {
  let [token, setToken] = useState("");

  const handleDelete = async (id) => {
    try {
      let result = await hitApi({
        method: "DELETE",
        url: `/token/delete/${id}`,
      });
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
      <ToastContainer className="font-ubuntu" />
      <NavBar />
      <div className=" 2xl:px-40 lg:px-[40px] flex flex-col pb-[20px]">
        <img src="/offers.png" className="" />
        <div className="lg:h-[100px] bg-gray-200 flex justify-between px-[10px] items-center py-[10px]">
          <img src="/logo.png" className="h-[60px]" />
          <h1 className="hidden sm:block 2xl:text-[30px] lg:text-[30px] font-extrabold font-montserrat">
            " Share , Enter and Get Your Discount "
          </h1>
          <form onSubmit={handleSubmit} className="flex items-center gap-5">
            <input
              placeholder="Enter your code here"
              className="h-[40px] sm:w-[250px] px-2 outline rounded-sm font-montserrat"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <button
              type="submit"
              className="bg-primary w-[100px] text-white h-[40px] rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="m-[10px] flex flex-col gap-[10px]">
          <h1 className="font-bold text-[30px]">How to participate ?</h1>
          <p className="lg:text-[20px]">
            1. Participate in our offer Share , Enter and Get your discount
          </p>
          <p className="lg:text-[20px]">
            2. Share our post to 5 different groups or pages.
          </p>
          <p className="lg:text-[20px]">
            3. Redeem Coupon code from our social media page after task
            completion
          </p>
          <p className="lg:text-[20px]">
            4. Enter the coupon code above and get your discount
          </p>
        </div>

        <div className="m-[10px] flex flex-col gap-[10px]">
          <h1 className="font-bold text-[30px]">Haven't Participated yet ?</h1>
          <span>
            <p className="lg:text-[20px]">Get in touch with us today !</p>
            <p className="lg:text-[20px]">
              And participate in exciting offers and events
            </p>
          </span>

          <div className="flex gap-10 text-[25px] my-[10px]">
            <Facebook />
            <Instagram />
            <Tiktok />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Offers;
