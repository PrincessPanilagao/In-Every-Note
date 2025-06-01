import React, { useEffect, useState } from "react";
import axios from "axios";
import NoteCard from "../components/NoteCard/NoteCard";

const AllNotes = () => {
  const [Notes, setNotes] = useState();
  useEffect(() => {
    const fetchNotes = async () => {
      const res = await axios.get("http://localhost:3000/api/v1/get-notes");
      setNotes(res.data.data);
    };
    fetchNotes();
  }, []);
  console.log(Notes);
  return (
    <div>
      {/* All Notes title */}
      <div className="flex flex-col items-center justify-center">
        <h1
          className="mt-9 text-5xl sm:text-7xl md:text-7xl lg:text-7xl text-[#9A2B2E] font-taprom"
        >
          All Notes
        </h1>
      </div>

      {/* Show Notes */}
      <div className="w-full px-4 lg:px-12 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
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

export default AllNotes;
