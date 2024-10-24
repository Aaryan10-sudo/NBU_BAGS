import axios from "axios";
import React, { useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const LogIn = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [loader, setLoader] = useState(true);
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(false);
    let data = {
      email: email,
      password: password,
    };
    try {
      let result = await axios({
        url: "https://nbu-bags.onrender.com/webuser/login",
        method: "POST",
        data: data,
      });
      setLoader(true);
      navigate("/admin/dashboard");
      console.log(result);
      localStorage.setItem("token", result.data.token);
    } catch (error) {
      setLoader(true);
      {
        error.response.data.message === "Invalid Credentials"
          ? toast.error("Invalid Credentials")
          : toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('/bagpackbg.jpg')] bg-contain bg-center sm:h-screen h-[100vh]">
      <div className="w-[350px] h-[400px] bg-slate-400 rounded-sm shadow-2xl shadow-black">
        <ToastContainer />

        <div className="h-[60px] my-[10px] py-[10px]  flex flex-col justify-center items-center">
          <img src="logo.png" className="h-[50px]" />
          <h1 className="pb-[10px] font-extrabold text-white">NBU BAGS</h1>
        </div>
        <h1 className="mx-[20px] text-[20px] font-bold">Log In</h1>
        <p className="mx-[20px]">Log In to continue access</p>
        <br />
        <form onSubmit={handleSubmit} className="flex flex-col mx-[20px]">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Username"
            className="placeholder:mx-[10px] h-[40px]"
          />

          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="h-[40px]"
            placeholder="Password"
          />
          <br />
          <button
            type="submit"
            className="flex items-center justify-center text-white font-bold  bg-slate-600 h-[40px]"
          >
            {loader ? (
              "Submit"
            ) : (
              <BiLoaderAlt className="text-[20px] animate-spin text-white" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
