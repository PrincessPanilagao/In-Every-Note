const router = require("express").Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middleware/authMiddleware");

// ----- Sign up Route -----
router.post("/sign-up", async (req, res) => {
  try {
    // taking user information
    const { username, email, password } = req.body;

    // INFORMATION VALIDATION
    // All fields must be filled
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Username must be longer than 5 characters
    if (username.length < 5) {
      return res
        .status(400)
        .json({ message: "Username must have 5 characters." });
    }

    // Password must be longer than 6 characters
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must have 6 characters." });
    }

    // Check user exists or not
    const existingEmail = await User.findOne({ email: email });
    const existingUsername = await User.findOne({ username: username });

    if (existingEmail || existingUsername) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    // Creating a new user
    const newUser = new User({ username, email, password: hashedPass });
    await newUser.save();
    return res.status(200).json({ message: "Account created!" });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// ----- Sign in Route -----
router.post("/sign-in", async (req, res) => {
  try {
    const { email, password } = req.body;
    // All fields must be filled
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check user exists or not
    const existingUser = await User.findOne({ email: email });
    if (!existingUser) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Check password matches or not
    const isMatch = await bcrypt.compare(password, existingUser.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT Token
    // (securely transmitting information between front-end & server)
    const token = jwt.sign(
      { id: existingUser._id, email: existingUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    // Web app cookie
    res.cookie("ienUserToken", token, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 100, // lasts for 30 days
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
    });

    return res.status(200).json({
      id: existingUser._id,
      username: existingUser.username,
      email: email,
      message: "Sign-in Successful!",
    });
  } catch (error) {
    res.status(500).json({ error });
  }
});

// ----- Log out Route -----
router.post("/logout", async (req, res) => {
  res.clearCookie("ienUserToken", {
    httpOnly: true,
  });
  res.status(200).json({ message: "Logged out" });
});

// ----- Check cookie present or not -----
router.get("/check-cookie", async (req, res) => {
  const token = req.cookies.ienUserToken;
  if (token) {
    return res.status(200).json({ message: true });
  }

  return res.status(200).json({ message: false });
});

// ROUTE TO FETCH USER DETAILS
router.get("/user-details", authMiddleware, async (req, res) => {
  try {
    const { email } = req.user;
    // give all other details but exclude password
    const existingUser = await User.findOne({ email: email }).select(
      "-password"
    );
    return res.status(200).json({
      user: existingUser,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

module.exports = router;
