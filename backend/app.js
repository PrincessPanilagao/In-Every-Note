const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const NoteApi = require("./routes/ien");
const cors = require("cors");

require("dotenv").config();
require("./conn/conn");

app.use(
  cors({
    origin: ["https://in-every-note-frontend.onrender.com"], // backend giving access to frontend origin - http://localhost:5173
    credentials: true, // storing credentials from frontend to backend
  })
);
app.use(express.json()); // express json key
app.use(cookieParser());
app.use("/uploads", express.static("uploads"));

// all routes
app.use("/api/v1", userApi);
app.use("/api/v1", NoteApi);

app.listen(process.env.PORT, () => {
  // takes Port number directly from env file
  console.log(`Server started on port : ${process.env.PORT}`);
});
