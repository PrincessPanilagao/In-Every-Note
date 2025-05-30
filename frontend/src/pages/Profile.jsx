import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import Header from "../components/Profile/Header";
import YourNotes from "../components/Profile/YourNotes";

const Profile = () => {
  // Authentication (users cannot access profile page if not logged in)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <>
          <Header />
          <YourNotes />
        </>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Profile;
