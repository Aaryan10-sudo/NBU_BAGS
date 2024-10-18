import axios from "axios";
import { GiSchoolBag } from "react-icons/gi";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discount = () => {
  let [token, setToken] = useState("");
  let [loader, setLoader] = useState(true);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        method: "DELETE",
        url: `http://localhost:5555/token/delete/${id}`,
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
      let result = await axios({
        method: "POST",
        url: "http://localhost:5555/token/validate",
        data: data,
      });
      console.log(result);
      toast.success(
        `Congratulations! you got ${result.data.discount} discount`
      );
      handleDelete(result.data.data._id);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <center>
        {loader ? (
          <form
            onSubmit={handleSubmit}
            className="h-[150px] w-[270px] bg-[#949090] rounded-sm"
          >
            <center>
              <p className="mt-[10px]">Enter your code here</p>
              <input
                type="text"
                placeholder="Token"
                value={token}
                className="mt-[20px] mb-[20px]"
                onChange={(e) => {
                  setToken(e.target.value);
                }}
              />
              <br />
            </center>
            <center>
              <button type="submit" className="bg-[aqua] w-[100px]">
                SUBMIT
              </button>
            </center>
          </form>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="h-[150px] w-[270px] bg-[red]"
          >
            <center>
              <div className="relative h-[50px] w-[50px] flex justify-center items-center">
                <div className="absolute h-full w-full border-2 border-transparent border-t-black border-r-black border-b-black rounded-full animate-spin"></div>
                <GiSchoolBag className="text-[30px]" />
              </div>
            </center>
          </form>
        )}
      </center>
    </>
  );
};

export default Discount;
