import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const DescriptionPage = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/v1/get-note/${id}`,
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
    <div className="mt-7 px-4 lg:px-12 py-4 h-auto flex flex-col md:flex-row items-center justify-center gap-4">
      <div>
        <div className="text-5xl text-[#9A2B2E] font-taprom -rotate-3">{`To: ${note.recipient}`}</div>
        <div className="relative w-full mt-8 flex items-center justify-center md:justify-start md:items-start">
          {/* Foreground content */}
          <img
            src={`http://localhost:3000/${note.frontImage}`}
            className="size-[48vh] object-cover shadow-[0_4px_10px_rgba(38,36,36,0.7)] -rotate-3"
          />
          <img
            src="/src/assets/vinyl.png"
            className="h-[45vh] object-contain -rotate-3"
            draggable="false"
          />
        </div>
      </div>
      <div className="font-worksans w-3/6 py-8 px-8 bg-[#740F03] border-4 border-[#EBEBEB] rounded shadow-[0_4px_10px_rgba(38,36,36,0.4)]">
        <h4 className="text-base text-[#FCFAF9]">{note.message}</h4>
        <div></div>
      </div>
    </div>
  );
};

export default DescriptionPage;
