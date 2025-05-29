const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");
const NoteApi = require("./routes/ien");
const cors = require("cors");

require("dotenv").config();
require("./conn/conn");

app.use(cors());
app.use(express.json()); // express json key
app.use(cookieParser());

app.use("/api/v1", userApi); // all routes
app.use("/api/v1", NoteApi); // all routes

app.listen(process.env.PORT, () => {
  // takes Port number directly from env file
  console.log(`Server started on port : ${process.env.PORT}`);
});
