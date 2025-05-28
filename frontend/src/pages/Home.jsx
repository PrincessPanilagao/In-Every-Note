import React, { useState, useEffect } from "react";

const Home = () => {
  const desktopImages = ["/src/assets/cover-image.png", "/src/assets/cover-image-2.png"];
  const mobileImages = ["/src/assets/cover-image-mbl.png", "/src/assets/cover-image-mbl-2.png"];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen width
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile(); // Check initially

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Cycle between images like a GIF
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % desktopImages.length);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  return (
    <div className="px-4 md:px-12 w-full h-auto overflow-hidden">
      <div className="flex flex-col items-center gap-4">
        {/* In Every Note Title */}
        <div className="mt-6 w-full text-center text-5xl sm:text-6xl md:text-8xl lg:text-8xl text-[#9A2B2E] font-taprom relative z-10">
          in every note
        </div>

        {/* Cover Image */}
        <div className="w-full mt-4 sm:-mt-12 md:-mt-8 relative z-0">
          <img
            src={images[currentIndex]}
            alt="When words fail, you can always dedicate a song."
            className="w-full h-auto object-contain select-none transition-opacity duration-300"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
