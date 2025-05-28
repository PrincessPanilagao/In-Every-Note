import React from "react";
import { Link } from "react-router-dom";

// ---LOGIN PAGE---
const Login = () => {
  return (
    <div className="bg-[url('/src/assets/login-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full h-screen flex items-center justify-center">
      <div className="w-4/6 md:w-4/6 lg:w-[27%] flex flex-col items-center justify-center">
        <Link
          to="/"
          className="text-5xl sm:text-6xl md:text-8xl lg:text-7xl text-[#9A2B2E] font-taprom"
        >
          in every note
        </Link>
        {/* HTML form for login page */}
        <div className="mt-6 w-full font-worksans items-center justify-center">
          {/* EMAIL */}
          <div className="w-full flex flex-col mt-6">
            <label htmlFor="" className="font-medium">
              Email
            </label>
            <input
              type="email"
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] bg-[#F8F2ED]"
              required
              placeholder="Email"
              name="email"
            />
          </div>

          {/* PASSWORD */}
          <div className="w-full flex flex-col mt-6">
            <label htmlFor="" className="font-medium">
              Password
            </label>
            <input
              type="password"
              className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] bg-[#F8F2ED]"
              required
              placeholder="Password"
              name="password"
            />
          </div>

          {/* SIGNUP BUTTON */}
          <div className="w-36 mx-auto flex flex-col mt-8">
            <button className="font-worksans font-medium px-1 py-2 bg-[#9A2B2E] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300 hover:bg-[#F8F2ED] hover:text-[#262424]">
              LOG IN
            </button>
          </div>

          {/* SIGNUP BUTTON */}
          <div className="w-full flex flex-col mt-8">
            <p className="text-center font-medium">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#9A2B2E] hover:text-[#262424]"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
