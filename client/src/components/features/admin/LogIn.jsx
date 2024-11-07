import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { hitApi } from "../../../services/HitApi";
import Loader from "../../ui/Loader";

const LogIn = ({ setValidToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      email,
      password,
    };

    try {
      const result = await hitApi({
        url: "/webuser/login",
        method: "POST",
        data: data,
      });

      // Save token to localStorage
      localStorage.setItem("token", result.data.token);

      // Update token validity and navigate to dashboard
      setValidToken(true);
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message === "Invalid credentials"
          ? "Invalid Credentials"
          : "Something went wrong";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[url('/bagpackbg.jpg')] bg-contain bg-center sm:h-screen h-[100vh]">
      <div className="w-[350px] h-[400px] bg-slate-400 rounded-sm shadow-2xl shadow-black">
        <ToastContainer />

        {/* Logo Section */}
        <div className="h-[60px] my-[10px] py-[10px] flex flex-col justify-center items-center">
          <img src="logo.png" className="h-[50px]" alt="NBU BAGS Logo" />
          <h1 className="pb-[10px] font-extrabold text-white">NBU BAGS</h1>
        </div>

        {/* Header */}
        <h1 className="mx-[20px] text-[20px] font-bold">Log In</h1>
        <p className="mx-[20px]">Log In to continue access</p>
        <br />

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="flex flex-col mx-[20px]">
          <label htmlFor="email">Username:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Username"
            className="px-[5px] h-[40px]"
            id="email"
          />

          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-[5px] h-[40px]"
            placeholder="Password"
            id="password"
          />
          <br />

          {/* Submit Button */}
          <button
            type="submit"
            className="flex items-center justify-center text-white font-bold bg-slate-600 h-[40px]"
          >
            {loading ? (
              <Loader className="text-[20px] animate-spin text-white" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
