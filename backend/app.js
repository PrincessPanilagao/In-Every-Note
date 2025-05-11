const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userApi = require("./routes/user");

require("dotenv").config();
require("./conn/conn");

app.use(express.json()); // express json key
app.use(cookieParser());

app.use("/api/v1", userApi); // all routes

app.listen(process.env.PORT, () => {
  // takes Port number directly from env file
  console.log(`Server started on port : ${process.env.PORT}`);
});
