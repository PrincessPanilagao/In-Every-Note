import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";
// Import pages
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import About from "./pages/About";
import Profile from "./pages/Profile";
import AddNote from "./pages/AddNote";
import AllNotes from "./pages/AllNotes";

import "./fonts.css";
import DescriptionPage from "./pages/DescriptionPage";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/v1/check-cookie",
          { withCredentials: true }
        );
        if (res.data.message == true) {
          dispatch(authActions.login());
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, []);

  return (
    // Background for entire site
    <div className="bg-[url('/src/assets/site-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full">
      {/* Routes of entire web app */}
      <Router>
        <Routes>
          {/* Main - home page */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            {/* About Page */}
            <Route path="/about" element={<About />} />
            {/* Profile  Page */}
            <Route path="/profile" element={<Profile />} />
            {/* Add Notes Page */}
            <Route path="/add-note" element={<AddNote />} />
            {/* All Notes Page */}
            <Route path="/all-notes" element={<AllNotes />} />
            {/* Description Page */}
            <Route path="/description/:id" element={<DescriptionPage />} />
          </Route>
          {/* Authentication - Signup & Login Page */}
          <Route path="/" element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
