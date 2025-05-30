import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
              className="mt-9 text-5xl sm:text-7xl md:text-7xl lg:text-7xl text-[#9A2B2E] font-taprom"
            >
              Profile
            </Link>

            {/* Header - cover image */}
            <div className="-mt-40 md:-mt-56 lg:-mt-36 bg-[url('/src/assets/header-bg-mobile.png')] md:bg-[url('/src/assets/header-bg.png')] bg-no-repeat bg-center bg-contain min-h-screen w-screen flex flex-col md:flex-row items-center justify-center gap-4 md:justify-between md:pl-[10%]">
              <div className="flex flex-col items-start md:items-start ml-[-29%] md:ml-[0%]">
                {/* Username display */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl text-[#FCFAF9] font-bold font-worksans sm:text-left">
                  Welcome, {UserData.username}!
                </h1>
                {/* Email display */}
                <p className="text-[#FCFAF9] font-worksans font-light mt-1">
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
