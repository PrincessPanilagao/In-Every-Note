// ----- Podcast Model -----

const mongoose = require("mongoose");

// Inputs for creating a new note
const notes = new mongoose.Schema(
  {
    // cover image
    frontImage: {
      type: String,
      unique: true,
      required: true, // states important!
    },
    // Music (mp3 file) - could be changed to API later on
    audioFile: {
      type: String,
      unique: true,
      required: true,
    },
    // Recipient name
    recipient: {
      type: String,
      unique: true,
      required: true,
    },
    // Message
    message: {
      type: String,
      unique: true,
      required: true,
    },

    // User notes/music dedications stored in an array
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("notes", notes);
