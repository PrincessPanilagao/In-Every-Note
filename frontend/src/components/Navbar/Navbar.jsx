import React from "react";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

// import logo from "/assets/logo.png"; // logo

const Navbar = () => {
  // Menu links
  const navLinks = [
    {
      // Home
      name: "Home",
      path: "/home",
    },
    {
      // About
      name: "About",
      path: "/about",
    },
    {
      // Profile
      name: "Profile",
      path: "/profile",
    },
  ];

  return (
    <nav className="px-4 md:px-8 lg:px-12 py-2 relative">
      <div className="flex items-center justify-between">
        {/* Left Links: Home, About */}
        <div className="hidden lg:flex flex-1 gap-4 ">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              style={{
                // backgroundColor: "#FCFAF9",
                borderColor: "#262424",
                borderWidth: "1px", // required for borderColor to apply
              }}
              className="ms-1 px-6 py-2 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
            >
              {items.name}
            </Link>
          ))}
        </div>

        {/* Center: IEN Logo */}
        <div className="justify-start logo brand-name lg:flex flex-1 justify-center">
          <Link to="/">
            <img
              src="src/assets/logo.png"
              alt="In Every Note Logo"
              className="h-auto w-14"
            />
          </Link>
        </div>

        {/* Right Links: Signup, Login */}
        <div className="hidden w-2/6 lg:flex items-center justify-end">
          <Link
            style={{
              // backgroundColor: "#FCFAF9",
              borderColor: "#262424",
            }}
            className="px-6 py-2 border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
          >
            Login
          </Link>
          <Link
            style={{
              // backgroundColor: "#FCFAF9",
              borderColor: "#262424",
            }}
            className="ms-4 px-6 py-2 border rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
          >
            Signup
          </Link>
        </div>

        <div className="1-4/6 flex items-center justify-end lg:hidden">
          {/*Hamburger button*/}
          <button className="text-5xl">
            <IoReorderThreeOutline />
          </button>
        </div>
      </div>
      <div className={`fixed top-0 left-0 w-full h-screen bg-[#F8F2ED]" `}>
        <div className="p-8 flex items-center justify-end text-3xl">
          <button>
            <RxCross2 />
          </button>
        </div>
        <div className="h-full flex flex-col items-center justify-center">
          {navLinks.map((items, i) => (
            <Link
              key={i}
              to={items.path}
              style={{
                // backgroundColor: "#FCFAF9",
                borderColor: "#262424",
                borderWidth: "1px", // required for borderColor to apply
              }}
              className="mb-8 text-2xl px-6 py-2 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
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
            className="mb-8 text-2xl px-6 py-2 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
          >
            Login
          </Link>
          {/*Signup*/}
          <Link
            to="/signup"
            style={{
              // backgroundColor: "#FCFAF9",
              borderColor: "#262424",
              borderWidth: "1px", // required for borderColor to apply
            }}
            className="mb-8 text-2xl px-6 py-2 border rounded-full transition-all duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9] hover:font-semibold"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
