import React, { useEffect, useState } from "react";
import axios from "axios";

// ---PROFILE HEADER---
const Header = () => {
  const [UserData, setUserData] = useState();

  // Fetching inputted user data
  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await axios.get("https://in-every-note-backend.onrender.com/api/v1/user-details", {
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
            <h1
              className="mt-9 -mb-3 md:-mb-12 lg:-mb-12 text-5xl sm:text-7xl md:text-6xl lg:text-7xl text-[#9A2B2E] font-taprom"
            >
              Profile
            </h1>

            {/* Header Frame */}
            <div className="w-full relative flex justify-center">
              {/* Responsive background container */}
              <div
                className="w-full md:w-[95%] lg:w-[90%] min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] bg-no-repeat bg-center bg-contain bg-[url('/assets/header-bg-mobile-1.png')] sm:bg-[url('/assets/header-bg.png')] select-none transition-opacity duration-300 flex flex-col items-start justify-center px-6 sm:px-12 py-10 sm:py-16 gap-2"
              >
                {/* Username display */}
                <h1 className="ml-13 md:ml-12 lg:ml-12 sm:mr-12 text-2xl md:text-3xl lg:text-4xl text-[#FCFAF9] font-bold font-worksans sm:text-left">
                  Welcome, {UserData.username}!
                </h1>
                {/* Email display */}
                <p className="ml-13 md:ml-14 lg:ml-14 sm:mr-12 text-[#FCFAF9] font-worksans font-light mt-1 sm:text-left">
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
