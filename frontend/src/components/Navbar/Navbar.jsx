import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";

const Navbar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
  ];

  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative">
      {/* Navbar for Laptop */}
      <div className="flex items-center justify-between">
        {/* Left Links: Home, About */}
        <div className="font-worksans hidden lg:flex flex-1 gap-4 ">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              style={{
                borderColor: "#262424",
                borderWidth: "1.5px", // required for borderColor to apply
              }}
              className="ms-1 px-7 py-1 border rounded-full bg-[#FCFAF9] transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
            >
              {items.name}
            </Link>
          ))}
        </div>

        {/* Center: IEN Logo */}
        <div className="flex justify-center lg:flex-1">
          <Link to="/">
            <img
              src="src/assets/logo.png"
              alt="In Every Note Logo"
              className="w-10 sm:w-12 md:w-14 h-auto"
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
          {/* Shows Profile in Nav when logged in */}
          {isLoggedIn && (
            <Link
              to="/profile"
              style={{
                borderColor: "#262424",
                borderWidth: "1.5px",
              }}
              className="font-worksans ms-4 px-7 py-1 bg-[#FCFAF9] border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
            >
              Profile
            </Link>
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
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              style={{
                // backgroundColor: "#FCFAF9",
                borderColor: "#262424",
                borderWidth: "1px", // required for borderColor to apply
              }}
              className="font-worksans mb-8 text-2xl px-7 py-3 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
            >
              {items.name}
            </Link>
          ))}

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
