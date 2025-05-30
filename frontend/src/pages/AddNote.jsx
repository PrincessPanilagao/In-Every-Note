import React from "react";
import { useSelector } from "react-redux";
import ErrorPage from "./ErrorPage";
import InputNote from "../components/AddNote/InputNote";

const AddNote = () => {
  // Authentication (users cannot access profile page if not logged in)
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return <div>{isLoggedIn ? <InputNote /> : <ErrorPage />}</div>;
};

export default AddNote;
