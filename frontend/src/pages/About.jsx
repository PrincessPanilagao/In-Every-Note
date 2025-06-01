import React from "react";
import aboutbgmobile from '../assets/about-frame-mobile.png';
import aboutbgbig from '../assets/about-frame.png';

// ---ABOUT PAGE---
const About = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* About title */}
      <div className="flex flex-col items-center justify-center">
        <h1
          className="mt-9 text-5xl sm:text-7xl md:text-7xl lg:text-7xl text-[#9A2B2E] font-taprom"
        >
          About
        </h1>
      </div>

      {/* About Frame */}
      <div className="w-full lg:-mt-4 sm:-mt-17 md:-mt-6 mb-12 relative flex justify-center">
        {/* Mobile image (sm and below) */}
        <img
          src={aboutbgmobile}
          alt="About Frame Mobile"
          className="block sm:hidden w-[100%] h-auto select-none transition-opacity duration-300"
          draggable="false"
        />

        {/* Tablet and larger */}
        <img
          src={aboutbgbig}
          alt="About Frame"
          className="hidden sm:block sm:w-[80%] md:w-[100%] lg:w-[85%] h-auto select-none transition-opacity duration-300"
          draggable="false"
        />

        {/* About Information */}
        <div className="absolute top-[34%] md:top-[39%] lg:top-[39%] left-[52%] md:left-[57%] lg:left-[59%] w-[70%] md:w-[63%] lg:w-[60%] transform -translate-x-1/2 -translate-y-1/2 text-left z-10">
          <p className="lg:w-[60%] sm:text-sm md:text-sm lg:text-lg text-[#FCFAF9] font-worksans">
            <i>
              Have you ever listened to a song and thought,
              <span className="relative inline-block font-semibold">
                “This reminds me of them”?
                {/* Underline image */}
                <img
                  src="/src/assets/underline.png"
                  alt="underline"
                  className="absolute top-8 left-0 bottom-0 w-full h-auto"
                  draggable="false"
                />
              </span>
            </i>
          </p>
          
          {/* What is In Every Note? */}
          <p className="mt-9 lg:w-[44%] md:w-[55%] sm:text-sm md:text-sm lg:text-lg text-[#FCFAF9] font-worksans">
            <span className="font-semibold">
              <i>In Every Note</i>
            </span>{" "}
            is a web app where you can dedicate a song and a heartfelt message
            to someone you care about, because sometimes, music helps us express
            more than words can.
          </p>
        </div>

        <div className="absolute top-[63%] md:top-[68%] lg:top-[68%] left-[34%] lg:left-[55%] md:left-[50%] w-[60%] transform -translate-x-1/2 -translate-y-1/2 text-left z-10">
          {/* Created by: Cess */}
          <div className="flex flex-row items-center justify-center gap-2">
            {/* Asterisk image */}
            <img
              src="/src/assets/asterisk.png"
              alt="Asterisk bullet"
              className="w-auto h-auto items-center"
              draggable="false"
            />
            <p className="w-[40%] md:w-[100%] lg:w-[100%] text-xs md:text-2xs lg:text-base text-[#FCFAF9] font-worksans">
              <span className="font-light">
                <i>
                  Created by: Cess,
                  <br />
                  for those quiet moments when a song says it all
                </i>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
