import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../store/player";
import { FaHeart } from "react-icons/fa6";


const DescriptionPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Playing Audio and showing image
  const handlePlay = (e) => {
    if (!note || !isLoggedIn) return;

    e.preventDefault();
    dispatch(playerActions.setDiv());
    dispatch(
      playerActions.changeImage(`https://in-every-note-backend.onrender.com/${note.frontImage}`)
    );
    dispatch(
      playerActions.changeSong(`https://in-every-note-backend.onrender.com/${note.audioFile}`)
    );
  };

  // Fetch note data on load
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(
          `https://in-every-note-backend.onrender.com/api/v1/get-note/${id}`,
          { withCredentials: true }
        );
        setNote(res.data.data);
      } catch (err) {
        console.error("Failed to fetch note:", err);
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div className="px-4 lg:px-12 py-4">Loading...</div>;
  }

  return (
    <div className="mt-7 px-4 lg:px-12 py-4 h-auto flex flex-col md:flex-col lg:flex-row items-center justify-center gap-4">
      <div>
        {/* Recipient heading */}
        <div className="text-5xl text-[#9A2B2E] font-taprom -rotate-3">{`To: ${note.recipient}`}</div>

        {/* Note image and vinyl */}
        <div className="relative w-full mt-8 mb-8 md:mb-11 lg:mb-0 flex items-center justify-center md:justify-start md:items-start">
          <img
            src={`https://in-every-note-backend.onrender.com/${note.frontImage}`}
            className="size-[34vh] md:size-[40vh] lg:size-[45vh] object-cover shadow-[0_4px_10px_rgba(38,36,36,0.7)] -rotate-3"
          />
          <img
            src="/src/assets/vinyl.png"
            className="h-[30vh] md:h-[35vh] lg:h-[42vh] object-contain -rotate-3"
            draggable="false"
          />
        </div>
      </div>

      <div class="w-full md:w-3/6">
        {/* Message box with Listen button */}
        <div className="font-worksans py-8 px-8 bg-[#740F03] border-4 border-[#EBEBEB] rounded shadow-[0_4px_10px_rgba(38,36,36,0.4)]">
          {/* Note message */}
          <h4 className="text-base text-[#FCFAF9] mb-8">{note.message}</h4>

          {/* Listen / Play Button inside the box */}
          <div className="flex justify-end">
            {isLoggedIn ? (
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 text-sm font-worksans font-semibold px-7 py-2 bg-[#F8F2ED] text-[#262424] rounded-full duration-300 hover:bg-[#FCFAF9] border border-[#EBEBEB] shadow-[0_4px_10px_rgba(38,36,36,0.4)]"
              >
                <FaPlay />
                <span>Listen</span>
              </button>
            ) : (
              <Link
                to="/signup"
                className="flex items-center gap-2 text-sm font-medium px-7 py-2 bg-[#F8F2ED] text-[#262424] rounded-full duration-300 hover:bg-[#FCFAF9] border border-[#EBEBEB] shadow-[0_4px_10px_rgba(38,36,36,0.4)]"
              >
                <FaPlay />
                <span>Listen</span>
              </Link>
            )}
          </div>
        </div>
        {/* Share Link */}
        <div className="mt-8">
          <div className="mt-8 mb-3 flex flex-row items-center justify-start text-[#262424] gap-2">
            <FaHeart />
            <h1 className="font-worksans text-base font-semibold"><i>Share Note!</i></h1>
          </div>
          <div className="flex items-center gap-2 mt-1">
            
            <input
              type="text"
              value={window.location.href}
              readOnly
              className="font-worksans bg-[#F8F2ED] text-[#262424] outline-none ] px-3 py-2 rounded w-full text-sm"
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
              className="font-worksans font-medium bg-[#9A2B2E] text-[#FCFAF9] px-5 py-2 text-sm rounded hover:bg-[#740F03]"
            >
              COPY
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
