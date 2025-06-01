import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import ErrorPage from "./ErrorPage";

// ---LOGIN PAGE---
const Login = () => {
  // check state
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Connecting sign-in page to backend - storing inputted values
  const [Values, setValues] = useState({
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
      await axios.post(
        "hhttps://in-every-note-backend.onrender.com/api/v1/sign-in",
        Values,
        { withCredentials: true } // access given for data to be accessed from frontend to backend & vice versa
      );
      dispatch(authActions.login()); // sets state to login (which is loggedin true)
      // console.log(res.data);
      // navigate to profile page once successful
      navigate("/profile");
    } catch (error) {
      // Showing data message rror/warning alert - using toast
      toast.error(error.response.data.message);
    }
  };

  // note: user cannot log back in after logging in
  return (
    <>
      {isLoggedIn ? (
        <ErrorPage />
      ) : (
        <div className="bg-[url('/src/assets/login-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full h-screen flex items-center justify-center">
          {/* Toast alert container */}
          <ToastContainer
            position="top-right"
            draggable
            theme="colored"
            toastClassName="custom-toast"
          />
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
                  className="mt-2 px-2 py-2 rounded outline-none border-2 border-[#262424] bg-[#F8F2ED] focus:bg-[#FFF2E9] "
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

              {/* LOGIN BUTTON */}
              <div className="w-36 mx-auto flex flex-col mt-8">
                <button
                  className="font-worksans font-medium px-1 py-2 bg-[#9A2B2E] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300 hover:bg-[#F8F2ED] hover:text-[#262424]"
                  onClick={handleSubmit}
                >
                  LOG IN
                </button>
              </div>

              {/* SIGNUP CTA */}
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
      )}
    </>
  );
};

export default Login;
