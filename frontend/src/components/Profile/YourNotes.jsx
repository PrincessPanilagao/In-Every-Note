import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NoteCard from "../NoteCard/NoteCard";

const YourNotes = () => {
  const [Notes, setNotes] = useState();
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get(
        "https://in-every-note-backend.onrender.com/api/v1/get-user-notes",
        { withCredentials: true }
      );
      setNotes(res.data.data);
    };
    fetchNotes();
  }, []);

  return (
    <div className="px-4 lg:px-12 pt-4 pb-12 min-h-screen box-border overflow-hidden">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex flex-row items-center justify-center gap-2">
            {/* Asterisk image */}
            <img
              src="/assets/your-notes-icon.png"
              alt="Your Notes Icon"
              className="w-[25%] h-auto items-center"
              draggable="false"
            />
            <h1 className="text-xl font-worksans font-semibold text-[#262424] md:font-bold">
              <i>Your Notes</i>
            </h1>
          </div>
        </div>
        <Link
          to="/add-note"
          className="font-worksans font-medium px-10 py-2 bg-[#740F03] text-[#FCFAF9] border-2 border-[#262424] rounded-full duration-300 hover:bg-[#F8F2ED] hover:text-[#262424]"
        >
          <i>SEND A NOTE</i>
        </Link>
      </div>

      {/* Show Notes */}
      <div className="w-full px-4 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Notes &&
          Notes.map((items, i) => (
            <div key={i}>
              <NoteCard items={items} />{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default YourNotes;
