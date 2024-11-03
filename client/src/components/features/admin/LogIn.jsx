import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { hitApi } from "../../../services/HitApi";
import Loader from "../../ui/Loader";

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
      let result = await hitApi({
        url: "/webuser/login",
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
        error.response.data.message === "Invalid credentials"
          ? toast.error("Invalid Credentials")
          : toast.error("Something went wrong");
      }
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('/bagpackbg.jpg')] bg-contain bg-center sm:h-screen h-[100vh]">
      <div className="w-[350px] h-[400px] bg-slate-400 rounded-sm shadow-2xl shadow-black">
        <ToastContainer />

        {/* Logo section */}
        <div className="h-[60px] my-[10px] py-[10px]  flex flex-col justify-center items-center">
          <img src="logo.png" className="h-[50px]" />
          <h1 className="pb-[10px] font-extrabold text-white">NBU BAGS</h1>
        </div>

        {/* Header */}
        <h1 className="mx-[20px] text-[20px] font-bold">Log In</h1>
        <p className="mx-[20px]">Log In to continue access</p>
        <br />

        {/* Log-in form */}
        <form onSubmit={handleSubmit} className="flex flex-col mx-[20px]">
          <label htmlFor="">Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Username"
            className="px-[5px] h-[40px] "
          />

          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="px-[5px] h-[40px]"
            placeholder="Password"
          />
          <br />

          {/* Submit button */}
          <button
            type="submit"
            className="flex items-center justify-center text-white font-bold  bg-slate-600 h-[40px]"
          >
            {loader ? (
              "Submit"
            ) : (
              <Loader className="text-[20px] animate-spin text-white" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
