import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

// ---INPUT NOTE FUNCTIONALITY---
const InputNote = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="px-4 lg:px-12 pt-4 pb-12 min-h-screen box-border overflow-hidden">
      {/* Send A Note title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="mt-9 text-5xl sm:text-7xl md:text-7xl lg:text-7xl text-[#9A2B2E] font-taprom">
          Send a Note
        </h1>
      </div>
      <div className="mt-2 flex flex-col lg:flex-row items-center justify-between gap-2">
        {/* Upload Front Image */}
        <div
          className="lg:w-3/6 flex items-center justify-center
             bg-center bg-no-repeat
             bg-cover"
          style={{
            paddingTop: "9%",
            paddingBottom: "9%",
            backgroundImage: "url('/src/assets/frontimage-bg.png')",
          }}
        >
          {/* Input Front Image */}
          <div
            className="w-[14rem] h-[14rem] lg:w-[22rem] lg:h-[22rem] flex items-center justify-center bg-[#F8F2ED] hover:bg-[#FFF2E9] transition-all duration-300"
            style={{ border: "3px dashed #262424" }}
          >
            <input
              type="file"
              accept="image/*"
              id="file"
              name="frontImage"
              className="hidden"
            />
            <label
              htmlFor="file"
              className="font-worksans font-regular text-base h-[100%] w-[100%] hover:cursor-pointer flex items-center justify-center px-8"
            >
              <div className="text-center">
                Drag and drop an image or click to browse
              </div>
            </label>
          </div>
        </div>

        <div className="w-full lg:w-3/6">
          {/* Enter Recipient Name */}
          <div className="flex flex-col">
            <label
              htmlFor="recipient"
              className="font-worksans font-medium text-base text-[#262424]"
            >
              Recipient
            </label>
            <input
              type="text"
              id="recipient"
              name="recipient"
              placeholder="Enter recipient’s name"
              className="placeholder:text-sm font-worksans mt-2 px-4 py-2 outline-none border-2 border-[#262424] bg-[#F8F2ED] rounded focus:bg-[#FFF2E9]"
            />
          </div>

          {/* Enter Message */}
          <div className="flex flex-col mt-6">
            <label
              htmlFor="message"
              className="font-worksans font-medium text-base text-[#262424]"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              name="message"
              maxLength={300}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              className="placeholder:text-sm font-worksans mt-2 px-4 py-2 outline-none border-2 border-[#262424] bg-[#F8F2ED] rounded focus:bg-[#FFF2E9]"
              rows={4}
            />
            <div className="text-right text-sm text-[#262424] mt-1 font-worksans">
              {message.length}/300 characters
            </div>
          </div>

          {/* Upload Audio File */}
          <div className="flex flex-col mt-4">
            <label className="font-worksans font-medium text-base text-[#262424]">
              Select the song that reminds you of them
            </label>
            <label
              htmlFor="audioFile"
              className="font-worksans mt-2 px-4 py-2 outline-none border-2 border-[#262424] bg-[#F8F2ED] text-[#A8A3AF] rounded hover:bg-[#FFF2E9]"
            >
              <div className="flex flex-row items-center justify-between text-sm">
                <p>Accepted file types: .mp3, .wav, .m4a, .ogg</p>
                <FaStar />
              </div>
            </label>
            <input
              type="file"
              accept=".mp3, .wav, .m4a, .ogg"
              id="audioFile"
              name="audioFile"
              className="hidden font-worksans mt-2 px-4 py-2 outline-none border-2 border-[#262424] bg-[#F8F2ED] rounded focus:bg-[#FFF2E9]"
              rows={4}
            />
          </div>

          {/* Send Note Button */}
          <div className="mt-8 lg:mt-8 flex justify-center">
            <button className="font-worksans font-medium px-8 py-2 bg-[#9A2B2E] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300">
              SEND NOTE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNote;
