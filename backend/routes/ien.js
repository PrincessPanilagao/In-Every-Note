const authMiddleware = require("../middleware/authMiddleware"); // Middleware to check if user is authenticated
const upload = require("../middleware/multer"); // Middleware to handle file uploads
const User = require("../models/user"); // User model
const notes = require("../models/notes"); // Notes model
const router = require("express").Router();

// Add Note
router.post("/add-note", authMiddleware, upload, async (req, res) => {
  try {
    const { recipient, message } = req.body; // Extract form fields
    const frontImage = req.files["frontImage"][0].path; // Uploaded front image path
    const audioFile = req.files["audioFile"][0].path; // Uploaded audio file path

    // all fields must be filled before proceeding
    if (!recipient || !message || !frontImage || !audioFile) {
      return res.status(400).json({ message: "All fields are required." });
    }
    const { user } = req;
    const userid = user._id;

    // Create new note document
    const newNote = new notes({
      recipient,
      message,
      frontImage,
      audioFile,
      user: userid,
    });
    await newNote.save();
    await User.findByIdAndUpdate(userid, { $push: { notes: newNote._id } });
    res.status(201).json({ message: "Note added successfully!" });
  } catch (error) {
    return res.status(500).json({ message: "Failed too add note." });
  }
});

// Get all notes
router.get("/get-notes", async (req, res) => {
  try {
    const notes = await notes.find().sort({ createdAt: -1 });
    // have recent upload on top
    return res.status(200).json({ data: notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get-user-notes
router.get("/get-user-notes", authMiddleware, async (req, res) => {
  try {
    const { user } = req;
    const userid = user._id;
    const data = await User.findById(userid)
      .populate({ path: "notes" })
      .select("-password");

    // Sort new notes on top of old ones
    if (data && data.notes) {
      data.notes.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return res.status(200).json({ data: data.notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// get podcast by id
router.get("/get-podcast/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const notes = await notes.findById(id);
    return res.status(200).json({ data: notes });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
