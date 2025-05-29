// import React from "react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

// ---SIGNUP PAGE---
const Signup = () => {
  const navigate = useNavigate();
  // Connecting sign-up page to backend - storing inputted values
  const [Values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  // Function for submitting sign-in
  const handleSubmit = async () => {
    // Connecting to sign-up API (user.js)
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/sign-up",
        Values
      );
      // Showing data message success alert
      toast.success(res.data.message);
      // direct to login when successful
      navigate("/login"); 
    } catch (error) {
      // Showing data message rror/warning alert - using toast
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="bg-[url('/src/assets/signup-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full h-screen flex items-center justify-center">
      {/* Toast alert container */}
      <ToastContainer
        position="top-right"
        draggable
        theme="colored"
        toastClassName="custom-toast"
      />
      <div className="w-4/6 md:w-3/6 lg:w-[27%] flex flex-col items-center justify-center">
        <Link
          to="/"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl text-[#9A2B2E] font-taprom"
        >
          in every note
        </Link>
        {/* HTML form for signup page */}
        <div className="mt-6 w-full font-worksans items-center justify-center">
          {/* USERNAME */}
          <div className="w-full flex flex-col lg:mt-7">
            <label htmlFor="" className="font-medium">
              Username
            </label>
            <input
              type="text"
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] focus:bg-[#FFF2E9] bg-[#F8F2ED]"
              required
              placeholder="Username"
              name="username"
              value={Values.username}
              onChange={change}
            />
          </div>

          {/* EMAIL */}
          <div className="w-full flex flex-col mt-6">
            <label htmlFor="" className="font-medium">
              Email
            </label>
            <input
              type="email"
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] focus:bg-[#FFF2E9] bg-[#F8F2ED]"
              required
              placeholder="Email"
              name="email"
              value={Values.email}
              onChange={change}
            />
          </div>

          {/* PASSWORD */}
          <div className="w-full flex flex-col mt-6">
            <label htmlFor="" className="font-medium">
              Password
            </label>
            <input
              type="password"
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] focus:bg-[#FFF2E9] bg-[#F8F2ED]"
              required
              placeholder="Password"
              name="password"
              value={Values.password}
              onChange={change}
            />
          </div>

          {/* SIGNUP BUTTON */}
          <div className="w-36 mx-auto flex flex-col mt-8">
            <button
              className="font-worksans font-medium px-1 py-2 bg-[#9A2B2E] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300 hover:bg-[#F8F2ED] hover:text-[#262424]"
              onClick={handleSubmit}
            >
              SIGN UP
            </button>
          </div>

          {/* SIGNUP BUTTON */}
          <div className="w-full flex flex-col mt-8">
            <p className="text-center font-medium">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#9A2B2E] hover:text-[#262424]"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
