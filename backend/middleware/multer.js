const multer = require("multer");

// Set storage for uploaded files (image & audiofile)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // store uploaded files in '../backend/uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
// Initialize upload
const upload = multer({
  storage: storage,
}).fields([
  // what user can upload
  { name: "frontImage", maxCount: 1 },
  { name: "audioFile", maxCount: 1 },
]);

module.exports = upload;
