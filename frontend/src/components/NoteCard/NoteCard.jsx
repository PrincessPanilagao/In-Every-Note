import React from "react";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player";

const NoteCard = ({ items }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  // Playing Audio and showing image
  const handlePlay = (e) => {
    if (isLoggedIn) {
      e.preventDefault();
      dispatch(playerActions.setDiv());
      dispatch(
        playerActions.changeImage(`http://localhost:3000/${items.frontImage}`)
      );
      dispatch(
        playerActions.changeSong(`http://localhost:3000/${items.audioFile}`)
      );
    }
  };

  return (
    <div>
      <Link to={`/description/${items._id}`} className="mt-5 p-4 flex flex-col">
        {/* Image & Vinyl Cover display */}
        <div className="flex items-center object-cover">
          <img
            src={`http://localhost:3000/${items.frontImage}`}
            className="size-[38vh] border-2 border-[#262424] object-cover shadow-[0_4px_10px_rgba(38,36,36,0.7)] shadow-xl hover:shadow-lg transition-all duration-300"
          />
          <img
            src="/src/assets/vinyl.png"
            className="h-[35vh] object-contain "
            draggable="false"
          />
        </div>

        <div className="mt-6 w-[82%] px-3 py-4 font-worksans text-[#FCFAF9] rounded outline-none bg-[#740F03]">
          {/* Recipient */}
          <div className="text-lg font-semibold">
            <i>{`To: ${items.recipient.slice(0, 20)}`}</i>
          </div>
          {/* Message */}
          <div className="mt-1 leading-5 text-sm text-[#F8F2ED]">
            {`${items.message.slice(0, 50)}...`}
          </div>

          {/* Play Music */}
          <div
            className="flex flex-row gap-2 text-sm items-center justify-center mt-5 font-medium px-1 py-2 bg-[#F8F2ED] text-[#262424] rounded-full duration-300 hover:bg-[#9A2B2E] hover:text-[#FCFAF9]"
            onClick={handlePlay}
          >
            <Link to={isLoggedIn ? "#" : "/signup"}>Listen</Link>
            <FaPlay />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default NoteCard;
