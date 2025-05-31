import React, { useEffect, useRef, useState } from "react";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { FaPause } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { playerActions } from "../../store/player";
import { FaPlay } from "react-icons/fa6";

// Audio Player
const AudioPlayer = () => {
  const [isSongPlaying, setisSongPlaying] = useState(false);
  const [CurrentTime, setCurrentTime] = useState();
  const [Duration, setDuration] = useState(0);
  const dispatch = useDispatch();
  const PlayerDivState = useSelector((state) => state.player.isPlayerDiv);
  const songPath = useSelector((state) => state.player.songPath);
  const img = useSelector((state) => state.player.img);

  const audioRef = useRef();

  // fix: calculate time from function argument, not 'duration' constant
  const formatTime = (time) => {
    if (!time || isNaN(time)) return "0:00";
    const minute = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minute}:${seconds}`;
  };

  // Function to close audio player
  const closeAudioPlayerDiv = (e) => {
    e.preventDefault();

    // Pause and reset the audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    dispatch(playerActions.closeDiv());
    dispatch(playerActions.changeImage(""));
    dispatch(playerActions.changeSong(null));
    setisSongPlaying(false); // reflect paused state in UI
  };

  // Handling pause and play
  const handlePlaySong = () => {
    if (!audioRef.current) return;
    if (isSongPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.log("Play error:", err);
      });
    }
    setisSongPlaying(!isSongPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetaData = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Audio Playing
  useEffect(() => {
    if (!audioRef.current || !songPath) return; // prevent autoplay if songPath is null

    audioRef.current
      .play()
      .then(() => {
        setisSongPlaying(true);
      })
      .catch((err) => {
        console.log("Autoplay error:", err);
      });

    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetaData);

    return () => {
      if (!audioRef.current) return;
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener(
        "loadedmetadata",
        handleLoadedMetaData
      );
    };
  }, [songPath]);

  // Skip Backward
  const Backward = () => {
    if (audioRef.current) {
      let newTime = Math.max(CurrentTime - 10, 0);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime)
    }
  };

  // Skip Forward
  const Forward = () => {
    if (audioRef.current) {
      let newTime = Math.min(CurrentTime + 10, Duration);
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime)
    }
  };

  return (
    <div
      className={`${
        PlayerDivState ? "fixed" : "hidden"
      } bottom-0 left-0 w-[100%] bg-[#740F03] text-[#EAE2D7] p-4 rounded flex items-center gap-4 z-50`}
    >
      {/* Song thumbnail cover image */}
      <div className="hidden md:block w-1/3">
        <img src={img} alt="" className={`size-12 rounded-full object-cover`} />
      </div>

      {/* Controls */}
      <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-center gap-4 text-xl">
          {/* Play back */}
          <button onClick={Backward}>
            <IoPlaySkipBack />
          </button>
          {/* Pause & Play */}
          <button onClick={handlePlaySong}>
            {isSongPlaying ? <FaPause /> : <FaPlay />}
          </button>
          {/* Play Forward */}
          <button onClick={Forward}>
            <IoPlaySkipForward />
          </button>
        </div>

        <div className="w-full flex items-center justify-center mt-3">
          <input
            type="range"
            min="0"
            max={Duration}
            value={CurrentTime}
            onChange={(e) => {
              const newTime = parseFloat(e.target.value);
              setCurrentTime(newTime);
              if (audioRef.current) {
                audioRef.current.currentTime = newTime;
              }
            }}
            className="w-full hover:cursor-pointer accent-[#EAE2D7] 
            [&::-webkit-slider-thumb]:bg-[#EAE2D7] 
            [&::-moz-range-thumb]:bg-[#EAE2D7] 
            [&::-webkit-slider-runnable-track]:bg-[#932626] 
            [&::-webkit-slider-runnable-track]:rounded-full"
          />
        </div>

        <div className="w-full flex items-center justify-between text-sm">
          <span>{formatTime(CurrentTime)}</span>
          <span>{formatTime(Duration)}</span>
        </div>
      </div>

      <div className="w-1/3 flex items-center justify-end">
        {/* Close button */}
        <button onClick={closeAudioPlayerDiv}>
          <ImCross />
        </button>
      </div>

      {/* Audio */}
      <audio ref={audioRef} src={songPath} />
    </div>
  );
};

export default AudioPlayer;
