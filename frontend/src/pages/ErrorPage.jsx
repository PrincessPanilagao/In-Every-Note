import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      {/* Page Not Found Image */}
      <div className="w-full relative flex justify-center">
        <img
          src="/assets/pnf-image.png"
          alt="Page Not Found"
          className="w-[69%] md:w-[50%] lg:w-[32%] h-auto mx-auto select-none transition-opacity duration-300"
          draggable="false"
        />
      </div>

      {/* Go Back Button */}
      <div className="w-36 mx-auto flex flex-col">
        <button
          className="font-worksans font-medium px-1 py-2 bg-[#9A2B2E] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300 hover:bg-[#F8F2ED] hover:text-[#262424]"
           onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
