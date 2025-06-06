import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { authActions } from "../../store/auth";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Log out functionality - go back to home
  const LogOutHandler = async () => {
    await axios.post("https://in-every-note-backend.onrender.com/api/v1/logout", {
      withCredentials: true,
    });
    // console.log(res);
    dispatch(authActions.logout());
    navigate("/");
  };

  const [MobileNav, setMobileNav] = useState(false);
  // Menu links
  const navLinks = [
    {
      // Home
      name: "HOME",
      path: "/",
    },
    {
      // About
      name: "ABOUT",
      path: "/about",
    },

    {
      // All Notes
      name: "NOTES",
      path: "/all-notes",
    },
  ];

  return (
    <nav className="px-4 md:px-8 lg:px-12 py-5 relative">
      {/* Navbar for Laptop */}
      <div className="flex items-center justify-between">
        {/* Left Links: Home, About */}
        <div className="font-worksans hidden lg:flex flex-1 gap-4 ">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              style={{
                borderColor: "#262424",
                borderWidth: "1.5px",
              }}
              className={`ms-1 px-7 py-1 border rounded-full font-worksans transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#9A2B2E] text-[#FCFAF9]"
                  : "bg-[#FCFAF9] hover:bg-[#9A2B2E] hover:text-[#FCFAF9] transition-all"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Center: IEN Logo */}
        <div className="flex justify-center lg:flex-1">
          <Link to="/">
            <img
              src="/assets/ien-logo.png"
              alt="In Every Note Logo"
              className="w-11 sm:w-12 md:w-14 h-auto"
            />
          </Link>
        </div>

        {/* Right Links: Signup, Login */}
        <div className="hidden w-2/6 lg:flex items-center justify-end">
          {/* Show signup and login when loggedin is false */}
          {!isLoggedIn && (
            <>
              <Link
                to="/login"
                style={{
                  borderColor: "#262424",
                  borderWidth: "1.5px",
                }}
                className="font-worksans px-7 py-1 bg-[#FCFAF9] border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
              >
                LOG IN
              </Link>
              <Link
                to="/signup"
                style={{
                  borderColor: "#262424",
                  borderWidth: "1.5px",
                }}
                className="font-worksans ms-4 px-7 py-1 bg-[#FCFAF9] border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
              >
                SIGN UP
              </Link>
            </>
          )}
          {/* Shows Profile & Log Out in Nav when logged in */}
          {isLoggedIn && (
            <>
              {/* Profile Button */}
              <Link
                to="/profile"
                style={{
                  borderColor: "#262424",
                  borderWidth: "1.5px",
                }}
                className={`ms-4 px-7 py-1 border rounded-full font-worksans transition-all duration-300 ${
                  location.pathname === "/profile"
                    ? "bg-[#9A2B2E] text-[#FCFAF9]"
                    : "bg-[#FCFAF9] hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
                }`}
              >
                PROFILE
              </Link>

              {/* Log Out Button */}
              <Link
                onClick={LogOutHandler} // Replace with your logout handler
                style={{
                  borderColor: "#262424",
                  borderWidth: "1.5px",
                }}
                className="font-worksans ms-4 px-7 py-1 bg-[#FCFAF9] border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
              >
                LOG OUT
              </Link>
            </>
          )}
        </div>

        {/*Hamburger button*/}
        <div
          className={`1-4/6 flex items-center justify-end lg:hidden transition-opacity duration-300 ${
            MobileNav ? "opacity-0 pointer-events-none" : "opacity-100 z-[50]"
          }`}
        >
          <button className="text-4xl" onClick={() => setMobileNav(true)}>
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>

      {/* Navbar for Tablet & Mobile */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#F8F2ED] ${
          MobileNav
            ? "translate-y-0 pointer-events-auto visible"
            : "-translate-y-full pointer-events-none invisible"
        } transition-all duration-500 ease-in-out z-[50]`}
      >
        {/* (X) Button */}
        <div className="p-4 flex justify-end text-3xl z-[50]">
          <button
            className="text-3xl bg-[#9A2B2E] text-white rounded-full p-2"
            onClick={() => setMobileNav(!MobileNav)}
          >
            <RxCross2 />
          </button>
        </div>
        {/* Collapsable Menu */}
        <div className="h-full flex flex-col items-center justify-center z-[50]">
          {navLinks.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              style={{
                borderColor: "#262424",
                borderWidth: "1px",
              }}
              className={`font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 ${
                location.pathname === item.path
                  ? "bg-[#9A2B2E] text-[#FCFAF9]"
                  : "hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
              }`}
            >
              {item.name}
            </Link>
          ))}

          {!isLoggedIn ? (
            <>
              {/*Login*/}
              <Link
                to="/login"
                style={{
                  // backgroundColor: "#FCFAF9",
                  borderColor: "#262424",
                  borderWidth: "1px", // required for borderColor to apply
                }}
                className="font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
              >
                LOG IN
              </Link>
              {/*Signup*/}
              <Link
                to="/signup"
                style={{
                  // backgroundColor: "#FCFAF9",
                  borderColor: "#262424",
                  borderWidth: "1px", // required for borderColor to apply
                }}
                className="font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
              >
                SIGN UP
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/profile"
                style={{
                  // backgroundColor: "#FCFAF9",
                  borderColor: "#262424",
                  borderWidth: "1px", // required for borderColor to apply
                }}
                className="font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
              >
                PROFILE
              </Link>
              {/* Log Out Button */}
              <Link
                onClick={LogOutHandler} // Replace with your logout handler
                style={{
                  borderColor: "#262424",
                  borderWidth: "1px",
                }}
                className="font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
              >
                LOG OUT
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
