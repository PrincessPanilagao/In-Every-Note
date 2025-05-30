import { createSlice } from "@reduxjs/toolkit";

// Initial state of the web app - no logged in account
const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  // Handling log in and log out feature
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    }, // when user logs out
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
