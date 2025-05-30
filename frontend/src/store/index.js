import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"; // handles authentication slice of the state

// Function that automatically sets up the store with good default settings
const store = configureStore({
  // Define reducer that will handle updates to slices of the state
  reducer: {
    auth: authReducer,
  },
});

export default store;
