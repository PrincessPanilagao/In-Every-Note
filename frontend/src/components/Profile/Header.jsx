import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// ---PROFILE HEADER---
const Header = () => {
  const [UserData, setUserData] = useState();

  // Fetching inputted user data
  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/user-details", {
        withCredentials: true,
      });
      setUserData(res.data.user);
    };
    fetchUserDetails();
  }, []);

  return (
    <>
      {UserData && (
        <div>
          {/* Profile title */}
          <div className="flex flex-col items-center justify-center">
            <Link
              to="/Profile"
              className="mt-9 -mb-12 text-5xl sm:text-7xl md:text-6xl lg:text-7xl text-[#9A2B2E] font-taprom"
            >
              Profile
            </Link>

            {/* Header Frame */}
            <div className="w-full relative flex justify-center">
              {/* Responsive background container */}
              <div
                className="w-full sm:w-[85%] lg:w-[90%] min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] bg-no-repeat bg-center bg-contain bg-[url('/src/assets/header-bg-mobile.png')] sm:bg-[url('/src/assets/header-bg.png')] select-none transition-opacity duration-300 flex flex-col items-start justify-center px-6 sm:px-12 py-10 sm:py-16 gap-2"
              >
                {/* Username display */}
                <h1 className="ml-12 sm:mr-12 text-2xl md:text-3xl lg:text-4xl text-[#FCFAF9] font-bold font-worksans sm:text-left">
                  Welcome, {UserData.username}!
                </h1>
                {/* Email display */}
                <p className="ml-14 sm:mr-12 text-[#FCFAF9] font-worksans font-light mt-1 sm:text-left">
                  {UserData.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
