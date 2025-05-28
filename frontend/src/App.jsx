import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout"
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import "./fonts.css";
const App = () => {
  return (
    // Background for entire site
    <div className="bg-[url('/src/assets/site-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full">
      {/* Routes of entire web app */}
      <Router>
        <Routes>
          {/* Main - home page */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
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
