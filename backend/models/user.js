// ----- User Model -----

const mongoose = require("mongoose");

// SCHEMA (Expected properties & values in the database)
const user = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true, // states important!
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
    },
    // User notes/music dedications stored in an array
    notes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "notes",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", user);
