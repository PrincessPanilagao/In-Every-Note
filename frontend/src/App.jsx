import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import pages
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import './fonts.css';

const App = () => {
  return (
    // Background for entire site
    <div className="bg-[url('/src/assets/site-bg.png')] bg-no-repeat bg-center bg-cover min-h-screen w-full">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};


export default App;